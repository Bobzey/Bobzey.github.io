import React from 'react';
import './FestivalList.css';

const FestivalList = ({ festivals }) => {
  return (
    <div className="festival-list">
      {festivals.map((festival, index) => (
        <span key={index} className="festival-item">{festival}</span>
      ))}
    </div>
  );
};

export default FestivalList;