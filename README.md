

# <p><img src="https://github.com/user-attachments/assets/62fac1aa-5182-40b6-9ca3-6505f3f24fa7" alt="Image" style="vertical-align: middle;" /> Marketon</p> 
쇼핑몰에서 다양한 상품을 탐색하고 구경할 수 있는 웹사이트, <b>"Marketon"</b> 입니다.

php를 활용하여 상품을 등록해서 <br>
쇼핑몰 이용자들이 쉽게 정보를 수집하고 즐겁게 쇼핑을 할 수 있는 웹 서비스입니다. <br>
또한, 480px(모바일)과 768px(태블릿) 해상도에 최적화된 디자인을 적용하여, <br>
다양한 환경에서도 편리하게 이용할 수 있도록 개발했습니다.

## 🔗 배포 URL
https://marketon-nu.vercel.app/

## 📑 프로젝트 요약

### 1. 주제

* 다양항 상품 정보 제공
* 카테고리별 분리
* 장바구니 기능 제공

### 2. 목표

* php를 활용해 상품을 등록하고 카테고리별로 구분하여 사용자 서비스 제공
* 다양한 정보 및 장바구니 기능을 통해 사용자들의 편의성 향상

### 3. 핵심 기능

* 상위, 하위, 가방 등 다양한 상품 정보 제공
* 카테고리 구분을 통한 편의성 제공
* 장바구니를 통한 편의성 제공
* 좋아요
* 검색기능
* 로그인 및 마이페이지
* 모바일 480px, 태블릿768px

### 4. 주요 기술 스택

* Front-End : React, React Router
* Back-End : php

## 📆 기간 및 인원

  * 총 작업 기간 : 8일
    * 기초 데이터 수집 및 화면 설계 기간 : 2일
    * 개발 및 테스트 기간 : 6일
   
  * 팀원 : 1명

## 👩🏻‍🤝‍🧑🏻 팀원 소개

| 이름 | 담당 | 해당 |
| :---:| :---: | :---: |

| 황수빈 | 디자인/리소스 수집/기획/개발/배포 | ✔ |

## 💡 주요 기능

### 1. php 활용
* php를 활용하여, 상품을 등록해서 다양한 상품정보 제공
* list 페이지 컴포넌트 내 상위, 하위, 가방, 신발 등 다양한 카테고리정보 제공

### 2. 장바구니
* php를 활용하여 사용자별 장바구니 정보 저장

### 3. 검색
* 사용자가 원하는 상품을 쉽게 찾을 수 있게 제공

### 4. 좋아요
* 좋아요 기능
* 사용자 별 좋아요 누른 상품 정보 제공

### 5. 마이페이지
* 주문내역
  * 사용자가 구매한 상품을 조회하고, 3일동안은 상품 주문취소 서비스 제공
* 최근 본 상품 목록 조회
* 자주묻는 질문
* 전화걸기
* 로그아웃
* 로그인 (sns) : 로그인 후 좋아요, 장바구니 기능 제공

## 🗂️ 폴더 구조

```
📂Marketon
┣ 📂Marketon                 # Marketon ( Front-End 프로젝트 )
┃ ┣ 📂public
┃ ┃ ┣ 📂imgs
┃ ┣ 📂src
┃ ┃ ┣ 📂Agree                 # 이용약관 폴더
┃ ┃ ┣ 📂Common                # 공통폴더
┃ ┃ ┣ 📂Home                             
┃ ┃ ┣ 📂Icon                  # Icon 컴포넌트
┃ ┃ ┣ 📂Login                 # 로그인 폴더
┃ ┃ ┣ 📂MyPage
┃ ┃ ┣ 📂Popup                 # 팝업 폴더
┃ ┃ ┣ 📂scss                  # scss
┃ ┗ 📜App.js                  # 프로젝트의 전체 라우팅 및 최상위 컴포넌트
┣ ⚙️.env
┗ README.md
┣ 📂Marketon-server               # Marketon ( Back-End 프로젝트 )
┃ ┣ 📂api                         # API 호출 및 가공하는 라우터 폴더
┃ ┃ ┣ 📜category.php              # 카테고리 서버
┃ ┃ ┣ 📜get_likes.php             # 좋아요 서버
┃ ┃ ┣ 📜member.php                # 회원가입 서버
┃ ┃ ┣ 📜p_list.php                # 상품 서버
┃ ┃ ┣ 📜save_cart.php             # 장바구니 서버
┃ ┃ ┣ 📜save_order.php            # 주문 서버
┗ ┗ ⚙️.env
```

## 💻 개발 환경

### 1. Frond-End

| 사용기술 | 설명 |Badge |
| :---:| :---: | :---: |
| **React** | **프론트엔드 프레임워크 (SPA 구축)** |![react](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=white)|
|**React Router Dom** | **페이지 라우팅 관리** |![reactrouter](https://img.shields.io/badge/ReactRouter-CA4245?style=flat-square&logo=reactrouter&logoColor=white)|
| **React Hook Form** | **폼 데이터 관리** |![reacthookform](https://img.shields.io/badge/ReactHookForm-F24E1E?style=flat-square&logo=reacthookform&logoColor=white)|
| **Axios** | **HTTP 클라이언트 라이브러리** |![axios](https://img.shields.io/badge/Axios-5A29E4?style=flat-square&logo=axios&logoColor=white)|
|**Zustand** | **상태 관리**|![Zustand](https://img.shields.io/badge/Zustand-181717?style=flat-square&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAv0lEQVQ4jeVUMQ7DIAx0KmZGlJGJB+RBjLyC1/ADVr7AC8gzCBJs7lCpUhqw0qpDqp7kxSefDWd5QkQYwVqLQogh/4oYIwAiDiOlhO/AOYe30+1P4g8FGUUqpSaC7q4Hs9ai1rorFkJAKeUuX0qBZVmGjZgQApRSXVJKeeByzsTQv2DK911urXX/hXMOpZQDt20bcM67NbVWmKjj8AnIJ6/rivDYt2fknMkJrm/K9QXJ4+C9h3med7laKxhjhjV3vjqJYwKihcAAAAAASUVORK5CYII=&logoColor=white)|

### 2. UI/UX & 날짜/시간 라이브러리

| 사용기술 | 설명 | Badge |
| :---:| :---: | :---: |
| **MUI** | **UI 프레임워크** |![mui](https://img.shields.io/badge/MUI-007FFF?style=flat-square&logo=mui&logoColor=white) |
| **Swiper** | **슬라이더** |![Swiper](https://img.shields.io/badge/Swiper-6332F6?style=flat-square&logo=axios&logoColor=white)|
| **react-swipeable** | **스와이프 제스처** |![npm](https://img.shields.io/badge/react--swipeable-00e6a4?style=flat-square&logo=npm&logoColor=white)|
| **motion** | **애니메이션** |![motion](https://img.shields.io/badge/motion-fff312?style=flat-square&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMjQgOSI+CiAgPHBhdGggZD0iTSA5LjA2MiAwIEwgNC4zMiA4Ljk5MiBMIDAgOC45OTIgTCAzLjcwMyAxLjk3MSBDIDQuMjc3IDAuODgyIDUuNzA5IDAgNi45MDIgMCBaIE0gMTkuNjU2IDIuMjQ4IEMgMTkuNjU2IDEuMDA2IDIwLjYyMyAwIDIxLjgxNiAwIEMgMjMuMDA5IDAgMjMuOTc2IDEuMDA2IDIzLjk3NiAyLjI0OCBDIDIzLjk3NiAzLjQ5IDIzLjAwOSA0LjQ5NiAyMS44MTYgNC40OTYgQyAyMC42MjMgNC40OTYgMTkuNjU2IDMuNDkgMTkuNjU2IDIuMjQ4IFogTSA5Ljg3MiAwIEwgMTQuMTkyIDAgTCA5LjQ1IDguOTkyIEwgNS4xMyA4Ljk5MiBaIE0gMTQuOTc0IDAgTCAxOS4yOTQgMCBMIDE1LjU5MiA3LjAyMSBDIDE1LjAxOCA4LjExIDEzLjU4NSA4Ljk5MiAxMi4zOTIgOC45OTIgTCAxMC4yMzIgOC45OTIgWiIgZmlsbD0icmdiKDAsIDAsIDApIj48L3BhdGg+Cjwvc3ZnPgo=&logoColor=white)|
| **Sass** | **스타일링**|![Sass](https://img.shields.io/badge/Sass-CC6699?style=flat-square&logo=Sass&logoColor=white)|
| **@hello-pangea/dnd** | **드래그 앤 드롭** |![npm](https://img.shields.io/badge/@hello--pangea/dnd-CB3837?style=flat-square&logo=npm&logoColor=white)|
| **react-date-range** | **날짜 범위 선택 라이브러리** |![npm](https://img.shields.io/badge/react--date--range-3d91ff?style=flat-square&logo=npm&logoColor=white)|
| **date-fns** | **날짜 및 시간 포맷, 계산** |![datefns](https://img.shields.io/badge/date--fns-770C56?style=flat-square&logo=datefns&logoColor=white)|

### 3. Back-End

| 사용기술 | 설명 | Badge |
| :---:| :---: | :---: |
| **Node.js** | **JavaScript 런타임 환경** |![nodedotjs](https://img.shields.io/badge/Node.js-5FA04E?style=flat-square&logo=nodedotjs&logoColor=white)|
| **Express** | **Node.js 기반 서버 프레임워크** |![express](https://img.shields.io/badge/Express-000000?style=flat-square&logo=express&logoColor=white)|
| **MongoDB** | **NoSQL 데이터베이스** |![mongodb](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white)|
| **multer** | **파일 업로드 처리** |![npm](https://img.shields.io/badge/multer-CB3837?style=flat-square&logo=npm&logoColor=white)|
| **JSON** | **데이터 형식 / API 응답 처리, <br> MongoDB 데이터 저장 형식**  |![JSON](https://img.shields.io/badge/JSON-000000?style=flat-square&logo=JSON&logoColor=white)|
| **Nodemon** | **개발 중 서버 자동 재시작 도구** |![nodemon](https://img.shields.io/badge/Nodemon-76D04B?style=flat-square&logo=nodemon&logoColor=white)|
| **Axios** | **서버에서 API 요청을 처리** |![axios](https://img.shields.io/badge/Axios-5A29E4?style=flat-square&logo=axios&logoColor=white)|

### 4. 개발 도구

|사용기술 | 설명 | Badge | 
| :---:| :---: | :---: |
| **Visual Studio Code (VS Code)** | **코드 편집기( 에디터 )** |![VSCode](https://img.shields.io/badge/VSCode-007ACC?style=flat-square&logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTI0LjAwMyAyTDEyIDEzLjMwM0w0Ljg0IDhMMiAxMEw4Ljc3MiAxNkwyIDIyTDQuODQgMjRMMTIgMTguNzAyTDI0LjAwMyAzMEwzMCAyNy4wODdWNC45MTNMMjQuMDAzIDJaTTI0IDkuNDM0VjIyLjU2NkwxNS4yODkgMTZMMjQgOS40MzRaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K&logoColor=white) |
|**GitHub** | **버전 관리** |![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white)| 
| **Postman** | **API 테스트** |![postman](https://img.shields.io/badge/Postman-FF6C37?style=flat-square&logo=postman&logoColor=white)|
| **Vercel** | **서버리스 플랫폼** |![vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white)|
| **Figma** | **디자인 & UI/UX**|![Figma](https://img.shields.io/badge/Figma-F24E1E?style=flat-square&logo=Figma&logoColor=white) |

