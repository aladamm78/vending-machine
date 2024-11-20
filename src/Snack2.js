import React from 'react';
import { Link } from 'react-router-dom';
import './App.css'; // Use the global CSS file

function Snack1() {
  const backgroundStyle = {
    backgroundImage: 'url(https://candydistributors.com/cdn/shop/products/209-00175-skittles-bite-size-tropical-candies-2.17oz_2048x.jpg?v=1610949323)',
  };

  return (
    <div style={backgroundStyle} className="snack-page">
      <h1 className="snack-title">Skittles Tropical</h1>
      <p className="snack-description">Experience tropical, fruity flavors with SKITTLES Tropical featuring banana berry, kiwi lime, mango tangelo, pineapple passionfruit, and strawberry star.</p>
      <Link to="/" className="back-link">Go Back</Link>
    </div>
  );
}

export default Snack1;
