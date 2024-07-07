import React from 'react'
import { ICardData } from '../../interfaces/types'

const Card: React.FC<ICardData> = ({ Title, Content }) => {
  return (
    <div className="w-[300px]">
      <div className="card-title flex justify-center">{Title}</div>
      <div className="card-content flex justify-center">{Content}</div>
    </div>
  );
}

export default Card
