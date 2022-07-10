import React from "react";
import "./App.css"
import CartButton from "./components/CartButton";
import Hero from "./components/Hero";
import Navbar from "./components/nav/Navbar";
import Products from "./components/Products";
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Products />
    </div>
  );
}

export default App;
