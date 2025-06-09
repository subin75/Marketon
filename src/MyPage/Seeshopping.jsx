import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Back from "../Icon/Back";
import "../scss/seeshopping.scss";

const Seeshopping = () => {
  const [viewedItems, setViewedItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const userEmail = localStorage.getItem("userEmail");
    if (!userEmail) {
      setViewedItems([]);
      return;
    }
    const items = JSON.parse(localStorage.getItem(`recentViewed_${userEmail}`)) || [];
    setViewedItems(items.slice(0, 10));
  }, []);

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <div className="shopping-container">
      <div 
        className="back" 
        onClick={handleBackClick} 
        style={{ cursor: 'pointer' }}
      >
        <Back />
      </div>

      <div className="shopping-text">최근 본 상품</div>

      {viewedItems.length === 0 ? (
        <p className="no-item">최근 본 상품이 없습니다.</p>
      ) : (
        <div className="list-list">
          {viewedItems.map((item, index) => (
            <div
              key={index}
              className="list-card"
              onClick={() => navigate(`/detail/${item.id}`)}
            >
              <div className="image-wrapper">
                <img
                  className="list-img"
                  src={`${process.env.REACT_APP_IMGPATH}${item.thumb}`}
                  alt={item.name}
                />
              </div>
              <div className="list-info">
                <div className="list-title">{item.name}</div>
                <div className="list-price">{Number(item.price).toLocaleString()}원</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Seeshopping;
