import React from "react";
import { useNavigate } from "react-router-dom";
import "../scss/canclepop.scss";

const Loginpl = () => {
  const navigate = useNavigate();

  const handleConfirm = () => {
    navigate("/Login/login");
  };

  const handleCancel = () => {
    navigate("/Home/List");
  };

  return (
    <div className="popup-overlay">
      <div className="cancel-popup">
        <p>로그인이 필요합니다</p>
        <div className="popup-buttons">
          <button className="popup-btn cancel" onClick={handleCancel}>취소</button>
          <button className="popup-btn confirm" onClick={handleConfirm}>확인</button>
        </div>
      </div>
    </div>
  );
};

export default Loginpl;