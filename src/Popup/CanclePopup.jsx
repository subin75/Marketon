import React from 'react';
import "../scss/canclepop.scss";

const CanclePopup = () => {
  return (
    <div className="popup-overlay">
      <div className="cancel-popup">
        주문취소 되었습니다
      </div>
    </div>
  );
};

export default CanclePopup;