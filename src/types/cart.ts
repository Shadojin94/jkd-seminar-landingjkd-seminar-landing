export interface CartItem {
  id: string;
  type: '1day' | '2days';
  name: string;
  price: number;
  quantity: number;
}

export interface Cart {
  items: CartItem[];
  total: number;
  totalItems: number;
  totalSavings: number;
}

export const PASS_CONFIGS = {
  '1day': {
    name: '1-Day Pass',
    price: 60,
    description: 'Single day access',
    savings: 0
  },
  '2days': {
    name: '2-Day Pass',
    price: 100,
    originalPrice: 120,
    description: 'Complete 2-day experience',
    savings: 20
  }
} as const;
