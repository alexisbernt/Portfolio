import React, { useState } from "react";
import "../css/Gifts.css";

function Gifts() {
  const [cart, setCart] = useState([]);

  const gifts = [
    {
      id: 1,
      name: "Eco Starter Basket",
      description: "Includes reusable straws, bamboo utensils, and organic snacks.",
      price: 19.99,
      image: "/images/eco-basket1.jpg",
    },
    {
      id: 2,
      name: "Sustainable Relaxation Set",
      description: "Handmade candles, herbal teas, and biodegradable packaging.",
      price: 24.99,
      image: "/images/eco-basket2.jpg",
    },
    {
      id: 3,
      name: "Zero-Waste Essentials",
      description: "Reusable bags, natural soaps, and a wooden hairbrush.",
      price: 29.99,
      image: "/images/eco-basket3.jpg",
    },
  ];

  const addToCart = (gift) => {
    setCart((prev) => [...prev, gift]);
  };

  return (
    <div className="gifts-page">
      {/* Header */}
      <header className="gifts-header">
        <h1>Eco-Friendly Gift Baskets</h1>
        <p>Thoughtful gifts that are kind to the planet — and your wallet.</p>
      </header>

      {/* Product Grid */}
      <div className="gifts-grid">
        {gifts.map((gift) => (
          <div className="gift-card" key={gift.id}>
            <img src={gift.image} alt={gift.name} className="gift-image" />
            <h3>{gift.name}</h3>
            <p>{gift.description}</p>
            <p className="gift-price">${gift.price.toFixed(2)}</p>
            <button onClick={() => addToCart(gift)} className="add-btn">
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Cart Section */}
      {cart.length > 0 && (
        <div className="cart-section">
          <h2>🛍️ Your Cart</h2>
          <ul>
            {cart.map((item, index) => (
              <li key={index}>{item.name} - ${item.price.toFixed(2)}</li>
            ))}
          </ul>
          <p className="total">
            Total: $
            {cart.reduce((sum, item) => sum + item.price, 0).toFixed(2)}
          </p>
        </div>
      )}
    </div>
  );
}

export default Gifts;
