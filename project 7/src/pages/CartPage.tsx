import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CartPage: React.FC = () => {
  const { state, removeFromCart, updateQuantity, clearCart } = useCart();

  const formatPrice = (price: number) => {
    return `₹${(price / 100000).toFixed(2)}L`;
  };

  const calculateGST = (price: number) => {
    return price > 1000000 ? price * 0.01 : 0;
  };

  const totalGST = state.items.reduce((sum, item) => sum + calculateGST(item.totalPrice) * item.quantity, 0);
  const finalTotal = state.totalAmount + totalGST;

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <ShoppingBag className="h-24 w-24 text-gray-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
          <p className="text-gray-600 mb-8">Start shopping to add items to your cart</p>
          <Link
            to="/products"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>
              <p className="text-gray-600 mt-1">{state.totalItems} items in your cart</p>
            </div>
            <Link
              to="/products"
              className="flex items-center text-blue-600 hover:text-blue-700 font-medium"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {state.items.map((item) => (
              <div key={`${item.car.id}-${item.selectedColor}-${item.selectedVariant}`} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex flex-col sm:flex-row gap-6">
                  {/* Car Image */}
                  <div className="flex-shrink-0">
                    <img
                      src={item.car.images.main}
                      alt={item.car.name}
                      className="w-full sm:w-32 h-32 object-cover rounded-lg"
                    />
                  </div>

                  {/* Car Details */}
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{item.car.name}</h3>
                        <p className="text-gray-600">{item.car.brand}</p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.car.id)}
                        className="text-red-500 hover:text-red-700 p-2"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <span>Color: <span className="font-medium">{item.selectedColor}</span></span>
                        <span>Variant: <span className="font-medium">{item.selectedVariant}</span></span>
                        <span>Year: <span className="font-medium">{item.selectedYear}</span></span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      {/* Quantity Controls */}
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => updateQuantity(item.car.id, Math.max(1, item.quantity - 1))}
                          className="p-1 rounded-full border border-gray-300 hover:bg-gray-100"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="font-medium">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.car.id, item.quantity + 1)}
                          className="p-1 rounded-full border border-gray-300 hover:bg-gray-100"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>

                      {/* Price */}
                      <div className="text-right">
                        <div className="text-xl font-bold text-gray-900">
                          {formatPrice(item.totalPrice * item.quantity)}
                        </div>
                        {calculateGST(item.totalPrice) > 0 && (
                          <div className="text-sm text-gray-600">
                            +{formatPrice(calculateGST(item.totalPrice) * item.quantity)} GST
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Clear Cart Button */}
            <div className="flex justify-end">
              <button
                onClick={clearCart}
                className="flex items-center px-4 py-2 text-red-600 hover:text-red-700 font-medium"
              >
                <Trash2 className="h-4 w-4 mr-2" />
                Clear Cart
              </button>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Order Summary</h3>
              
              <div className="space-y-3 mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal ({state.totalItems} items)</span>
                  <span className="font-medium">{formatPrice(state.totalAmount)}</span>
                </div>
                {totalGST > 0 && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">GST (1%)</span>
                    <span className="font-medium">{formatPrice(totalGST)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium text-green-600">Free</span>
                </div>
              </div>

              <div className="border-t pt-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-lg font-semibold text-gray-900">Total</span>
                  <span className="text-2xl font-bold text-blue-600">{formatPrice(finalTotal)}</span>
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 mb-4">
                Proceed to Checkout
              </button>

              <div className="text-center text-sm text-gray-600">
                <p>Secure checkout with SSL encryption</p>
              </div>

              {/* Payment Methods */}
              <div className="mt-6 pt-6 border-t">
                <h4 className="text-sm font-medium text-gray-900 mb-3">We Accept</h4>
                <div className="flex justify-center space-x-2">
                  <div className="bg-gray-100 px-3 py-2 rounded text-xs font-medium">VISA</div>
                  <div className="bg-gray-100 px-3 py-2 rounded text-xs font-medium">MC</div>
                  <div className="bg-gray-100 px-3 py-2 rounded text-xs font-medium">UPI</div>
                  <div className="bg-gray-100 px-3 py-2 rounded text-xs font-medium">Net Banking</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;