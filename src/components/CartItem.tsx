import { CartItem as CartItemType } from '../types/cart';

interface CartItemProps {
  item: CartItemType;
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemove: (id: string) => void;
  currency: string;
}

const CartItem = ({ item, onUpdateQuantity, onRemove, currency }: CartItemProps) => {
  const handleQuantityChange = (delta: number) => {
    const newQuantity = item.quantity + delta;
    if (newQuantity > 0) {
      onUpdateQuantity(item.id, newQuantity);
    }
  };

  const subtotal = item.price * item.quantity;

  return (
    <div className="bg-gray-800 rounded-lg p-4 space-y-3">
      {/* Item Header */}
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h4 className="font-medium text-white">{item.name}</h4>
          <p className="text-sm text-gray-400">
            {currency}{item.price} each
          </p>
        </div>
        
        {/* Remove Button */}
        <button
          onClick={() => onRemove(item.id)}
          className="text-gray-400 hover:text-red-400 transition-colors p-1"
          title="Remove item"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </button>
      </div>

      {/* Quantity Controls and Subtotal */}
      <div className="flex items-center justify-between">
        {/* Quantity Controls */}
        <div className="flex items-center space-x-3">
          <button
            onClick={() => handleQuantityChange(-1)}
            className="w-8 h-8 rounded-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center text-white transition-colors"
            disabled={item.quantity <= 1}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
            </svg>
          </button>
          
          <span className="w-8 text-center font-bold text-white">{item.quantity}</span>
          
          <button
            onClick={() => handleQuantityChange(1)}
            className="w-8 h-8 rounded-full bg-yellow-400 hover:bg-yellow-300 flex items-center justify-center text-black transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </button>
        </div>

        {/* Subtotal */}
        <div className="text-right">
          <div className="font-bold text-white">
            {currency}{subtotal}
          </div>
          {item.type === '2days' && (
            <div className="text-xs text-green-400">
              Save {currency}{20 * item.quantity}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartItem;
