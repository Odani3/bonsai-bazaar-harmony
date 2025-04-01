
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
  category?: BonsaiCategory | 'all';
  careLevel?: Bonsai['careLevel'] | 'all';
  priceRange?: {
    min: number;
    max: number;
  };
  searchQuery?: string;
}
