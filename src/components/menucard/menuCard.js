import React, { useState } from 'react';
import './MenuCard.css'; // Import your CSS file

const MenuCard = ({ item }) => {
  const [quantity, setQuantity] = useState(1); // Initialize quantity with 1

  // Function to handle quantity increment
  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  // Function to handle quantity decrement, with a minimum value of 1
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="menu-card">
      <div className="menu-card-image">
        <img src={item.image} alt={item.title} />
      </div>
      <div className="menu-card-details">
        <h3 className="menu-card-title">{item.title}</h3>
        <p className="menu-card-description">{item.description}</p>
        <div className="menu-card-quantity">
          <button onClick={decrementQuantity}>-</button>
          <span>{quantity}</span>
          <button onClick={incrementQuantity}>+</button>
        </div>
        <button className="add-card-button">Add to Cart</button>
      </div>
    </div>
  );
};

export default MenuCard;
