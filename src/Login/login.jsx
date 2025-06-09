import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo2 from "../Icon/Logo2";
import Login2 from "./Login2";
import "../scss/login.scss";

const Login = () => {
  const navigate = useNavigate(); 

  const handleSignupClick = () => {
    navigate('/Agree/Service');
  };

  return (
    <div className="login-container">
      <div className="logo">
        <Logo2 />
      </div>
      <div className="title">마켓온</div>
      
      <Login2 />
      <div className="signup-wrapper">
        <span className="signup-link" onClick={handleSignupClick}>회원가입</span>
      </div>

      
    </div>
  );
};

export default Login;