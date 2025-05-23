import React from 'react';
import "../scss/canclepop.scss";

const PwPopup = () => {
  return (
    <div className="popup-overlay">
      <div className="cancel-popup">
        비밀번호가 틀렸습니다
      </div>
    </div>
  );
};

export default PwPopup;