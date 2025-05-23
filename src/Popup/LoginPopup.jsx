import React from 'react';
import "../scss/canclepop.scss";

const LoginPopup = () => {
  return (
    <div className="popup-overlay">
      <div className="cancel-popup">
        로그인 성공하였습니다!
      </div>
    </div>
  );
};

export default LoginPopup;