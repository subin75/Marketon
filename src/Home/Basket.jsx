import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Close from "../Icon/Close";
import Check from "../Icon/Check";
import Nocheck from "../Icon/Nocheck";
import Loginpl from "../Popup/Loginpl"; 
import "../scss/basket.scss";

const Basket = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const navigate = useNavigate();
  const loggedInUser = localStorage.getItem('userEmail') || '';

  useEffect(() => {
    if (!loggedInUser) {
      setShowLoginPopup(true);
      return;
    }

    axios.get(`${process.env.REACT_APP_URL}save_cart.php`, {
      params: { user: loggedInUser }
    })
    .then(res => {
      const serverData = res.data || [];
      const itemsWithCheck = serverData.map(item => ({
        ...item,
        name: item.product_name,
        img: item.img_url,
        unitPrice: Number(item.unit_price),
        quantity: Number(item.quantity),
        checked: true,
        id: item.id,
      }));
      setCartItems(itemsWithCheck);
      localStorage.setItem('cart', JSON.stringify(itemsWithCheck));
    })
    .catch(err => {
      console.error('서버에서 장바구니 불러오기 실패', err);
      const savedCart = JSON.parse(localStorage.getItem('cart') || '[]');
      setCartItems(savedCart);
    });
  }, [loggedInUser]);

  const toggleCheck = (index) => {
    setCartItems(prev =>
      prev.map((item, i) =>
        i === index ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const removeItem = (index) => {
    const itemToRemove = cartItems[index];
    if (!itemToRemove?.id) {
      alert('삭제할 아이템 ID가 없습니다.');
      return;
    }

    axios.post(`${process.env.REACT_APP_URL}save_cart.php`, {
      action: 'delete',
      id: itemToRemove.id,
      user: loggedInUser,
    })
    .then(res => {
      if (res.data.success) {
        const updated = cartItems.filter((_, i) => i !== index);
        setCartItems(updated);
        localStorage.setItem('cart', JSON.stringify(updated));
      } else {
        alert('서버에서 삭제 실패했습니다: ' + res.data.message);
      }
    })
    .catch(err => {
      console.error('삭제 요청 실패:', err);
      alert('삭제 요청 중 오류가 발생했습니다.');
    });
  };

  const totalPrice = cartItems.reduce((sum, item) => {
    if (!item.checked) return sum;
    return sum + item.unitPrice * item.quantity;
  }, 0);

  const handlePaymentClick = () => {
    const selectedItems = cartItems.filter(item => item.checked);
    if (selectedItems.length === 0) {
      alert('선택된 상품이 없습니다.');
      return;
    }
    navigate('/Home/Payment', { state: { orders: selectedItems } });
  };

  const handleCloseClick = () => {
    navigate(-1);
  };

  if (showLoginPopup) {
    return (
      <Loginpl 
        onClose={() => setShowLoginPopup(false)} 
        onCancel={() => navigate('/Home/List')} 
      />
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="body">
        <div className="header">
          <div onClick={handleCloseClick} style={{ cursor: "pointer" }}>
            <Close />
          </div>
          <div className="title2">장바구니</div>
        </div>
        <div className="no-orders">
          장바구니에 담긴 상품이 없습니다.
        </div>
      </div>
    );
  }

  return (
    <div className="body">
      <div className="header">
        <div onClick={handleCloseClick} style={{ cursor: 'pointer' }}>
          <Close />
        </div>
        <div className="title2">장바구니</div>
      </div>

      <div className="order-section">
        <div className="order-header">
          <span className="label2">주문상품</span>
          <span className="count">{cartItems.length}개</span>
        </div>

        {cartItems.map((item, index) => (
          <div className="product-info2" key={index}>
            <div className="product-icons">
              <div className="check-icon" onClick={() => toggleCheck(index)}>
                {item.checked ? <Check /> : <Nocheck />}
              </div>
              <div className="close-icon" onClick={() => removeItem(index)}>
                <Close />
              </div>
            </div>

            {item.img && (
              <img
                src={`${process.env.REACT_APP_IMGPATH}${item.img}`}
                className="product-image2"
                alt={item.name}
              />
            )}

            <div className="product-details2">
              <div className="name">{item.name}</div>
              <div className="price">{(item.unitPrice * item.quantity).toLocaleString()}원</div>
              <div className="quantity">수량: {item.quantity}개</div>
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

      <button className="pay-button" onClick={handlePaymentClick}>
        결제하기
      </button>
    </div>
  );
};

export default Basket;