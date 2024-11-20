import React from 'react';
import { Link } from 'react-router-dom';
import './App.css'; // Adjust if you're using a specific CSS file

function VendingMachine() {
  const backgroundStyle = {
    backgroundImage: 'url(https://wallpapers.com/images/hd/rocket-vending-machine-9qrtyaz9czfq4j6l.jpg)', // Replace with actual image URL
  };

  return (
    <div style={backgroundStyle} className="page">
      <h1 className="page-title">Welcome to the Vending Machine</h1>
      <div className="snack-links">
        <Link to="/snack1" className="snack-link">Lay's Chips</Link>
        <Link to="/snack2" className="snack-link">Skittles Tropical</Link>
        <Link to="/snack3" className="snack-link">Gatorade Fierce Strawberry</Link>
      </div>
    </div>
  );
}

export default VendingMachine;
