import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Back from "../Icon/Back";
import Heart from "../Icon/Heart";
import Fe_heart from "../Icon/Fe_heart";
import Buy from "./Buy";
import Loginpl from "../Popup/Loginpl";
import "../scss/detail.scss";

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [liked, setLiked] = useState(false);
  const [showBuyModal, setShowBuyModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const userEmail = localStorage.getItem("userEmail") || "";

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_URL}p_list.php`)
      .then((res) => {
        const found = res.data.find((item) => String(item.id) === String(id));
        setProduct(found);
      })
      .catch((err) => {
        console.error("상세 정보를 불러오지 못했습니다:", err);
      });
  }, [id]);

  useEffect(() => {
    const syncLiked = () => {
      const likedData = JSON.parse(localStorage.getItem("likedItems") || "[]");
      const matched = likedData.find((item) => String(item.product_id) === String(id));
      setLiked(!!matched);
    };

    syncLiked();
    window.addEventListener("storage", syncLiked);
    return () => window.removeEventListener("storage", syncLiked);
  }, [id]);

  const toggleLike = () => {
    // 로그인 안 되어 있으면 로그인 팝업 띄우기
    if (!userEmail) {
      setShowLoginModal(true);
      return;
    }

    const sumnal = product.p_thumb ? product.p_thumb.split(",")[0] : "";

    axios
      .post(`${process.env.REACT_APP_URL}get_likes.php`, {
        user: userEmail,
        productId: product.id,
        product_name: product.p_name,
        unit_price: product.p_price,
        img_url: `${process.env.REACT_APP_IMGPATH}${sumnal}`,
      })
      .then((res) => {
        if (res.data.success) {
          let likedData = JSON.parse(localStorage.getItem("likedItems") || "[]");
          const exists = likedData.find((item) => String(item.product_id) === String(id));

          if (exists) {
            likedData = likedData.filter((item) => String(item.product_id) !== String(id));
          } else {
            likedData.push({ product_id: Number(id) });
          }

          localStorage.setItem("likedItems", JSON.stringify(likedData));
          window.dispatchEvent(new Event("storage"));
          setLiked(!exists);
        } else {
          alert("좋아요 처리 실패: " + res.data.message);
        }
      })
      .catch((err) => {
        console.error("좋아요 요청 실패:", err);
        alert("서버 요청 중 오류가 발생했습니다.");
      });
  };

  const openBuyModal = () => {
    if (!userEmail) {
      setShowLoginModal(true);
    } else {
      setShowBuyModal(true);
    }
  };

  const closeBuyModal = () => setShowBuyModal(false);
  const closeLoginModal = () => setShowLoginModal(false);
  const handleBackClick = () => navigate(-1);

  if (!product) return <div>로딩 중...</div>;

  const image = product.p_thumb.split(",")[0];

  return (
    <div className="body">
      <div className="back" onClick={handleBackClick} style={{ cursor: "pointer" }}>
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
          <div className="product-price">{Number(product.p_price).toLocaleString()}원</div>
          <div className="divider" />
        </div>

        <div className="product-info">
          <div className="info">상품정보</div>
          <div className="content" dangerouslySetInnerHTML={{ __html: product.p_content }} />
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
      {showLoginModal && (
        <Loginpl
          onClose={closeLoginModal}
          onCancel={() => {
            setShowLoginModal(false);
          }}
        />
      )}
    </div>
  );
};

export default Detail;