import React from "react";
import "../scss/canclepop.scss";

const Loginpl = ({ onClose, onCancel }) => {
  return (
    <div className="popup-overlay">
      <div className="cancel-popup">
        <p>로그인이 필요합니다</p>
        <div className="popup-buttons">
          <button
            className="popup-btn cancel"
            onClick={() => {
              onCancel();
            }}
          >
            취소
          </button>
          <button
            className="popup-btn confirm"
            onClick={() => {
              onClose();
              window.location.href = "/Login/login";
            }}
          >
            확인
          </button>
        </div>
      </div>
    </div>
  );
};

export default Loginpl;
