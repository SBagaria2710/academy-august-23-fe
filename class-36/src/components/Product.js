import React, { useState, useEffect } from 'react'
import { useDispatch } from "react-redux";
import axios from 'axios';

// Utils
import { add } from '../slices/cart';

// Contants
import { PRODUCTS_URL } from '../constant';

function Product() {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getProducts = async () => {
    setIsLoading(true);
    const res = await axios.get(PRODUCTS_URL);
    if (res.status === 200) {
      setProducts(res.data);
    }
    setIsLoading(false);
  };

  const addToCart = (product) => {
    dispatch(add(product));
  };

  useEffect(() => {
    getProducts();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  return (
    <div className='productsWrapper'>
      {products.map((product) => (
        <div key={product.id} className='card'>
          <img src={product.image} alt={product.title} />
          <h6>{product.title}</h6>
          <h5>Rs {product.price * 100}</h5>
          <button className='btn' onClick={() => addToCart(product)}>Add to cart</button>
        </div>
      ))}
    </div>
  )
}

export default Product