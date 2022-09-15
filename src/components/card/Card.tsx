import './card.css';

import React from 'react';

import { Monster } from '../../types/Monster';

interface CardProps {
  monster: Monster;
}

const Card: React.FC<CardProps> = ({ monster: { id, name, email } }) => (
  <div className="card-container">
    <img
      alt="monster"
      src={`https://robohash.org/${id}?set=set2&size=180x180`}
    />
    <h2>{name}</h2>
    <p>{email}</p>
  </div>
);

export default Card;
