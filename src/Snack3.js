import React from 'react';
import { Link } from 'react-router-dom';
import './App.css'; // Use the global CSS file

function Snack1() {
  const backgroundStyle = {
    backgroundImage: 'url(https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1200,height=672,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/1bc87375-ca6e-459b-b294-5a0c1b47135d-retina-large.jpg)',
  };

  return (
    <div style={backgroundStyle} className="snack-page">
      <h1 className="snack-title">Gatorade Fierce Strawberry</h1>
      <p className="snack-description"> The most scientifically researched and game-tested way to replace electrolytes lost in sweat.</p>
      <Link to="/" className="back-link">Go Back</Link>
    </div>
  );
}

export default Snack1;
