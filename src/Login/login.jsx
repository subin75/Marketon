import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo2 from "../Icon/Logo2";
import 네이버로그인 from "../Icon/네이버로그인";
import 카카오로그인 from "../Icon/카카오로그인";
import 구글로그인 from "../Icon/구글로그인";
import "../scss/login.scss";

const Login = () => {
  const navigate = useNavigate(); 

  const handleSignupClick = () => {
    navigate('/Agree/Service');
  };

  const handleLoginClick = () => {
    navigate('/login2');
  };

  const handleKakaoClick = () => {
    navigate('/Login/Kakao');
  };

  return (
    <div className="login-container">
      <div className="logo">
        <Logo2 />
      </div>
      <div className="title">마켓온</div>

      <div className="login-btn naver">
        <네이버로그인 />
      </div>

      <div className="login-btn kakao" onClick={handleKakaoClick}>
        <카카오로그인 />
      </div>

      <div className="login-btn-group">
        <div className="login-btn google">
          <구글로그인 />
        </div>

        <div className="signup-wrapper">
          <span className="login-text" onClick={handleLoginClick}>로그인</span>
          <span className="divider">|</span>
          <span className="signup-link" onClick={handleSignupClick}>회원가입</span>
        </div>
      </div>
    </div>
  );
};

export default Login;