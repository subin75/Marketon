import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import Mnus from "../Icon/Mnus";
import Plus from "../Icon/Plus";
import BasketPopup from '../Popup/BasketPopup';
import "../scss/buy.scss";

const Buy = ({ onClose, p_id }) => {
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_URL}p_list.php`)
      .then(res => res.json())
      .then(data => {
        
        if (data && data.length > 0) {
          const found = data.find(item => item.id === p_id);
          if (found) setProduct(found);
          else console.warn('해당 상품을 찾을 수 없습니다.');
        }
      })
      .catch(err => console.error('상품 불러오기 실패', err));
  }, [p_id]);

  const decreaseQuantity = () => {
    setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  };

  const increaseQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const handleBuyClick = () => {
    if (!product) return;

    const unitPrice = Number(product.p_price);

    const orderItem = {
      id: product.id || product.p_id,
      name: product.p_name,
      quantity,
      unitPrice,
      price: `${(unitPrice * quantity).toLocaleString()}원`,
      img: product.p_thumb
        ? `${product.p_thumb.split(',')[0]}`
        : '',
    };

    navigate('/Home/Payment', {
      state: { orders: [orderItem] },
    });
  };

  const handleCartClick = () => {
    if (!product) return;
    const productKey = product.id;
    const unitPrice = Number(product.p_price);

    const newCartItem = {
      id: productKey,
      user:localStorage.getItem('userEmail'),
      date: new Date().toISOString().slice(2, 10).replace(/-/g, '.'),
      name: product.p_name,
      price: `${(unitPrice * quantity).toLocaleString()}원`,
      unitPrice,
      img: product.p_thumb
        ? `${product.p_thumb.split(',')[0]}`
        : '',
      quantity,
      cancellable: true,
    };
    axios.post(`${process.env.REACT_APP_URL}save_cart.php`, newCartItem)
    .then(res => {
    console.log(res.data);
  });

    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
      onClose();
      navigate(`/detail/${p_id}`);
    }, 1000);
  };

  if (!product) return <div>로딩중...</div>;

  return (
    <>
      <div className="modal-overlay" onClick={onClose}></div>
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>×</button>
        <div className="modal-title">{product.p_name}</div>

        <div className="quantity-control">
          <button className="minus-button" onClick={decreaseQuantity}><Mnus /></button>
          <span className="quantity-number">{quantity}</span>
          <button className="plus-button" onClick={increaseQuantity}><Plus /></button>
        </div>

        <div className="divider" />

        <div className="modal-subtitle">예상 결제금액</div>
        <div className="modal-price">{(Number(product.p_price) * quantity).toLocaleString()}원</div>

        <div className="modal-buttons">
          <button className="cart-button" onClick={handleCartClick}>장바구니</button>
          <button className="buy-button" onClick={handleBuyClick}>구매하기</button>
        </div>
      </div>

      {showPopup && <BasketPopup />}
    </>
  );
};

export default Buy;