import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Back from "../Icon/Back";
import Heart from "../Icon/Heart";
import Fe_heart from "../Icon/Fe_heart";
import Buy from "./Buy";
import "../scss/detail.scss";

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [liked, setLiked] = useState(false);
  const [showBuyModal, setShowBuyModal] = useState(false);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_URL}p_list.php`)
      .then((res) => {
        const found = res.data.find((item) => item.id == id);
        setProduct(found);

        const likedIds = JSON.parse(localStorage.getItem('likedItems') || '[]');
        setLiked(likedIds.includes(Number(id)));
      })
      .catch((err) => {
        console.error("상세 정보를 불러오지 못했습니다:", err);
      });
  }, [id]);

  const toggleLike = () => {
    setLiked((prev) => {
      const newLiked = !prev;
      let likedIds = JSON.parse(localStorage.getItem('likedItems') || '[]');

      if (newLiked) {
        if (!likedIds.includes(Number(id))) {
          likedIds.push(Number(id));
        }
      } else {
        likedIds = likedIds.filter((item) => item !== Number(id));
      }

      localStorage.setItem('likedItems', JSON.stringify(likedIds));

      window.dispatchEvent(new Event('storage'));

      return newLiked;
    });
  };

  const openBuyModal = () => setShowBuyModal(true);
  const closeBuyModal = () => setShowBuyModal(false);
  const handleBackClick = () => {
    navigate(-1);
  };

  if (!product) return <div>로딩 중...</div>;

  const image = product.p_thumb.split(",")[0];

  return (
    <div className="body">
      <div
        className="back"
        onClick={handleBackClick}
        style={{ cursor: "pointer" }}
      >
        <Back />
      </div>

      <div className="detail-container">
        <img
          src={process.env.REACT_APP_IMGPATH + image}
          className="product-image"
          alt={product.p_name}
        />
        <div className="product-meta">
          <div className="product-title">{product.p_name}</div>
          <div className="product-price">
            {Number(product.p_price).toLocaleString()}원
          </div>
          <div className="divider" />
        </div>

        <div className="product-info">
          <div className="info">상품정보</div>
          <div
            className="content"
            dangerouslySetInnerHTML={{ __html: product.p_content }}
          />
        </div>

        <div className="detail-footer">
          <button className="like-button" onClick={toggleLike}>
            {liked ? <Fe_heart /> : <Heart />}
          </button>
          <button className="buy-button" onClick={openBuyModal}>
            구매하기
          </button>
        </div>
      </div>

      {showBuyModal && <Buy onClose={closeBuyModal} p_id={id} />}
    </div>
  );
};

export default Detail;