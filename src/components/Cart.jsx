import React from 'react';
import { useSelector } from 'react-redux';

const CartPage = () => {
const cartItems = useSelector((state) => state.cart?.cartItems || []);

  return (
    <div className="p-6">
      <h2 className="flex justify-center text-4xl font-bold mb-4">🛒 Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {cartItems.map((item, index) => (
            <div key={index} className="bg-white p-4 rounded shadow">
              <img src={item.image} alt={item.title} className="h-40 mx-auto" />
              <h3 className="mt-2 font-semibold">{item.title}</h3>
              <p className="text-sm">₹{item.price}</p>
              <p className="text-sm">Quantity: {item.quantity}</p>
              <button className='flex align-center bg-red-600 text-xl rounded-2xl p-2' >Remove Items </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartPage;