import React from 'react';
import { Link } from 'react-router-dom';
import { Reaction } from '../reaction/Reaction';

export const GreenCard: React.FC = () => {
  return (
    <>
      <div className="greenCard">
        <div className="greenCard_card">
          <div className="card_icon"></div>
          <div className="card_userCard">
            <span className="userCard_icon" />
            <Link to="/" className="userCard_name">
              Мария Шалаева
            </Link>
          </div>
        </div>
      </div>

      <Reaction />
    </>
  );
};
