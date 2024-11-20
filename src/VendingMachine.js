import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
    

function VendingMachine() {
  const backgroundStyle = {
    backgroundImage: 'url(https://wallpapers.com/images/hd/rocket-vending-machine-9qrtyaz9czfq4j6l.jpg)',
  };

  return (
    <div style={backgroundStyle} className="page">
      <h1>Welcome to the Vending Machine</h1>
      <ul>
        <li><Link to="/snack1" className="link">Lay's Chips</Link></li>
        <li><Link to="/snack2" className="link">Skittles Tropical</Link></li>
        <li><Link to="/snack3" className="link">Gatorade Fierce Strawberry</Link></li>
      </ul>
    </div>
  );
}

export default VendingMachine;
