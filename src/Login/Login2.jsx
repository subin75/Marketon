import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginPopup from "../Popup/LoginPopup";
import PwPopup from "../Popup/PwPopup";
import IdPopup from "../Popup/IdPopup";
import "../scss/sign.scss";

const Login2 = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [showPwPopup, setShowPwPopup] = useState(false);
  const [showIdPopup, setShowIdPopup] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let timer;
    if (showLoginPopup) {
      timer = setTimeout(() => {
        setShowLoginPopup(false);
        navigate("/Home/List");
      }, 1000);
    }
    return () => clearTimeout(timer);
  }, [showLoginPopup, navigate]);

  useEffect(() => {
    let timer;
    if (showPwPopup) {
      timer = setTimeout(() => {
        setShowPwPopup(false);
      }, 1000);
    }
    return () => clearTimeout(timer);
  }, [showPwPopup]);

  useEffect(() => {
    let timer;
    if (showIdPopup) {
      timer = setTimeout(() => {
        setShowIdPopup(false);
      }, 1000);
    }
    return () => clearTimeout(timer);
  }, [showIdPopup]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${process.env.REACT_APP_URL}member.php?email=${email}&pw=${password}`);
      const data = await response.json();

      if (data.status === "success" && data.user?.u_email) {
        localStorage.setItem("userEmail", data.user.u_email); 
        setShowLoginPopup(true);
      } else if (data.message === "패스워드가 틀렸습니다.") {
        setShowPwPopup(true);
      } else if (data.message === "아이디가 틀렸습니다.") {
        setShowIdPopup(true);
      } else {
        alert("로그인 실패: " + (data.message || "알 수 없는 오류"));
      }

    } catch  {
      alert("로그인 중 오류가 발생했습니다.");
    }
  };

  return (
    <div className="login-body">
      <img src="/abc.jpg" alt="" />
      <div className="back" onClick={() => navigate('/Login/login')}>
      </div>

      <form className="form-group" onSubmit={handleSubmit}>
        <div className="label">아이디</div>
        <input
          type="email"
          className="input"
          placeholder="이메일을 입력하세요"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <div className="label">비밀번호</div>
        <input
          type="password"
          className="input"
          placeholder="비밀번호를 입력하세요"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" className="login">로그인</button>
      </form>

      {showLoginPopup && <LoginPopup />}
      {showPwPopup && <PwPopup />}
      {showIdPopup && <IdPopup />}
    </div>
  );
};

export default Login2;