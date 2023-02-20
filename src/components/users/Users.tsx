import React from 'react';
import { Link } from 'react-router-dom';

export const Users: React.FC = () => {
  return (
    <div className="users">
      <span className="users_img" />
      <div className="users_wrapp">
        <Link className="users_wrapp_name" to="/">Битрикс24</Link>
        <span className="users_wrapp_data">Сегодня, 07:07</span>
        <p className="users_wrapp_add">Добавлен новый сотрудник</p>
      </div>
    </div>
  );
};
