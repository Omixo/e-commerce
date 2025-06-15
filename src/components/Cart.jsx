import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/actions/CartAction'; // Make sure path is correct

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart?.cartItems || []);

  const handleRemove = (productId) => {
    dispatch(removeFromCart(productId));
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">🛒 Your Cart</h2>

      {cartItems.length === 0 ? (
        <div className="text-center text-lg text-gray-600 mt-20">
          <p>Your cart is empty 😢</p>
          <p className="mt-2">Go back and add some awesome products!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-40 mx-auto object-contain mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center line-clamp-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm text-center mb-1">₹{item.price}</p>
              <p className="text-gray-500 text-sm text-center mb-4">
                Quantity: <span className="font-medium">{item.quantity}</span>
              </p>
              <button
                onClick={() => handleRemove(item.id)}
                className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg font-semibold transition duration-200"
              >
                ❌ Remove Item
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartPage;
