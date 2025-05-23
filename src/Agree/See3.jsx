import React from 'react';
import { useNavigate } from 'react-router-dom';
import Back from "../Icon/Back";
import "../scss/see.scss";

const See3 = () => {
const navigate = useNavigate();

return(
<div className="body">
    <div className="back" onClick={() => navigate(-1)}>
        <Back />
    </div>
    
    <div className="see1">
        쇼핑몰 홍보 및 마케팅 이용에 동의
    </div>
    
    <div>
        <div className="use" >
            수집·이용 목적
        </div>
        <div className="use-fe">
            이벤트 및 프로모션 안내<br/>
            신상품, 할인정보, 혜택 제공<br/>
            고객 맞춤형 광고 및 마케팅 정보 제공<br/>
        </div>
    </div>

    <div>
        <div className="category">
            수집 항목
        </div>
        <div className="use-fe">
            성명, 연락처(이메일, 휴대폰 번호), 구매이력, 관심 상품 정보, 접속기록, 쿠키
        </div>
    </div>

    <div>
        <div className="period">
            보유 및 이용기간
        </div>
        <div className="use-fe">
            동의일로부터 회원 탈퇴 또는 동의 철회 시까지 보관 및 이용합니다.<br/>
            ※ 단, 관련 법령에 따라 보관이 필요한 경우 해당 기간 동안 보관됩니다.
        </div>
    </div>

    <div>
        <div className="period">
            제공방법
        </div>
        <div className="use-fe">
            문자(SMS), 이메일(Email), 앱 알림(Push), 카카오톡 알림톡 등
        </div>
    </div>

    <div>
        <div className="period">
            동의 거부 권리 및 불이익 안내
        </div>
        <div className="use-fe">
            귀하는 홍보 및 마케팅 목적의 개인정보 수집·이용에 대한 동의를 거부하실 수 있습니다.<br/>
            다만, 동의하지 않으실 경우 이벤트 및 혜택 제공 등의 마케팅 정보를 받아보실 수 없습니다.<br/>
        </div>
    </div>
</div>
    );
};

export default See3;