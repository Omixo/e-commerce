import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.cartItems || []);
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="shadow-md bg-gradient-to-r from-purple-600 to-indigo-600 px-6 md:px-12 py-4 flex items-center justify-between rounded-b-3xl sticky top-0 z-50">
      <div className="text-white font-bold text-3xl tracking-wide hover:scale-105 transition duration-300">
        <Link to="/">🛍️ E-Commerce</Link>
      </div>

      <div className="relative">
        <Link
          to="/cart"
          className="text-white text-2xl hover:text-yellow-300 transition duration-300"
        >
          <i className="fa-solid fa-cart-shopping"></i>
        </Link>

        {/* Cart Badge */}
        <AnimatePresence>
          {totalItems > 0 && (
            <motion.span
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              className="absolute -top-2 -right-3 bg-red-600 text-white text-[10px] px-2 py-0.5 rounded-full font-semibold flex items-center justify-center animate-pulse"
            >
              {totalItems > 9 ? '9+' : totalItems}
            </motion.span>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
