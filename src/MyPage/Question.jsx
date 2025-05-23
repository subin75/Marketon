import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Back from "../Icon/Back";
import Arrow from "../Icon/Arrow";    
import Arrow1 from "../Icon/Arrow1";   
import "../scss/question.scss";

const Question = () => {
  const navigate = useNavigate();

  const faqList = [
    {
      title: "[환불 수단] 결제 수단별 환불 일정을 알고 싶어요.",
      content: `결제 금액 환불은, 신청하신 취소 또는 반품이 완료된 후 
이용하신 결제 수단을 통해 이뤄집니다.
결제 수단에 따라 환불 처리 기간이 다릅니다.
아래 일정을 확인해 주시기 바랍니다.
신용카드 : 영업일 기준 5일 이내
체크카드 : 영업일 기준 7일 이내
무통장 입금 : 영업일 기준 5일 이내
* 취소/반품 시 등록한 환불 계좌로 자동 입금 됩니다.`
    },
    {
      title: "[배송] 배송기간은 어떻게 되나요?",
      content: `주문 시 제조업체에 요청하여 입고가 시작됩니다.
평균 상품 준비 기간은 3~7일(주말/공휴일 제외) 정도 소요됩니다.`
    },
    {
      title: "[배송] 해외 배송도 가능한가요?",
      content: `현재 해외배송을 진행하고 있지 않습니다.
보다 더 좋은 서비스가 이뤄질 수 있도록 노력하겠습니다.`
    },
    {
      title: "[회원] 비회원도 주문이 가능한가요?",
      content: `안타깝게도, 비회원은 상품 검색 등의 서비스는 이용할 수 있으나, 주문은 불가합니다.`
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleOpen = (index) => {
    setOpenIndex(prevIndex => prevIndex === index ? null : index);
  };

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <div className="question">
      <div className="back" onClick={handleBackClick} style={{ cursor: 'pointer' }}>
        <Back />
      </div>

      <div className="question-title">자주 묻는 질문</div>

      {faqList.map((item, index) => (
        <div className="faq-item" key={index}>
          <div className="faq-question" onClick={() => toggleOpen(index)}>
            <span>{item.title}</span>
            {openIndex === index ? <Arrow1 /> : <Arrow />}
          </div>
          {openIndex === index && (
            <div className="faq-answer" style={{ whiteSpace: "pre-line" }}>
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Question;