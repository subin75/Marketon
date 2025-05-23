import React from 'react';
import { useNavigate } from 'react-router-dom';
import Back from "../Icon/Back";
import "../scss/see.scss";

const See4 = () => {
const navigate = useNavigate();

return(
<div className="body">
    <div className="back" onClick={() => navigate(-1)}>
        <Back />
    </div>
    
    <div className="see1">
        마케팅 개인정보 제3자 제공 동의
    </div>
    
    <div>
        <div className="use" >
            제공 항목
        </div>
        <div className="use-fe">
            성명, 성별, 생년월일, 휴대폰 번호, 이메일 주소, 구매/방문 이력 등
        </div>
    </div>

    <div>
        <div className="category">
            제공 목적
        </div>
        <div className="use-fe">
            제휴사 상품/서비스에 대한 광고·홍보, 이벤트 정보 제공<br/>
            맞춤형 마케팅 서비스 제공 및 분석
        </div>
    </div>

    <div>
        <div className="period">
            보유 및 이용기간
        </div>
        <div className="use-fe">
            동의일로부터 회원 탈퇴 또는 동의 철회 시까지
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

export default See4;