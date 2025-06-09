import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Kakao = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://developers.kakao.com/sdk/js/kakao.js';
    script.async = true;

    script.onload = () => {
      if (window.Kakao) {
        if (!window.Kakao.isInitialized()) {
          window.Kakao.init('e6dccb8d55403a16fb1c853f82164bfb');
        }
        loginWithKakao();
      }
    };

    script.onerror = () => {
      console.error('Kakao SDK 로드 실패');
    };

    document.head.appendChild(script);
  }, []);

  const loginWithKakao = async () => {
    if (!window.Kakao) return;

    window.Kakao.Auth.login({
      scope: 'profile_nickname', // 이메일 권한 제거
      success: function (authObj) {
        window.Kakao.API.request({
          url: '/v2/user/me',
          success: async function (res) {
            try {
              const nickname = res.kakao_account?.profile?.nickname;
              alert(`환영합니다, ${nickname}`);

              // 서버에 닉네임 저장 요청
              const response = await fetch(`${process.env.REACT_APP_URL}member.php`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ nickname }),
              });

              if (!response.ok) {
                throw new Error('서버 저장 실패');
              }

              // localStorage 저장
              localStorage.setItem('userNickname', nickname);

              // 로그인 성공 후 페이지 이동
              navigate('/Home/List');
            } catch (error) {
              console.error('서버 저장 중 오류:', error);
              alert(`서버 저장 오류: ${error.message}`);
            }
          },
          fail: function (error) {
            console.error('❌ 사용자 정보 요청 실패:', error);
            alert(`사용자 정보 요청 오류: ${JSON.stringify(error)}`);
          },
        });
      },
      fail: function (err) {
        console.error('❌ 카카오 로그인 실패:', err);
        alert(`카카오 로그인 오류: ${JSON.stringify(err)}`);
      },
    });
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>카카오 로그인 중입니다...</h2>
    </div>
  );
};

export default Kakao;