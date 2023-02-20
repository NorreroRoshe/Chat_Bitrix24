import React from 'react';

export const Message: React.FC = () => {
  return (
    <div className="message">
      <div className="message_ures">
        <div className="message_ures_fl">
          <div className="message_user_img" />
          <div className="message_user_mess">
            <span className="user_mess_name">
              Норик Галоян <span className="mess_name_time">18:05</span>
            </span>
            <span className="mess_name_description">Привет Мария!</span>
          </div>
        </div>
        <ul className="message_list">
          <li className="message_item">Нравится</li>
          <li className="message_item">Ответить</li>
          <li className="message_item">Ещё</li>
        </ul>
      </div>
    </div>
  );
};
