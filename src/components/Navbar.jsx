import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.cartItems || []);
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="shadow-md bg-gradient-to-r from-blue-600 to-indigo-600 px-6 md:px-12 py-4 flex items-center justify-between rounded-b-3xl">
      <div className="text-white font-bold text-2xl tracking-wide hover:scale-105 transition duration-300">
        <Link to="/">🛍️ E-Commerce</Link>
      </div>

      <div className="relative">
        <Link to="/cart" className="text-white text-xl hover:text-yellow-300 transition duration-300">
          <i className="fa-solid fa-cart-shopping"></i>
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-3 bg-red-600 text-white text-[10px] px-1.5 py-0.5 rounded-full font-semibold animate-pulse">
              {totalItems > 9 ? '9+' : totalItems}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
