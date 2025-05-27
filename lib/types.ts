export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  stock: number;

  // Optional but common for cosmetics:
  brand?: string;
  category?: string; // e.g. "lipstick", "foundation", "skincare"
  tags?: string[]; // e.g. ["vegan", "cruelty-free", "long-lasting"]
  shade?: string; // e.g. "Rose Nude"
  volume?: string; // e.g. "50ml", "1.7oz"
  ingredients?: string[];
  skinType?: string[]; // e.g. ["oily", "dry", "sensitive"]
  usageInstructions?: string;
  warnings?: string;
  isLimitedEdition?: boolean;
  rating?: number; // 0-5 average user rating
  reviewsCount?: number;
}

export interface CartItem {
  id: string;
  product: Product;
  quantity: number;
}

export interface Cart {
  items: CartItem[];
  total: number;
  itemCount: number;
}
