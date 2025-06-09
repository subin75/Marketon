import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo2 from "../Icon/Logo2";
import "../scss/login.scss";

const Login = () => {
  const navigate = useNavigate(); 

  const handleSignupClick = () => {
    navigate('/Agree/Service');
  };

  const handleLoginClick = () => {
    navigate('/login2');
  };

  return (
    <div className="login-container">
      <div className="logo">
        <Logo2 />
      </div>
      <div className="title">마켓온</div>

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