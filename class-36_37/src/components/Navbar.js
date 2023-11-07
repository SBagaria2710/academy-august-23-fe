import React from "react";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

function Navbar() {
  const cartItems = useSelector((store) => store.cart);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <span className="logo">Redux Store</span>
      <div>
        <Link className="navLink" to="/">
          Home
        </Link>
        <Link className="navLink" to="/cart">
          Cart
        </Link>
        <span className="cartCount">Cart Items: {cartItems.length}</span>
      </div>
    </div>
  );
}

export default Navbar;
