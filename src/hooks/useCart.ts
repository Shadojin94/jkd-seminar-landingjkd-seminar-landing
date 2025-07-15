import { useState, useCallback, useMemo } from 'react';
import { CartItem, Cart, PASS_CONFIGS } from '../types/cart';

export const useCart = () => {
  const [items, setItems] = useState<CartItem[]>([]);

  // Generate unique ID for cart items
  const generateId = useCallback(() => {
    return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }, []);

  // Add item to cart
  const addItem = useCallback((type: '1day' | '2days', quantity: number = 1) => {
    if (quantity <= 0) return;

    const config = PASS_CONFIGS[type];
    const existingItem = items.find(item => item.type === type);

    if (existingItem) {
      // Update existing item quantity
      setItems(prev => prev.map(item => 
        item.type === type 
          ? { ...item, quantity: item.quantity + quantity }
          : item
      ));
    } else {
      // Add new item
      const newItem: CartItem = {
        id: generateId(),
        type,
        name: config.name,
        price: config.price,
        quantity
      };
      setItems(prev => [...prev, newItem]);
    }
  }, [items, generateId]);

  // Remove item from cart
  const removeItem = useCallback((id: string) => {
    setItems(prev => prev.filter(item => item.id !== id));
  }, []);

  // Update item quantity
  const updateQuantity = useCallback((id: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(id);
      return;
    }

    setItems(prev => prev.map(item => 
      item.id === id 
        ? { ...item, quantity }
        : item
    ));
  }, [removeItem]);

  // Clear entire cart
  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  // Calculate cart totals
  const cart: Cart = useMemo(() => {
    const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
    
    // Calculate total savings (only for 2-day passes)
    const totalSavings = items.reduce((sum, item) => {
      if (item.type === '2days') {
        return sum + (PASS_CONFIGS['2days'].savings * item.quantity);
      }
      return sum;
    }, 0);

    return {
      items,
      total,
      totalItems,
      totalSavings
    };
  }, [items]);

  // Get formatted description for PayPal
  const getPayPalDescription = useCallback(() => {
    if (items.length === 0) return '';
    
    const descriptions = items.map(item => 
      `${item.quantity}x ${item.name}`
    );
    
    return `${descriptions.join(' + ')} - Jun Fan JKD Seminar`;
  }, [items]);

  // Check if cart is empty
  const isEmpty = cart.items.length === 0;

  return {
    cart,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    getPayPalDescription,
    isEmpty
  };
};
