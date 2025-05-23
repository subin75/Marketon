import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Back from "../Icon/Back";
import CanclePopup from "../Popup/CanclePopup"; 
import "../scss/cancle.scss";

const Cancle = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const order = location.state?.order;

  const [selectedReason, setSelectedReason] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const reasons = [
    "상품이 마음에 들지 않아요",
    "주문을 잘못했어요",
    "서비스가 불만족스러워요",
    "상품이 품절되었어요",
    "다른 상품과 같이 재주문 할거예요"
  ];

  const handleCancel = () => {
    if (selectedReason && order) {
      setShowPopup(true);

      // 주문 내역에서 해당 주문 삭제
      const storedOrders = JSON.parse(localStorage.getItem('orders') || '[]');
      const updatedOrders = storedOrders.filter(
        (item) =>
          !(item.date === order.date && item.name === order.name && item.price === order.price)
      );
      localStorage.setItem('orders', JSON.stringify(updatedOrders));
      
      setTimeout(() => {
        setShowPopup(false);
        navigate("/Home/List");
      }, 2000);
    }
  };

  const handleBackClick = () => {
    navigate(-1);
  };

  if (!order) {
    return <div className="cancle">주문 정보가 없습니다.</div>;
  }

  return (
    <div className="cancle">
      <div 
        className="back" 
        onClick={handleBackClick} 
        style={{ cursor: 'pointer' }}
      >
        <Back />
      </div>
      <div className="cancle-text">주문취소</div>

      <div className="cancel-product">
        <img src={order.img} className="cancel-img" alt={order.name} />
        <div className="cancel-info">
          <div className="cancel-name">
            {order.name} <span>{order.quantity || 1}개</span>
          </div>
          <div className="cancel-price">{order.price}</div>
        </div>
      </div>

      <div className="cancel-reason-section">
        <div className="cancel-reason-label">취소 사유</div>
        <select
          value={selectedReason}
          onChange={(e) => setSelectedReason(e.target.value)}
          className="cancel-reason-select"
        >
          <option value="">사유를 선택해주세요</option>
          {reasons.map((reason, i) => (
            <option key={i} value={reason}>{reason}</option>
          ))}
        </select>
      </div>

      <div className="refund-info">
        <div className="refund-title">취소 / 환불 정보</div>
        <div className="refund-row">
          <span>총 결제금액</span>
          <span>{order.price}</span>
        </div>
      </div>

      <button className="cancel-submit" onClick={handleCancel} disabled={!selectedReason}>
        취소접수
      </button>

      {showPopup && <CanclePopup />}
    </div>
  );
};

export default Cancle;