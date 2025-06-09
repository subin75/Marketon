import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Shopping from "../Icon/Shopping";
import Truck from "../Icon/Truck";
import Bottom from "../common/Bottom";
import PhonePopup from "../Popup/PhonePopup";
import "../scss/mypage.scss";

const Mypage = () => {
  const [showPhonePopup, setShowPhonePopup] = useState(false);
  const [email, setEmail] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedEmail = localStorage.getItem("userEmail");
    if (storedEmail) {
      const nameOnly = storedEmail.split("@")[0];
      setEmail(nameOnly);
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  if (isLoggedIn === null) {
    return null;
  }

  const handleLogoutClick = () => {
    localStorage.removeItem("userEmail");
    setIsLoggedIn(false);
    setEmail("");
  };

  return (
    <div className="mypage-container">
      <div className="header">
        <div
          className="top-icons"
          onClick={() => navigate("/Home/Basket")}
          style={{ cursor: "pointer" }}
        >
          <Shopping />
        </div>
      </div>

      <div className="greeting-section">
        {isLoggedIn ? (
          <>
            <div className="greeting-text">
              {email ? `${email}님 안녕하세요!` : "안녕하세요!"}
            </div>
            <div
              className="truck-icon"
              onClick={() => navigate("/Mypage/Delivery")}
              style={{ cursor: "pointer" }}
            >
              <Truck />
              <span className="truck-text">주문·배송</span>
            </div>
          </>
        ) : (
          <div
            className="greeting-text"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/Login/login")}
          >
            로그인해주세요!
          </div>
        )}
      </div>

      <div className="section">
        <div className="section-title">쇼핑</div>
        <div
          className="section-item recent-product"
          onClick={() => navigate("/Mypage/Seeshopping")}
        >
          최근 본 상품
        </div>
      </div>

      <div className="section">
        <div className="section-title">고객센터</div>
        <div className="section-item" onClick={() => navigate("/Mypage/Question")}>
          자주 묻는 질문
        </div>
        <div className="section-item call" onClick={() => setShowPhonePopup(true)}>
          전화걸기
        </div>
      </div>

      {isLoggedIn && (
        <div
          className="logout"
          onClick={handleLogoutClick}
          style={{ cursor: "pointer" }}
        >
          로그아웃
        </div>
      )}

      <div className="company-info">
        <div className="info-title">(주)마켓온 사업자 정보</div>
        <div className="info-details">
          대표이사 황수빈
          <br />
          주소 19587 경기도 하남시 분시구 판교역로 269 에이스퀘어
          <br />
          문의전화 02-1235-1237
          <br />
          이메일 cloth@cloth.kr
          <br />
          사업자등록번호 567-98-74562
          <br />
          호스팅 사업자 (주)마켓온
          <br />
          (주)마켓온은 통신판매중개자로서 통신판매의 당사자가 아니며
          <br />
          상품 거래정보 및 거래 등에 대한 책임을 지지 않습니다.
          <br />
        </div>
      </div>

      {showPhonePopup && (
        <PhonePopup
          phoneNumber="02-1235-1237"
          onCancel={() => setShowPhonePopup(false)}
          onCall={() => {
            window.location.href = "tel:02-1235-1237";
          }}
        />
      )}
      <Bottom />
    </div>
  );
};

export default Mypage;
