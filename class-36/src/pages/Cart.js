import React from 'react'
import { useSelector, useDispatch } from "react-redux";

// Utils
import { remove } from '../slices/cart';


const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart);

  const removeFromCart = (productId) => {
    dispatch(remove(productId));
  };

  if (cartItems.length === 0) return <h3>Empty Cart</h3>
  return (
    <div style={{ marginTop: "20px" }}>
      {cartItems.map(product => (
        <div className='cartCard' key={product.id}>
          <img src={product.image} alt={product.title} />
          <h5>{product.title}</h5>
          <h5>Rs {product.price * 100}</h5>
          <button className='remove-btn' onClick={() => removeFromCart(product.id)}>Remove Product</button>
        </div>
      ))}
    </div>
  )
}
export default Cart;