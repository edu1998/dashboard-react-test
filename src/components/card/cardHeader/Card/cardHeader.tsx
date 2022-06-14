import React, { FC } from 'react';
import './cardHeader.css';

interface CardHeaderProps {
    children?: JSX.Element
}

const CardHeader: FC<CardHeaderProps> = ({children}) => (
  <div className="cardHeader">
      {children}
  </div>
);

export default CardHeader;
