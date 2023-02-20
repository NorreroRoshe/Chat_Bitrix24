import React from 'react';

export const InpitMessage: React.FC = () => {
  return (
    <div className="inputMessage">
      <div className="inputMessage_ures">
        <div className="inputMessage_ures_fl">
          <div className="inputMessage_user_img" />
          <input
            className="inputMessage_user_input"
            type="text"
            placeholder="Добавить коментарий"
          />
        </div>
      </div>
    </div>
  );
};
