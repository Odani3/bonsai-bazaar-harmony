
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BonsaiFilters as BonsaiFiltersType } from "@/types/bonsai";

interface BonsaiFiltersProps {
  filters: BonsaiFiltersType;
  onFilterChange: (filters: BonsaiFiltersType) => void;
  onClearFilters: () => void;
}

const BonsaiFilters = ({
  filters,
  onFilterChange,
  onClearFilters,
}: BonsaiFiltersProps) => {
  const [priceRange, setPriceRange] = useState<[number, number]>([
    filters.priceRange?.min || 0,
    filters.priceRange?.max || 500,
  ]);
  const [searchQuery, setSearchQuery] = useState(filters.searchQuery || "");

  const handleCategoryChange = (value: string) => {
    onFilterChange({
      ...filters,
      category: value as BonsaiFiltersType["category"],
    });
  };

  const handleCareLevelChange = (value: string) => {
    onFilterChange({
      ...filters,
      careLevel: value as BonsaiFiltersType["careLevel"],
    });
  };

  const handlePriceChange = (value: number[]) => {
    setPriceRange([value[0], value[1]]);
    onFilterChange({
      ...filters,
      priceRange: { min: value[0], max: value[1] },
    });
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    onFilterChange({
      ...filters,
      searchQuery: e.target.value,
    });
  };

  const handleClearFilters = () => {
    setPriceRange([0, 500]);
    setSearchQuery("");
    onClearFilters();
  };

  return (
    <div className="space-y-6 p-4 zen-box">
      <div>
        <h3 className="font-serif text-lg font-medium mb-4">Filtros</h3>
        
        <div className="space-y-4">
          {/* Search */}
          <div className="space-y-2">
            <Label htmlFor="search">Buscar</Label>
            <Input
              id="search"
              placeholder="Nome ou descrição"
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>
          
          {/* Category */}
          <div className="space-y-2">
            <Label htmlFor="category">Categoria</Label>
            <Select
              value={filters.category || "all"}
              onValueChange={handleCategoryChange}
            >
              <SelectTrigger id="category">
                <SelectValue placeholder="Todas categorias" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas categorias</SelectItem>
                <SelectItem value="shohin">Shohin</SelectItem>
                <SelectItem value="mame">Mame</SelectItem>
                <SelectItem value="chuhin">Chuhin</SelectItem>
                <SelectItem value="dai">Dai</SelectItem>
                <SelectItem value="penjing">Penjing</SelectItem>
                <SelectItem value="indoor">Interior</SelectItem>
                <SelectItem value="outdoor">Exterior</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          {/* Care Level */}
          <div className="space-y-2">
            <Label htmlFor="careLevel">Nível de Cuidado</Label>
            <Select
              value={filters.careLevel || "all"}
              onValueChange={handleCareLevelChange}
            >
              <SelectTrigger id="careLevel">
                <SelectValue placeholder="Todos níveis" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos níveis</SelectItem>
                <SelectItem value="beginner">Iniciante</SelectItem>
                <SelectItem value="intermediate">Intermediário</SelectItem>
                <SelectItem value="expert">Avançado</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          {/* Price Range */}
          <div className="space-y-5">
            <div>
              <Label>Faixa de Preço</Label>
              <div className="flex items-center justify-between mt-1">
                <span className="text-sm">R$ {priceRange[0]}</span>
                <span className="text-sm">R$ {priceRange[1]}</span>
              </div>
            </div>
            <Slider
              defaultValue={[priceRange[0], priceRange[1]]}
              max={500}
              step={10}
              value={[priceRange[0], priceRange[1]]}
              onValueChange={handlePriceChange}
              className="my-4"
            />
          </div>
          
          <Button
            onClick={handleClearFilters}
            variant="outline"
            className="w-full mt-2"
          >
            Limpar Filtros
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BonsaiFilters;
