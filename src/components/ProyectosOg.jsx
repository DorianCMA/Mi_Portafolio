import React from 'react';
import '../styles/Cover.css';

const Card = ({ imageUrl, title, text }) => {
    return (
      <div className="card">
        <div className="image-container">
          <img src={imageUrl} alt="Card" />
        </div>
        <div className="content">
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
      </div>
    );
  };

  

export default Card;
