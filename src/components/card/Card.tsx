import React, { FC } from 'react';
import  './Card.css';

interface CardProps {
    children: JSX.Element[]
}

const Card: FC<CardProps> = ({children}) => (
  <div className="card">
      {children}
  </div>
);

export default Card;
