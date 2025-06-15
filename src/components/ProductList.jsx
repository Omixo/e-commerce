import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../redux/actions/productAction';
import { addToCart } from '../redux/actions/CartAction';
import { motion } from 'framer-motion';

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products) || [];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  // Pagination Logic
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentItems = products.slice(indexOfFirst, indexOfLast);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="p-10 bg-gradient-to-b from-gray-100 to-gray-200 min-h-screen">
      <motion.h1
        className="text-4xl font-bold text-center mb-12 text-gray-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        🛍 Explore Awesome Products
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 px-4">
        {currentItems.map((product, index) => (
          <motion.div
            key={product.id}
            className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-transform transform hover:-translate-y-2"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="p-6 flex flex-col items-center">
              <img
                src={product.image}
                alt={product.title}
                className="h-40 object-contain mb-4"
              />
              <h2 className="text-md font-semibold text-center text-gray-700 mb-1">
                {product.title.length > 40 ? product.title.slice(0, 40) + '...' : product.title}
              </h2>
              <p className="text-gray-500 text-sm mb-4">₹{product.price}</p>

              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => handleAddToCart(product)}
                className="w-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white font-semibold py-2 rounded-xl shadow-md hover:from-purple-600 hover:to-indigo-600 transition duration-300"
              >
                Add to Cart
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-12 space-x-2">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
          <button
            key={num}
            onClick={() => handlePageChange(num)}
            className={`px-4 py-2 rounded-lg font-medium ${
              currentPage === num
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-blue-100'
            } transition`}
          >
            {num}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
