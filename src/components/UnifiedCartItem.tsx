
import { PASS_CONFIGS } from '../types/cart';

interface UnifiedCartItemProps {
  type: '1day' | '2days';
  quantity: number;
  onQuantityChange: (type: '1day' | '2days', newQuantity: number) => void;
  currency: string;
}

const UnifiedCartItem = ({ type, quantity, onQuantityChange, currency }: UnifiedCartItemProps) => {
  const config = PASS_CONFIGS[type];

  const handleDecrement = () => {
    onQuantityChange(type, Math.max(0, quantity - 1));
  };

  const handleIncrement = () => {
    onQuantityChange(type, quantity + 1);
  };

  return (
    <div className={`bg-gray-800 rounded-lg p-4 border ${quantity > 0 ? 'border-yellow-400' : 'border-gray-700'}`}>
      <div className="flex items-center justify-between mb-3">
        <div>
          <div className="flex items-center space-x-2">
            <h5 className="font-medium text-white">{config.name}</h5>
            {config.savings > 0 && (
              <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                SAVE {currency}{config.savings}
              </span>
            )}
          </div>
          <p className="text-sm text-gray-400">{config.description}</p>
          <div className="flex items-center space-x-2">
            {config.originalPrice > config.price && (
                <span className="text-gray-500 line-through text-sm">
                    {currency}{config.originalPrice}
                </span>
            )}
            <span className="text-lg font-bold text-yellow-400">
              {currency}{config.price}
            </span>
          </div>
        </div>
      </div>
      
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-300">Quantity:</span>
        <div className="flex items-center space-x-3">
          <button
            onClick={handleDecrement}
            className="w-8 h-8 rounded-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center text-white transition-colors"
            disabled={quantity <= 0}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
            </svg>
          </button>
          
          <span className="w-8 text-center font-bold text-white">{quantity}</span>
          
          <button
            onClick={handleIncrement}
            className="w-8 h-8 rounded-full bg-yellow-400 hover:bg-yellow-300 flex items-center justify-center text-black transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default UnifiedCartItem;
