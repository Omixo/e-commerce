

// export default Navbar
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="navbar shadow-lg flex items-center rounded-b-[40px] h-20 bg-[#2874f0] px-10 justify-between">
      <div>
        <Link to="/">
          <h1 className="font-bold text-2xl px-5 text-white">E - COMMERCE</h1>
        </Link>
      </div>

      <div className="relative mr-10">
        <Link to="/cart">
          <i className="fa-solid fa-cart-shopping fa-lg text-white"></i>
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-1.5 py-0.5 rounded-full font-bold">
              {totalItems > 9 ? '9+' : totalItems}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;