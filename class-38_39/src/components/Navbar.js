import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div style={{
      display: "flex",
      justifyContent: 'space-around',
      alignItems: "center"
    }}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/products">Products</Link>
      <Link to="/testimonial">Testimonial</Link>
    </div>
  )
}

export default Navbar