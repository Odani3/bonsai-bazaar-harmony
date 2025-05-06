
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Bonsai } from "@/types/bonsai";
import { toast } from "@/components/ui/use-toast";

export interface CartItem {
  bonsai: Bonsai;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (bonsai: Bonsai, quantity: number) => void;
  removeFromCart: (bonsaiId: string) => void;
  updateQuantity: (bonsaiId: string, quantity: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getCartCount: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  // Load cart from localStorage on initial render
  useEffect(() => {
    const savedCart = localStorage.getItem("hikariBonsaiCart");
    if (savedCart) {
      try {
        setItems(JSON.parse(savedCart));
      } catch (e) {
        console.error("Error parsing cart data from localStorage", e);
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("hikariBonsaiCart", JSON.stringify(items));
  }, [items]);

  const addToCart = (bonsai: Bonsai, quantity: number) => {
    setItems(prevItems => {
      const existingItemIndex = prevItems.findIndex(item => item.bonsai.id === bonsai.id);
      
      if (existingItemIndex >= 0) {
        // Item already in cart, update quantity
        const updatedItems = [...prevItems];
        const newQuantity = updatedItems[existingItemIndex].quantity + quantity;
        
        // Check if we have enough stock
        if (newQuantity > bonsai.stock) {
          toast({
            title: "Estoque insuficiente",
            description: `Apenas ${bonsai.stock} unidades disponíveis.`,
            variant: "destructive"
          });
          return prevItems;
        }
        
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: newQuantity
        };
        
        toast({
          title: "Carrinho atualizado",
          description: `${bonsai.name} (${quantity}x) adicionado ao carrinho.`
        });
        
        return updatedItems;
      } else {
        // New item, add to cart
        toast({
          title: "Adicionado ao carrinho",
          description: `${bonsai.name} (${quantity}x) adicionado ao carrinho.`
        });
        
        return [...prevItems, { bonsai, quantity }];
      }
    });
  };

  const removeFromCart = (bonsaiId: string) => {
    setItems(prevItems => {
      const removedItem = prevItems.find(item => item.bonsai.id === bonsaiId);
      if (removedItem) {
        toast({
          title: "Item removido",
          description: `${removedItem.bonsai.name} foi removido do carrinho.`
        });
      }
      return prevItems.filter(item => item.bonsai.id !== bonsaiId);
    });
  };

  const updateQuantity = (bonsaiId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(bonsaiId);
      return;
    }
    
    setItems(prevItems => {
      const updatedItems = prevItems.map(item => {
        if (item.bonsai.id === bonsaiId) {
          // Check if requested quantity is available in stock
          if (quantity > item.bonsai.stock) {
            toast({
              title: "Estoque insuficiente",
              description: `Apenas ${item.bonsai.stock} unidades disponíveis.`,
              variant: "destructive"
            });
            return item;
          }
          return { ...item, quantity };
        }
        return item;
      });
      return updatedItems;
    });
  };

  const clearCart = () => {
    setItems([]);
    toast({
      title: "Carrinho esvaziado",
      description: "Todos os itens foram removidos do carrinho."
    });
  };

  const getCartTotal = () => {
    return items.reduce((total, item) => total + (item.bonsai.price * item.quantity), 0);
  };

  const getCartCount = () => {
    return items.reduce((count, item) => count + item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{
      items,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      getCartTotal,
      getCartCount
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
