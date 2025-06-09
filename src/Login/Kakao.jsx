import React, { useEffect } from 'react';

const Kakao = () => {
  useEffect(() => {
    console.log('🟡 Kakao SDK 로드 시도');
    const script = document.createElement('script');
    script.src = 'https://developers.kakao.com/sdk/js/kakao.js';
    script.async = true;

    script.onload = () => {
      console.log('🟢 Kakao SDK 로드 완료');

      if (window.Kakao) {
        console.log('🟢 window.Kakao 존재함');

        if (!window.Kakao.isInitialized()) {
          window.Kakao.init('e6dccb8d55403a16fb1c853f82164bfb');
          console.log('✅ Kakao SDK 초기화 완료');
        } else {
          console.log('⚠️ Kakao SDK 이미 초기화됨');
        }

        loginWithKakao(); // SDK 로드 및 초기화 후 로그인 시도
      } else {
        console.error('❌ window.Kakao 없음');
      }
    };

    script.onerror = () => {
      console.error('❌ Kakao SDK 로드 실패');
    };

    document.head.appendChild(script);
  }, []);

  const loginWithKakao = () => {
    if (!window.Kakao) {
      alert('❗ Kakao SDK 로드 중입니다. 잠시 후 다시 시도해주세요.');
      return;
    }

    console.log('🔐 카카오 로그인 시도 중...');

    window.Kakao.Auth.login({
      scope: 'profile_nickname,account_email',
      success: function (authObj) {
        console.log('✅ 카카오 로그인 성공:', authObj);

        window.Kakao.API.request({
          url: '/v2/user/me',
          success: function (res) {
            console.log('✅ 사용자 정보 요청 성공:', res);

            const nickname = res.kakao_account?.profile?.nickname;
            const email = res.kakao_account?.email;

            alert(`환영합니다, ${nickname} (${email})`);
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