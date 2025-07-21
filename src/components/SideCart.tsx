import { useEffect, useRef } from 'react';
import { Cart, PASS_CONFIGS } from '../types/cart';
import UnifiedCartItem from './UnifiedCartItem';

// Define the type for the cart state and functions passed in props
interface CartState {
  cart: Cart;
  addItem: (type: '1day' | '2days', quantity?: number) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  getPayPalDescription: () => string;
  isEmpty: boolean;
}

interface SideCartProps {
  isOpen: boolean;
  onClose: () => void;
  pricing: {
    currency: string;
    paypalClientId: string;
  };
  cartState: CartState;
}

// PayPalButton component should be defined here, before it's used.
const PayPalButton = ({ amount, description, isVisible }: { amount: number; description: string; isVisible: boolean }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.innerHTML = '';
    }

    if (window.paypal && amount > 0 && isVisible) {
      const timer = setTimeout(() => {
        if (containerRef.current) {
          window.paypal.Buttons({
            createOrder: (data: any, actions: any) => {
              return actions.order.create({
                purchase_units: [{
                  amount: {
                    value: amount.toString(),
                    currency_code: 'USD'
                  },
                  description: description
                }]
              })
            },
            onApprove: async (data: any, actions: any) => {
              try {
                const order = await actions.order.capture()
                console.log('Order successful:', order)
                alert('Payment successful! You will receive a confirmation email.')
              } catch (error) {
                console.error('Payment error:', error)
                alert('Payment error. Please try again.')
              }
            },
            onError: (err: any) => {
              console.error('PayPal error:', err)
              alert('PayPal error. Please try again.')
            },
            style: {
              layout: 'vertical',
              color: 'gold',
              shape: 'rect',
              label: 'paypal'
            }
          }).render(containerRef.current)
        }
      }, 200);

      return () => clearTimeout(timer);
    }
  }, [amount, description, isVisible])

  if (amount === 0) return null

  return (
    <div 
      ref={containerRef} 
      className="paypal-container"
      style={{
        maxHeight: '60vh',
        overflowY: 'auto',
        overflowX: 'hidden'
      }}
    />
  )
}

const SideCart = ({ isOpen, onClose, pricing, cartState }: SideCartProps) => {
  const { cart, addItem, removeItem, updateQuantity, clearCart, getPayPalDescription, isEmpty } = cartState;

  const handleQuantityChange = (type: '1day' | '2days', newQuantity: number) => {
    const item = cart.items.find(i => i.type === type);
    if (item) {
      updateQuantity(item.id, newQuantity);
    } else if (newQuantity > 0) {
      addItem(type, newQuantity);
    }
  };
  
  return (
    <>
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-50"
          onClick={onClose}
        />
      )}

      <div className={`fixed right-0 top-0 h-full w-full sm:w-96 max-w-full bg-gray-900 border-l border-gray-700 z-50 transform transition-transform duration-300 ease-in-out flex flex-col ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`} style={{ height: '100vh' }}>
        
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-700 flex-shrink-0">
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-white">Your Reservation</h2>
            {!isEmpty && (
              <p className="text-sm text-gray-400">
                {cart.totalItems} pass{cart.totalItems > 1 ? 'es' : ''} • {pricing.currency}{cart.total}
              </p>
            )}
          </div>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors p-1"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto min-h-0">
          <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
            
            <div className="bg-gray-800 rounded-lg p-4">
              <h3 className="font-bold text-white mb-2">Jun Fan Jeet Kune Do Seminar</h3>
              <p className="text-gray-400 text-sm">August 30-31, 2025</p>
              <p className="text-gray-400 text-sm">Warrior Strength Martial Arts, Bellevue WA</p>
            </div>

            <div className="space-y-4">
                <h4 className="font-bold text-white">Select Your Pass</h4>
                <UnifiedCartItem
                    type="1day"
                    quantity={cart.items.find(i => i.type === '1day')?.quantity || 0}
                    onQuantityChange={handleQuantityChange}
                    currency={pricing.currency}
                />
                <UnifiedCartItem
                    type="2days"
                    quantity={cart.items.find(i => i.type === '2days')?.quantity || 0}
                    onQuantityChange={handleQuantityChange}
                    currency={pricing.currency}
                />
            </div>

            {isEmpty && (
              <div className="text-center py-8">
                <div className="text-6xl mb-4">🛒</div>
                <p className="text-gray-400 mb-4">Your cart is empty</p>
                <p className="text-sm text-gray-500">Add passes above to get started</p>
              </div>
            )}
          </div>
        </div>

        {!isEmpty && (
          <div className="flex-shrink-0 p-4 sm:p-6 border-t border-gray-700 bg-gray-900 space-y-4">
            <div className="bg-gray-800 rounded-lg p-4 space-y-3">
              <div className="space-y-2">
                <div className="flex justify-between text-gray-400">
                  <span>Subtotal ({cart.totalItems} pass{cart.totalItems > 1 ? 'es' : ''})</span>
                  <span>{pricing.currency}{cart.total + cart.totalSavings}</span>
                </div>
                
                {cart.totalSavings > 0 && (
                  <div className="flex justify-between text-green-400">
                    <span>Total Savings</span>
                    <span>-{pricing.currency}{cart.totalSavings}</span>
                  </div>
                )}
                
                <div className="border-t border-gray-700 pt-3">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-white">Total</span>
                    <span className="text-2xl font-bold text-yellow-400">
                      {pricing.currency}{cart.total}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="text-xs text-gray-400 text-center">
                Secure payment via PayPal • SSL encrypted
              </div>
              
              <PayPalButton 
                amount={cart.total} 
                description={getPayPalDescription()}
                isVisible={isOpen && !isEmpty}
              />

              <div className="text-center">
                <div className="flex items-center justify-center space-x-4 text-xs text-gray-500">
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                    Secure
                  </span>
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Verified
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default SideCart;