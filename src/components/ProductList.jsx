import React, { useEffect } from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../redux/actions/productAction'
import { addToCart } from '../redux/actions/cartAction';
import { useNavigate } from 'react-router-dom';

const ProductList = () => {
  const dispatch = useDispatch() ;
  const navigate  = useNavigate();
  const products = useSelector((state)=>state.product.products) || [];  

  useEffect(()=>{
    dispatch(getProducts());
  },[dispatch]);

  const handleAddToCart = (product) =>{
    dispatch(addToCart(product)),
    navigate('/cart');
  }

  return (
    <div className="grid grid-cols-4 gap-3 p-4 px-20">
      {products.length && products.map((product) => (
        <div key={product.id} className="border p-4 rounded shadow">
          <img src={product.image} alt={product.title} className="h-32 mx-auto" />
          <h2 className=" flex justify-center text-lg font-semibold mt-2">{product.title}</h2>
          <p className="text-sm text-gray-600">₹{product.price}</p>
          <button className=' flex- mt-3 w-full bg-amber-400 py-2 rounded hover:bg-blue-700'
          onClick={()=>handleAddToCart(product)}
           > Add to cart</button>
        </div>
      ))}
    </div>
  )
}

export default ProductList