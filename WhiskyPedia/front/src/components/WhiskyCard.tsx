import React from 'react';
import { Link } from 'react-router-dom';
import { Whisky } from '../apis/WhiskySearch';
import './components.css';

interface WhiskyCardProps {
  whisky: Whisky;
}

const WhiskyCard: React.FC<WhiskyCardProps> = ({ whisky }) => {
  return (
    <div className="whisky-card">
      <div className="whisky-card-image">
        {/* <img src={whisky.whiskyImage} alt={whisky.whiskyName} /> */}
      </div>
      <div className="whisky-card-content">
        <h3>{whisky.whiskyName}</h3>
        <p><strong>Origin:</strong> {whisky.whiskyOrigin}</p>
        <p><strong>Distiller:</strong> {whisky.whiskyDistiller}</p>
        <p><strong>Type:</strong> {whisky.whiskyType}</p>
        <Link to={`/whisky/${whisky.whiskyID}`} className="whisky-card-link">자세히 보기</Link>
      </div>
    </div>
  );
};

export default WhiskyCard;