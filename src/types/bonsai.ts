
export interface Bonsai {
  id: string;
  name: string;
  category: BonsaiCategory;
  age: number; // in years
  height: number; // in cm
  price: number;
  description: string;
  careLevel: 'beginner' | 'intermediate' | 'expert';
  imageUrl: string;
  stock: number;
  featured?: boolean;
}

export type BonsaiCategory = 
  | 'shohin'
  | 'mame'
  | 'chuhin'
  | 'dai'
  | 'penjing'
  | 'indoor'
  | 'outdoor';

export interface BonsaiFilters {
  category?: BonsaiCategory;
  careLevel?: Bonsai['careLevel'];
  priceRange?: {
    min: number;
    max: number;
  };
  searchQuery?: string;
}
