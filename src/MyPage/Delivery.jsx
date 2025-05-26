import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Back from "../Icon/Back";
import "../scss/delivery.scss";

const Delivery = () => {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);

  const userEmail = localStorage.getItem('userEmail') || '';

  useEffect(() => {
    if (!userEmail) {
      alert("로그인이 필요합니다.");
      navigate("/login");
      return;
    }
    axios.post(`${process.env.REACT_APP_URL}save_order.php`, { userEmail })
      .then(res => {
        const formattedOrders = res.data.map(order => ({
          id: order.id,
          img: order.img_url,
          date: order.order_date,
          productId: order.product_id,
          name: order.product_name,
          quantity: order.quantity,
          price: order.total_price,
          unitPrice: order.unit_price,
          user: order.user,
          cancellable: true
        }));
        setOrders(formattedOrders);
      })
      .catch(error => {
        console.error(error);
      });
  }, [userEmail, navigate]);

  const isWithin3Days = (dateStr) => {
    const [yy, mm, dd] = dateStr.split('.').map(Number);
    const orderDate = new Date(2000 + yy, mm - 1, dd);
    const now = new Date();
    const diff = (now - orderDate) / (1000 * 60 * 60 * 24);
    return diff <= 3;
  };

  const handleCancel = (index) => {
    const updated = [...orders];
    updated[index].cancellable = false;

    const allOrders = JSON.parse(localStorage.getItem("orders") || "[]");
    const target = allOrders.find(
      o => o.user === userEmail &&
          o.productId === updated[index].productId &&
          o.date === updated[index].date
    );
    if (target) {
      target.cancellable = false;
      localStorage.setItem("orders", JSON.stringify(allOrders));
    }

    setOrders(updated);
    navigate("/Mypage/Cancle", { state: { order: updated[index] } });
  };

  const handleBackClick = () => {
    navigate(-1);
  };

  if (!orders.length) {
    return (
      <div className="delivery-container">
        <div className="back" onClick={handleBackClick} style={{ cursor: "pointer" }}>
          <Back />
        </div>
        <div className="delivery-text">주문·배송</div>
        <div className="no-orders">주문 내역이 없습니다.</div>
      </div>
    );
  }

  return (
    <div className="delivery-container">
      <div className="back" onClick={handleBackClick} style={{ cursor: "pointer" }}>
        <Back />
      </div>
      <div className="delivery-text">주문·배송</div>

      {orders.map((order, index) => (
        <div className="delivery-card" key={index}>
          <div className="delivery-date">{order.date}</div>
          <div className="delivery-body">
            <div className="delivery-left">
              <img src={`${process.env.REACT_APP_IMGPATH}${order.img}`}  className="delivery-img" alt={order.name} />
            </div>
            <div className="delivery-right">
              <div className="delivery-name">{order.name}</div>
              <div className="delivery-price">{Number(order.price).toLocaleString()}원</div>
              {order.cancellable && isWithin3Days(order.date) && (
                <div className="delivery-cancel" onClick={() => handleCancel(index)}>
                  주문취소
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Delivery;