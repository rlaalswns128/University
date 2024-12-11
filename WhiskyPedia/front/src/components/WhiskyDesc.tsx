import React from 'react';
import { Whisky } from '../apis/WhiskySearch';
import './components.css';

interface WhiskyDescProps {
  whisky: Whisky;
}

const WhiskyDesc: React.FC<WhiskyDescProps> = ({ whisky }) => {
  return (
    <div className="whisky-page">
      <div className="whisky-header">
        <h1>{whisky.whiskyName}</h1>
        <div className="whisky-header-details">
          <p><strong>Origin:</strong> {whisky.whiskyOrigin}</p>
          <p><strong>Distiller:</strong> {whisky.whiskyDistiller}</p>
          <p><strong>Type:</strong> {whisky.whiskyType}</p>
          <p><strong>Flavour:</strong> {whisky.whiskyFlavour}</p>
        </div>
      </div>
      <div className="whisky-main-image">
        {/* <img src={whisky.whiskyImage} alt={whisky.whiskyName} /> */}
      </div>
      <div className="whisky-description">
        <h2>Description</h2>
        {/* <p>{whisky.whiskyDescription}</p> */}
      </div>
      <div className="whisky-reviews">
        <h2>Reviews</h2>
        {/* {whisky.reviews.length > 0 ? (
          // whisky.reviews.map((review, index) => (
            <div key={index} className="whisky-review">
              <h3>{review.userEmail}</h3>
              <p>{review.review}</p>
            </div>
          ))
        ) : ( */}
          <p>No reviews yet.</p>
        {/* )} */}
      </div>
    </div>
  );
};

export default WhiskyDesc;