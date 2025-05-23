import React from 'react';
import { useNavigate } from 'react-router-dom';
import Back from "../Icon/Back";
import "../scss/see.scss";

const See = () => {
const navigate = useNavigate();

return (
    <div className="body">

    <div className="back" onClick={() => navigate(-1)}>
        <Back />
    </div>

    <div className="see1">서비스 이용약관</div>
    <div>
        <div className="use">제1조 (목적)</div>
        <div className="use-fe">
        이 약관은 회사(이하 “회사”라 함)가 운영하는 온라인 쇼핑몰(이하 “마켓온”이라 함)에서
        제공하는 서비스의 이용과 관련하여 회사와 이용자의 권리, 의무 및 책임사항을 규정함을
        목적으로 합니다.
        </div>
    </div>

    <div>
        <div className="category">제2조 (정의)</div>
        <div className="use-fe">
        1. <strong>“마켓온”</strong>이란 회사가 재화 또는 용역(이하 “상품”)을 이용자에게 제공하기
        위하여 컴퓨터 등 정보통신설비를 이용하여 설정한 가상의 영업장을 의미합니다.<br />
        2. <strong>“이용자”</strong>란 “마켓온”에 접속하여 이 약관에 따라 서비스를 받는 회원 및
        비회원을 말합니다.<br />
        3. <strong>“회원”</strong>이란 “마켓온”에 개인정보를 제공하여 회원등록을 한 자로서,
        지속적으로 “마켓온”의 정보를 제공받으며 서비스를 이용할 수 있는 자를 말합니다.<br />
        </div>
    </div>

    <div>
        <div className="period">제3조 (약관의 명시, 효력 및 변경)</div>
        <div className="use-fe">
        1. 본 약관은 “마켓온” 초기화면에 게시하거나 기타 방법으로 이용자에게 공지함으로써 효력을
        발생합니다.<br />
        2. 회사는 관련 법령을 위배하지 않는 범위에서 이 약관을 변경할 수 있으며, 변경 시 사전에
        공지합니다.<br />
        3. 이용자가 변경된 약관에 동의하지 않을 경우, 이용자는 서비스 이용을 중단하고 회원 탈퇴를
        요청할 수 있습니다.<br />
        </div>
    </div>

    <div>
        <div className="period">제4조 (서비스의 제공 및 변경)</div>
        <div className="use-fe">
        1. “마켓온”은 다음과 같은 업무를 수행합니다:<br />
        &nbsp;&nbsp;• 상품 또는 용역에 대한 정보 제공 및 구매계약 체결<br />
        &nbsp;&nbsp;• 구매계약이 체결된 상품 또는 용역의 배송<br />
        &nbsp;&nbsp;• 기타 “마켓온”이 정하는 업무<br />
        2. 회사는 상품 품절 또는 기술적 사유 등으로 서비스 내용을 변경할 수 있으며, 그 내용을
        공지합니다.<br />
        </div>
    </div>

    <div>
        <div className="period">제5조 (서비스 이용시간 및 중단)</div>
        <div className="use-fe">
        1. 서비스는 연중무휴, 1일 24시간 제공됩니다.<br />
        2. 회사는 시스템 점검, 고장, 통신두절 등의 사유가 발생한 경우 일시적으로 서비스를 중단할
        수 있습니다.<br />
        </div>
    </div>

    <div>
        <div className="period">제6조 (회원가입)</div>
        <div className="use-fe">
        1. 이용자는 “마켓온”이 정한 가입 양식에 따라 회원정보를 입력하고 동의함으로써 회원가입을
        신청합니다.<br />
        2. “마켓온”은 신청한 이용자에 대해 승낙함으로써 회원가입이 완료됩니다.<br />
        </div>
    </div>

    <div>
        <div className="period">제7조 (개인정보보호)</div>
        <div className="use-fe">
        1. “마켓온”은 이용자의 개인정보 수집 시 관련 법령을 준수하며, 개인정보는 목적 외 이용 및
        제3자 제공이 금지됩니다.<br />
        2. 개인정보 보호정책은 별도의 정책에 따릅니다.<br />
        </div>
    </div>

    <div>
        <div className="period">제8조 (이용자의 의무)</div>
        <div className="use-fe">
        1. 회원은 다음 행위를 해서는 안 됩니다:<br />
        &nbsp;&nbsp;• 허위정보 등록<br />
        &nbsp;&nbsp;• 타인의 정보 도용<br />
        &nbsp;&nbsp;• “마켓온”의 운영을 방해하는 행위<br />
        &nbsp;&nbsp;• 기타 불법적인 행위<br />
        </div>
    </div>

    <div>
        <div className="period">제9조 (구매신청 및 계약 성립)</div>
        <div className="use-fe">
        1. 이용자는 “마켓온”에서 다음 절차에 따라 구매를 신청합니다:<br />
        &nbsp;&nbsp;• 상품 검색 및 선택<br />
        &nbsp;&nbsp;• 결제정보 입력<br />
        &nbsp;&nbsp;• 약관 동의 및 구매 신청<br />
        2. “마켓온”은 구매신청에 대하여 승낙함으로써 계약이 성립됩니다.<br />
        </div>
    </div>

    <div>
        <div className="period">제10조 (배송 및 반품)</div>
        <div className="use-fe">
        1. 배송기간은 통상 3~7일 이내이며, 천재지변 등의 사유로 지연될 수 있습니다.<br />
        2. 단순변심에 의한 반품은 상품 수령 후 7일 이내에 신청할 수 있습니다.<br />
        3. 상품 하자 또는 오배송 시 회사는 반품 비용을 부담합니다.<br />
        </div>
    </div>

    <div>
        <div className="period">제11조 (지적재산권)</div>
        <div className="use-fe">
        1. “마켓온”에 게시된 저작물의 저작권은 회사에 있으며, 무단 복제·배포를 금합니다.
        </div>
    </div>

    <div>
        <div className="period">제12조 (면책조항)</div>
        <div className="use-fe">
        1. 회사는 천재지변, 이용자의 귀책사유 등 불가항력으로 인한 서비스 장애에 대해 책임을 지지
        않습니다.
        </div>
    </div>

    <div>
        <div className="period">제13조 (분쟁해결)</div>
        <div className="use-fe">
        1. 본 약관은 대한민국 법률에 따라 해석되며, 분쟁 발생 시 회사 소재지를 관할하는 법원을
        제1심 법원으로 합니다.
        </div>
    </div>
    </div>
    );
};

export default See;