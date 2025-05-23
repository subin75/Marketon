import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Back from "../Icon/Back";
import Nocheck from "../Icon/Nocheck";
import Check from "../Icon/Check";
import "../scss/service.scss";

const Service = () => {
    const [checked, setChecked] = useState(Array(7).fill(false));
    const navigate = useNavigate();
    
    const toggleCheck = (index) => {
    if (index === 0) {
        const newValue = !checked[0];
        setChecked(Array(7).fill(newValue));
    } else {
        const newChecked = [...checked];
        newChecked[index] = !newChecked[index];
        const allCheckedExceptTotal = newChecked.slice(1).every((v) => v);
        newChecked[0] = allCheckedExceptTotal;
        setChecked(newChecked);
    }
};

const isEssentialChecked = checked[1] && checked[2] && checked[3];

const handleNext = () => {
    if (isEssentialChecked) {
        navigate("/Login/Sign");
    }
};

const handleSeeClick = (e, path) => {
    e.stopPropagation();
    navigate(path);
};

return (
    <div className="body">
        <div className="back" onClick={() => navigate(-1)}>
            <Back />
        </div>
    <div className="service">
        서비스 이용 약관에
        <br />동의해 주세요.
    </div>
    
    <div>
        <div className="agree-row top-agree" onClick={() => toggleCheck(0)}>
            {checked[0] ? <Check /> : <Nocheck />}
            <span className="agree-text">네, 모두 동의합니다.</span>
        </div>

        <div className="agree-row" onClick={() => toggleCheck(1)}>
            {checked[1] ? <Check /> : <Nocheck />}
            <span className="agree-text">(필수) 만 14세 이상입니다.</span>
        </div>

        <div className="agree-row" onClick={() => toggleCheck(2)}>
            {checked[2] ? <Check /> : <Nocheck />}
            <span className="agree-text">(필수) 서비스 이용약관에 동의</span>
            <div className="see" onClick={(e) => handleSeeClick(e, "/Agree/See")}>
            보기
            </div>
        </div>

        <div className="agree-row" onClick={() => toggleCheck(3)}>
            {checked[3] ? <Check /> : <Nocheck />}
            <span className="agree-text">(필수) 개인정보 수집이용에 동의</span>
            <div className="see" onClick={(e) => handleSeeClick(e, "/Agree/See2")}>
            보기
            </div>
        </div>

        <div className="agree-row" onClick={() => toggleCheck(5)}>
            {checked[5] ? <Check /> : <Nocheck />}
            <span className="agree-text">(선택) 홍보 및 마케팅 이용에 동의</span>
            <div className="see" onClick={(e) => handleSeeClick(e, "/Agree/See3")}>
            보기
            </div>
        </div>

        <div className="agree-row" onClick={() => toggleCheck(6)}>
            {checked[6] ? <Check /> : <Nocheck />}
            <span className="agree-text">(선택) 마케팅 개인정보 제3자 제공 동의</span>
            <div className="see" onClick={(e) => handleSeeClick(e, "/Agree/See4")}>
            보기
            </div>
        </div>
        </div>
        
        <div className="next-button-wrapper">
            <button
            className="next-button"
            disabled={!isEssentialChecked}
            onClick={handleNext}
            >
                다음
        </button>
        </div>
    </div>
    );
};

export default Service;