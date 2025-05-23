import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import '../scss/phonepopup.scss';

const PhonePopup = ({ phoneNumber = "02-1237-1237", onCancel, onCall }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-box">
        <div className="popup-content">
          <FaPhoneAlt className="phone-icon" />
          <span className="phone-number">{phoneNumber}</span>
        </div>
        <div className="popup-buttons">
          <button className="cancel-btn" onClick={onCancel}>취소</button>
          <button className="call-btn" onClick={onCall}>통화</button>
        </div>
      </div>
    </div>
  );
};

export default PhonePopup;