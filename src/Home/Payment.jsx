import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Close from "../Icon/Close";
import Check from "../Icon/Check";
import Nocheck from "../Icon/Nocheck";
import Check2 from "../Icon/Check2";
import Fe_check2 from "../Icon/Fe_check2";
import Pay from "../Popup/Pay";
import "../scss/payment.scss";

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const orders = location.state?.orders || [];

  const [agreedMain, setAgreedMain] = useState(false);
  const [agreements, setAgreements] = useState({
    personal: false,
    thirdParty: false,
    paymentTerms: false,
  });
  const [showPayPopup, setShowPayPopup] = useState(false);

  const userEmail = localStorage.getItem('userEmail');

  if (!userEmail) {
    alert("로그인이 필요합니다.");
    navigate("/login");
    return null;
  }

  if (orders.length === 0) return <div>결제할 상품이 없습니다.</div>;

  const totalPrice = orders.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);

  const handleMainAgreementToggle = () => {
    const newValue = !agreedMain;
    setAgreedMain(newValue);
    setAgreements({
      personal: newValue,
      thirdParty: newValue,
      paymentTerms: newValue,
    });
  };

  const toggleAgreement = (key) => {
    const updated = {
      ...agreements,
      [key]: !agreements[key],
    };
    setAgreements(updated);
    setAgreedMain(Object.values(updated).every(Boolean));
  };

  const handlePaymentClick = () => {
    if (!Object.values(agreements).every(Boolean)) {
      alert("모든 필수 약관에 동의해주세요.");
      return;
    }

    localStorage.removeItem('cart');

    const now = new Date();
    const yy = now.getFullYear() - 2000;
    const mm = String(now.getMonth() + 1).padStart(2, '0');
    const dd = String(now.getDate()).padStart(2, '0');
    const todayStr = `${yy}.${mm}.${dd}`;

    const ordersForServer = orders.map(item => ({
      productId: item.id,
      name: item.name,
      quantity: item.quantity,
      unitPrice: item.unitPrice,
      img: item.img,
      date: todayStr
    }));

    // 🔽 서버로 주문 저장 요청
    fetch(`${process.env.REACT_APP_URL}save_order.php`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        userEmail,
        orders: ordersForServer
      })
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          const existingOrders = JSON.parse(localStorage.getItem('orders') || '[]');

          const ordersWithDate = orders.map(item => ({
            ...item,
            date: todayStr,
            cancellable: true,
            price: (item.unitPrice * item.quantity).toLocaleString() + '원',
          }));

          const updatedOrders = [...existingOrders, ...ordersWithDate];
          localStorage.setItem('orders', JSON.stringify(updatedOrders));

          setShowPayPopup(true);
        } else {
          alert("서버 저장에 실패했습니다: " + data.message);
        }
      })
      .catch(err => {
        console.error("서버 통신 오류:", err);
        alert("서버와 통신 중 오류가 발생했습니다.");
      });
  };

  const closePayPopup = () => {
    setShowPayPopup(false);
    navigate('/');
  };

  const handleCloseClick = () => {
    navigate(-1);
  };

  return (
    <div className="body">
      <div className="header">
        <div onClick={handleCloseClick} style={{ cursor: 'pointer' }}>
          <Close />
        </div>
        <div className="title2">결제</div>
      </div>

      <div className="order-section">
        <div className="order-header">
          <span className="label2">주문상품</span>
          <span className="count">{orders.length}개</span>
        </div>

        {orders.map((item, index) => (
          <div className="product-info3" key={index}>
            {item.img && (
              <img
                src={`${process.env.REACT_APP_IMGPATH}${item.img}`}
                alt={item.name}
                className="product-image3"
              />
            )}
            <div className="product-details">
              <div className="name">{item.name}</div>
              <div className="price">
                {(item.unitPrice * item.quantity).toLocaleString()}원
              </div>
              <div className="quantity">수량: {item.quantity || 1}개</div>
            </div>
          </div>
        ))}
      </div>

      <div className="payment-summary">
        <div className="summary-label">결제 금액</div>
        <div className="summary-row">
          <span className="item-label">상품 금액</span>
          <span className="item-price">{totalPrice.toLocaleString()}원</span>
        </div>
        <div className="summary-divider" />
      </div>

      <div className="agreement-section">
        <div className="agreement-toggle" onClick={handleMainAgreementToggle}>
          {agreedMain ? <Check /> : <Nocheck />}
          <span className="main-agreement">주문내용 확인 및 결제 동의</span>
        </div>

        <ul className="agreements">
          <li onClick={() => toggleAgreement('personal')}>
            {agreements.personal ? <Fe_check2 /> : <Check2 />}
            <span>(필수) 개인정보 수집 이용 동의</span>
          </li>
          <li onClick={() => toggleAgreement('thirdParty')}>
            {agreements.thirdParty ? <Fe_check2 /> : <Check2 />}
            <span>(필수) 개인정보 제 3자 정보 제공 동의</span>
          </li>
          <li onClick={() => toggleAgreement('paymentTerms')}>
            {agreements.paymentTerms ? <Fe_check2 /> : <Check2 />}
            <span>(필수) 결제대행 서비스 이용약관 동의</span>
          </li>
        </ul>
      </div>

      <button
        className="pay-button"
        disabled={!Object.values(agreements).every(Boolean)}
        onClick={handlePaymentClick}
      >
        결제하기
      </button>

      {showPayPopup && (
        <Pay onClose={closePayPopup} orders={orders} />
      )}
    </div>
  );
};

export default Payment;