import React, { useEffect } from 'react';

const Kakao = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://developers.kakao.com/sdk/js/kakao.js';
    script.async = true;

    script.onload = () => {
      if (window.Kakao && !window.Kakao.isInitialized()) {
        window.Kakao.init('e6dccb8d55403a16fb1c853f82164bfb');
        console.log('✅ Kakao SDK 초기화 완료');
        loginWithKakao(); // SDK 로드 후 로그인 시도
      }
    };

    document.head.appendChild(script);
  }, []);

  const loginWithKakao = () => {
    if (!window.Kakao) {
      alert('Kakao SDK 로드 중입니다. 잠시 후 다시 시도해주세요.');
      return;
    }

    window.Kakao.Auth.login({
      scope: 'profile_nickname,account_email',
      success: function (authObj) {
        console.log('카카오 로그인 성공:', authObj);

        window.Kakao.API.request({
          url: '/v2/user/me',
          success: function (res) {
            const nickname = res.kakao_account.profile.nickname;
            const email = res.kakao_account.email;
            console.log('사용자 정보:', res);
            alert(`환영합니다, ${nickname} (${email})`);
            // 여기서 navigate로 메인페이지 등으로 이동 가능
          },
          fail: function (error) {
            console.error('사용자 정보 요청 실패', error);
          },
        });
      },
      fail: function (err) {
        console.error('카카오 로그인 실패', err);
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