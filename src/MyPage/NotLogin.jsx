import React from 'react';
import { useNavigate } from 'react-router-dom';
import Shopping from "../Icon/Shopping";
import Arrow2 from "../Icon/Arrow2";
import Bottom from '../common/Bottom';
import "../scss/mypage.scss";

const NotLogin = () => {
  const navigate = useNavigate();

  const goToSeeShopping = () => {
    navigate('/Mypage/Seeshopping');
  };

  const goToFAQ = () => {
    navigate('/Mypage/Question');
  };

  return (
    <div className="mypage-container">
      <div className="header">
        <div className="top-icons">
          <Shopping />
        </div>
      </div>

      <div className="greeting-section">
  <div className="greeting-text-wrapper">
    <div className="greeting-text">로그인 해주세요!</div>
    <Arrow2 className="arrow-icon"  />
  </div>
</div>

      <div className="section">
        <div className="section-title">쇼핑</div>
        <div
          className="section-item recent-product"
          onClick={goToSeeShopping}
          style={{ cursor: 'pointer' }}
        >
          최근 본 상품
        </div>
      </div>

      <div className="section">
        <div className="section-title">고객센터</div>
        <div
          className="section-item"
          onClick={goToFAQ}
          style={{ cursor: 'pointer' }}
        >
          자주 묻는 질문
        </div>
        <div className="section-item call">전화걸기</div>
      </div>

      <div className="logout">로그아웃</div>

      <div className="company-info">
        <div className="info-title">(주)마켓온 사업자 정보</div>
        <div className="info-details">
          대표이사 황수빈<br />
          주소 19587 경기도 하남시 분시구 판교역로 269 에이스퀘어<br />
          문의전화 02-1235-1237<br />
          이메일 cloth@cloth.kr<br />
          사업자등록번호 567-98-74562<br />
          호스팅 사업자 (주)마켓온<br />
          (주)마켓온은 통신판매중개자로서 통신판매의 당사자가 아니며<br />
          상품 거래정보 및 거래 등에 대한 책임을 지지 않습니다.<br />
        </div>
      </div>

      <Bottom />
    </div>
  );
};

export default NotLogin;