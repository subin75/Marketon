import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "../scss/canclepop.scss";

const Pay = ({ onClose }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (onClose) onClose();
      navigate('/Home/List');
    }, 1000);

    return () => clearTimeout(timer);
  }, [navigate, onClose]);

  return (
    <div className="popup-overlay">
      <div className="cancel-popup">
        결제가 완료되었습니다
      </div>
    </div>
  );
};

export default Pay;