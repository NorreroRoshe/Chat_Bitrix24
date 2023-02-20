import React from 'react';
import { Link } from 'react-router-dom';

export const Reaction: React.FC = () => {
  return <div className="reaction">
    <ul className="reaction_list">
      <li className="reaction_item">Нравится</li>
      <li className="reaction_item">Комментировать</li>
      <li className="reaction_item">Не следить</li>
      <li className="reaction_item">Ещё</li>
      <li className="reaction_item">
        <span className="reaction_item_icon"></span>
        <span className="reaction_item_count">3</span>
      </li>
    </ul>
  </div>;
};
