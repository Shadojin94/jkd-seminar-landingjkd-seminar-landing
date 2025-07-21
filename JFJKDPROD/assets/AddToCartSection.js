import { useState, useEffect } from 'react';
import { PASS_CONFIGS } from '../types/cart';

const AddToCartSection = ({ onAddItem, currency }) => {
  const [quantities, setQuantities] = useState({
    '1day': 0,
    '2days': 0
  });

  const handleQuantityChange = (type, newQuantity) => {
    const clampedQuantity = Math.max(0, newQuantity);
    setQuantities(prev => ({
      ...prev,
      [type]: clampedQuantity
    }));
    
    // Ajout automatique au panier ou retrait si quantité = 0
    onAddItem(type, clampedQuantity);
  };

  return (
    <div className="space-y-4">
      <h4 className="font-bold text-white">Select Your Pass</h4>
      
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
          <span className="text-sm text-gray-300">Quantity:</span>
          <div className="flex items-center space-x-3">
            <button
              onClick={() => handleQuantityChange('1day', quantities['1day'] - 1)}
              className="w-8 h-8 rounded-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center text-white transition-colors"
              disabled={quantities['1day'] <= 0}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
              </svg>
            </button>
            
            <span className="w-8 text-center font-bold text-white">{quantities['1day']}</span>
            
            <button
              onClick={() => handleQuantityChange('1day', quantities['1day'] + 1)}
              className="w-8 h-8 rounded-full bg-yellow-400 hover:bg-yellow-300 flex items-center justify-center text-black transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </button>
          </div>
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
          <span className="text-sm text-gray-300">Quantity:</span>
          <div className="flex items-center space-x-3">
            <button
              onClick={() => handleQuantityChange('2days', quantities['2days'] - 1)}
              className="w-8 h-8 rounded-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center text-white transition-colors"
              disabled={quantities['2days'] <= 0}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
              </svg>
            </button>
            
            <span className="w-8 text-center font-bold text-white">{quantities['2days']}</span>
            
            <button
              onClick={() => handleQuantityChange('2days', quantities['2days'] + 1)}
              className="w-8 h-8 rounded-full bg-yellow-400 hover:bg-yellow-300 flex items-center justify-center text-black transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToCartSection;
