import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Styles
import './App.css';

// Components
import Navbar from './components/Navbar';

// Pages (Dynamic Imports/Lazy Loaded)
const Home = lazy(() => import("./Pages/Home"));
const About = lazy(() => import("./Pages/About"));
const Products = lazy(() => import("./Pages/Products"));
const Testimonial = lazy(() => import("./Pages/Testimonial"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<h2>Loading...</h2>}>
        <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/testimonial" element={<Testimonial />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;