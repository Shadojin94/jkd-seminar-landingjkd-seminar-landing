import { useState } from 'react';
import { PASS_CONFIGS } from '../types/cart';

interface AddToCartSectionProps {
  onAddItem: (type: '1day' | '2days', quantity: number) => void;
  currency: string;
}

const AddToCartSection = ({ onAddItem, currency }: AddToCartSectionProps) => {
  const [quantities, setQuantities] = useState({
    '1day': 1,
    '2days': 1
  });

  const handleQuantityChange = (type: '1day' | '2days', delta: number) => {
    setQuantities(prev => ({
      ...prev,
      [type]: Math.max(1, prev[type] + delta)
    }));
  };

  const handleAddToCart = (type: '1day' | '2days') => {
    onAddItem(type, quantities[type]);
    // Reset quantity to 1 after adding
    setQuantities(prev => ({ ...prev, [type]: 1 }));
  };

  return (
    <div className="space-y-4">
      <h4 className="font-bold text-white">Add Passes</h4>
      
      {/* 1-Day Pass */}
      <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h5 className="font-medium text-white">{PASS_CONFIGS['1day'].name}</h5>
            <p className="text-sm text-gray-400">{PASS_CONFIGS['1day'].description}</p>
            <p className="text-lg font-bold text-yellow-400">
              {currency}{PASS_CONFIGS['1day'].price}
            </p>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          {/* Quantity Selector */}
          <div className="flex items-center space-x-3">
            <button
              onClick={() => handleQuantityChange('1day', -1)}
              className="w-8 h-8 rounded-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center text-white transition-colors"
              disabled={quantities['1day'] <= 1}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
              </svg>
            </button>
            
            <span className="w-8 text-center font-bold text-white">{quantities['1day']}</span>
            
            <button
              onClick={() => handleQuantityChange('1day', 1)}
              className="w-8 h-8 rounded-full bg-yellow-400 hover:bg-yellow-300 flex items-center justify-center text-black transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </button>
          </div>

          {/* Add Button */}
          <button
            onClick={() => handleAddToCart('1day')}
            className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            <span>Add to Cart</span>
          </button>
        </div>
      </div>

      {/* 2-Day Pass */}
      <div className="bg-gray-800 rounded-lg p-4 border-2 border-yellow-400/30">
        <div className="flex items-center justify-between mb-3">
          <div>
            <div className="flex items-center space-x-2">
              <h5 className="font-medium text-white">{PASS_CONFIGS['2days'].name}</h5>
              <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                SAVE {currency}{PASS_CONFIGS['2days'].savings}
              </span>
            </div>
            <p className="text-sm text-gray-400">{PASS_CONFIGS['2days'].description}</p>
            <div className="flex items-center space-x-2">
              <span className="text-gray-500 line-through text-sm">
                {currency}{PASS_CONFIGS['2days'].originalPrice}
              </span>
              <span className="text-lg font-bold text-yellow-400">
                {currency}{PASS_CONFIGS['2days'].price}
              </span>
            </div>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          {/* Quantity Selector */}
          <div className="flex items-center space-x-3">
            <button
              onClick={() => handleQuantityChange('2days', -1)}
              className="w-8 h-8 rounded-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center text-white transition-colors"
              disabled={quantities['2days'] <= 1}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
              </svg>
            </button>
            
            <span className="w-8 text-center font-bold text-white">{quantities['2days']}</span>
            
            <button
              onClick={() => handleQuantityChange('2days', 1)}
              className="w-8 h-8 rounded-full bg-yellow-400 hover:bg-yellow-300 flex items-center justify-center text-black transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </button>
          </div>

          {/* Add Button */}
          <button
            onClick={() => handleAddToCart('2days')}
            className="bg-yellow-400 hover:bg-yellow-300 text-black px-4 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddToCartSection;
