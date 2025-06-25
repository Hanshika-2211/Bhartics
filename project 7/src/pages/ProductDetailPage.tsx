import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Zap, Heart, Share2, Check, Star } from 'lucide-react';
import { cars } from '../data/cars';
import { useCart } from '../context/CartContext';
import { CartItem } from '../types';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const car = cars.find(c => c.id === id);
  
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState(car?.colors[0].name || '');
  const [selectedVariant, setSelectedVariant] = useState(car?.variants[0].name || '');
  const [selectedYear, setSelectedYear] = useState(car?.years[0] || 2024);
  const [quantity, setQuantity] = useState(1);

  if (!car) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Car not found</h2>
          <button
            onClick={() => navigate('/products')}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Products
          </button>
        </div>
      </div>
    );
  }

  const selectedColorData = car.colors.find(c => c.name === selectedColor);
  const selectedVariantData = car.variants.find(v => v.name === selectedVariant);
  const currentImages = selectedColorData?.images || car.images.gallery;
  
  const basePrice = car.basePrice;
  const variantPrice = selectedVariantData?.priceModifier || 0;
  const totalPrice = basePrice + variantPrice;
  const gst = totalPrice > 1000000 ? totalPrice * 0.01 : 0;
  const finalPrice = totalPrice + gst;

  const formatPrice = (price: number) => {
    return `₹${(price / 100000).toFixed(2)}L`;
  };

  const handleAddToCart = () => {
    const cartItem: CartItem = {
      car,
      selectedColor,
      selectedVariant,
      selectedYear,
      quantity,
      totalPrice: finalPrice,
    };
    addToCart(cartItem);
    // Show success message or redirect
    alert('Added to cart successfully!');
  };

  const handleBuyNow = () => {
    handleAddToCart();
    navigate('/cart');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Button */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Images Section */}
          <div className="space-y-4">
            <div className="relative">
              <img
                src={currentImages[selectedImageIndex]}
                alt={`${car.name} - ${selectedColor}`}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute top-4 right-4 flex space-x-2">
                <button className="p-2 bg-white rounded-full shadow hover:shadow-md transition-shadow">
                  <Heart className="h-5 w-5 text-gray-600" />
                </button>
                <button className="p-2 bg-white rounded-full shadow hover:shadow-md transition-shadow">
                  <Share2 className="h-5 w-5 text-gray-600" />
                </button>
              </div>
            </div>
            
            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-4 gap-2">
              {currentImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`relative h-20 rounded-lg overflow-hidden ${
                    selectedImageIndex === index 
                      ? 'ring-2 ring-blue-500' 
                      : 'hover:opacity-75'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${car.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Details Section */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                  {car.brand}
                </span>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">(4.8)</span>
                </div>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{car.name}</h1>
              <p className="text-gray-600 mb-6">
                Experience the perfect blend of luxury, performance, and innovation with this premium vehicle.
              </p>
            </div>

            {/* Color Selection */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Color</h3>
              <div className="flex space-x-3">
                {car.colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => {
                      setSelectedColor(color.name);
                      setSelectedImageIndex(0);
                    }}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg border-2 transition-all ${
                      selectedColor === color.name
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    <div
                      className="w-4 h-4 rounded-full border"
                      style={{ backgroundColor: color.code }}
                    ></div>
                    <span className="text-sm font-medium">{color.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Variant Selection */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Variant</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {car.variants.map((variant) => (
                  <button
                    key={variant.name}
                    onClick={() => setSelectedVariant(variant.name)}
                    className={`p-4 rounded-lg border-2 text-left transition-all ${
                      selectedVariant === variant.name
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    <div className="font-semibold text-gray-900">{variant.name}</div>
                    <div className="text-sm text-gray-600">{variant.engine}</div>
                    <div className="text-sm text-gray-600">{variant.transmission}</div>
                    {variant.priceModifier > 0 && (
                      <div className="text-sm font-medium text-blue-600 mt-1">
                        +{formatPrice(variant.priceModifier)}
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Year Selection */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Model Year</h3>
              <div className="flex space-x-3">
                {car.years.map((year) => (
                  <button
                    key={year}
                    onClick={() => setSelectedYear(year)}
                    className={`px-4 py-2 rounded-lg border-2 transition-all ${
                      selectedYear === year
                        ? 'border-blue-500 bg-blue-50 text-blue-600'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    {year}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Breakdown */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Price Breakdown</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Base Price</span>
                  <span className="font-medium">{formatPrice(basePrice)}</span>
                </div>
                {variantPrice > 0 && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Variant Upgrade</span>
                    <span className="font-medium">+{formatPrice(variantPrice)}</span>
                  </div>
                )}
                {gst > 0 && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">GST (1%)</span>
                    <span className="font-medium">+{formatPrice(gst)}</span>
                  </div>
                )}
                <div className="border-t pt-2">
                  <div className="flex justify-between">
                    <span className="text-lg font-semibold text-gray-900">Total Price</span>
                    <span className="text-2xl font-bold text-blue-600">{formatPrice(finalPrice)}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4">
              <button
                onClick={handleAddToCart}
                className="flex-1 flex items-center justify-center px-6 py-3 bg-white border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                Add to Cart
              </button>
              <button
                onClick={handleBuyNow}
                className="flex-1 flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all"
              >
                <Zap className="h-5 w-5 mr-2" />
                Buy Now
              </button>
            </div>

            {/* Specifications */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Specifications</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-gray-600">Engine</span>
                  <div className="font-medium">{car.specifications.engine}</div>
                </div>
                <div>
                  <span className="text-gray-600">Power</span>
                  <div className="font-medium">{car.specifications.power}</div>
                </div>
                <div>
                  <span className="text-gray-600">Torque</span>
                  <div className="font-medium">{car.specifications.torque}</div>
                </div>
                <div>
                  <span className="text-gray-600">Mileage</span>
                  <div className="font-medium">{car.specifications.mileage}</div>
                </div>
                <div>
                  <span className="text-gray-600">Seating</span>
                  <div className="font-medium">{car.specifications.seatingCapacity} seats</div>
                </div>
                <div>
                  <span className="text-gray-600">Fuel Type</span>
                  <div className="font-medium">{car.specifications.fuelType}</div>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Features</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {car.features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;