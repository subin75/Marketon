import React from 'react';
import { useNavigate } from 'react-router-dom';
import Back from "../Icon/Back";
import "../scss/see.scss";

const See2 = () => {
const navigate = useNavigate();

return(
<div className="body">
    <div className="back" onClick={() => navigate(-1)}>
        <Back />
    </div>
    
    <div className="see1">
        개인정보 수집 및 이용 동의
    </div>
    
    <div>
        <div className="use" >
            개인정보수집 및 이용목적
        </div>
        <div className="use-fe">
            - 회원제 서비스의 제공을 위한 이용자 식별, 계약이행을 위한 연락, 민원 해결 등의 고충처리, 개인화된 서비스 제공 및 추천/광고 게재, 회원의 서비스 이용에 대한 통계 등<br/>
            - 부정 가입 및 이용 방지등
        </div>
    </div>

    <div>
        <div className="category">
            개인정보수집항목
        </div>
        <div className="use-fe">
            (필수) 성명, 아이디(이메일), 비밀번호, 휴대폰번호, 쿠기(자동수집)
        </div>
    </div>

    <div>
        <div className="period">
            보유 및 이용기간
        </div>
        <div className="use-fe">
            - 회원 탈퇴 시 파기 처리<br/>
            - 부정 가입 및 이용 방지를 위해 탈퇴 회원 데이터는 최대 1년간 보관 후 파기 처리<br/>
            - 단, 관계 법령의 규정에 따라 보존할 의무가 있으면 해당 기간 동안 보존
        </div>
    </div>
</div>
    );
};

export default See2;