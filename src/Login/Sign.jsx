import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Back from "../Icon/Back";
import "../scss/sign.scss";

const Sign = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('email', email);
      formData.append('password', password);

      const response = await fetch(`${process.env.REACT_APP_URL}member.php`, {
        method: "POST",
        body: formData,
        credentials: 'include',
      });

      const result = await response.json();
      console.log("서버 응답:", result);

      if (result.status === "success") {
        alert("회원가입 성공!");
        navigate("/Login/login");
      } else {
        alert(result.message || "회원가입 실패");
      }
    } catch (error) {
      console.error("전송 오류:", error);
      alert("회원가입 중 오류 발생!");
    }
  };

  return (
    <div className="body">
      <div className="back" onClick={() => navigate(-1)}>
        <Back />
      </div>

      <div className="join">회원가입</div>
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

        <button type="submit" className="login">회원가입</button>
      </form>
    </div>
  );
};

export default Sign;