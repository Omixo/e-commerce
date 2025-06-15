import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/actions/CartAction';
import { motion, AnimatePresence } from 'framer-motion';

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart?.cartItems || []);

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  // Basic calculations
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const subTotal = cartItems.reduce((sum, item) => sum + item.quantity * item.price, 0);

  // Charges
  const gst = subTotal * 0.18;
  const deliveryCharge = subTotal * 0.10;
  const grandTotal = (subTotal + gst + deliveryCharge).toFixed(2);

  return (
    <div className="p-6 bg-gradient-to-b from-gray-100 to-white min-h-screen">
      <h2 className="text-5xl font-extrabold text-center mb-12 text-gray-800 tracking-tight">
        🛒 Your Cart
      </h2>

      {cartItems.length === 0 ? (
        <div className="text-center text-xl text-gray-500 mt-32">
          <p>Your cart is empty 😢</p>
          <p className="mt-2 text-sm">Go grab some cool stuff!</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 mb-20">
            <AnimatePresence>
              {cartItems.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transform transition-transform duration-300 hover:-translate-y-1"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-40 w-full object-contain mb-4 rounded-xl"
                  />
                  <h3 className="text-xl font-semibold text-gray-800 mb-1 text-center line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-center text-gray-600 font-medium mb-1">₹{item.price}</p>
                  <p className="text-center text-gray-500 text-sm mb-4">
                    Quantity: <span className="font-bold">{item.quantity}</span>
                  </p>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleRemove(item.id)}
                    className="w-full bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white py-2 rounded-xl font-semibold shadow-md transition-all duration-300"
                  >
                    Remove Item ❌
                  </motion.button>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Cart Summary */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-[0_-5px_15px_rgba(0,0,0,0.1)] px-6 py-6 flex flex-col md:flex-row justify-between items-center z-50 rounded-t-2xl"
          >
            <div className="text-gray-800 text-sm md:text-base">
              <p className="font-medium">🧾 Total Items: <span className="font-bold">{totalItems}</span></p>
              <p className="text-gray-600">Subtotal: ₹{subTotal.toFixed(2)}</p>
              <p className="text-gray-600">GST (18%): ₹{gst.toFixed(2)}</p>
              <p className="text-gray-600">Delivery (10%): ₹{deliveryCharge.toFixed(2)}</p>
            </div>

            <div className="text-xl font-bold text-green-600 mt-4 md:mt-0">
              Grand Total: ₹{grandTotal}
            </div>
          </motion.div>
        </>
      )}
    </div>
  );
};

export default CartPage;
