import React from 'react';
import { Link } from 'react-router-dom';
import './App.css'; // Use the global CSS file

function Snack1() {
  const backgroundStyle = {
    backgroundImage: 'url(https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1200,height=672,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/0d644618-ca03-4f6b-aaa7-726bcdec150f-retina-large.png)',
  };

  return (
    <div style={backgroundStyle} className="snack-page">
      <h1 className="snack-title">Lay's Classic</h1>
      <p className="snack-description">Made with quality, homegrown Canadian potatoes!</p>
      <Link to="/" className="back-link">Go Back</Link>
    </div>
  );
}

export default Snack1;
