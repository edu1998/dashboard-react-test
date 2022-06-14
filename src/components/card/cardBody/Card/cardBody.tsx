import React, { FC } from 'react';
import './cardBody.css';

interface CardBodyProps {
    children?: JSX.Element

}

const CardBody: FC<CardBodyProps> = ({children}) => (
  <div className="cardBody">
      {children}
  </div>
);

export default CardBody;
