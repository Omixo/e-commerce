import React from 'react';
import ProductList from './components/ProductList';
import Navbar from './components/Navbar';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import CartPage from './components/Cart';

 const App = () => {
  return (
    <BrowserRouter> 


     <loader></loader> : 
      <div className="bg-gray-100 min-h-screen">
        <Navbar /> 
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
export default App;