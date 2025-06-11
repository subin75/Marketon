

# <p><img src="https://github.com/user-attachments/assets/e459198c-84af-4658-a131-a97d380fca1e" alt="Image" style="vertical-align: middle;" /> Marketon</p>
쇼핑몰에서 다양한 상품을 탐색하고 구경할 수 있는 웹사이트 입니다.

php를 활용하여 상품을 등록해서 <br>
쇼핑몰 이용자들이 쉽게 정보를 수집하고 즐겁게 쇼핑을 할 수 있는 웹 서비스입니다. <br>
또한, 480px(모바일)과 768px(태블릿) 해상도에 최적화된 디자인을 적용하여, <br>
다양한 환경에서도 편리하게 이용할 수 있도록 개발했습니다.

## 🔗 배포 URL
https://marketon-nu.vercel.app/

## 📑 프로젝트 요약

### 1. 주제

* 다양한 상품 정보 제공
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

## 👩🏻‍🤝‍🧑🏻 개인

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
| **React**        | 사용자 인터페이스 구축을 위한 JavaScript 라이브러리                       | ![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black) |
| **React Router** | SPA 내 라우팅을 위한 라이브러리                                           | ![React Router](https://img.shields.io/badge/React%20Router-CA4245?style=flat-square&logo=reactrouter&logoColor=white) |
| **Axios**        | HTTP 요청을 보내기 위한 Promise 기반의 클라이언트                        | ![Axios](https://img.shields.io/badge/Axios-5A29E4?style=flat-square&logo=axios&logoColor=white) |

### 2. UI/UX & 날짜/시간 라이브러리

| 사용기술 | 설명 | Badge |
| :---:| :---: | :---: |
| **MUI** | **UI 프레임워크** |![mui](https://img.shields.io/badge/MUI-007FFF?style=flat-square&logo=mui&logoColor=white) |
| **motion** | **애니메이션** |![motion](https://img.shields.io/badge/motion-fff312?style=flat-square&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMjQgOSI+CiAgPHBhdGggZD0iTSA5LjA2MiAwIEwgNC4zMiA4Ljk5MiBMIDAgOC45OTIgTCAzLjcwMyAxLjk3MSBDIDQuMjc3IDAuODgyIDUuNzA5IDAgNi45MDIgMCBaIE0gMTkuNjU2IDIuMjQ4IEMgMTkuNjU2IDEuMDA2IDIwLjYyMyAwIDIxLjgxNiAwIEMgMjMuMDA5IDAgMjMuOTc2IDEuMDA2IDIzLjk3NiAyLjI0OCBDIDIzLjk3NiAzLjQ5IDIzLjAwOSA0LjQ5NiAyMS44MTYgNC40OTYgQyAyMC42MjMgNC40OTYgMTkuNjU2IDMuNDkgMTkuNjU2IDIuMjQ4IFogTSA5Ljg3MiAwIEwgMTQuMTkyIDAgTCA5LjQ1IDguOTkyIEwgNS4xMyA4Ljk5MiBaIE0gMTQuOTc0IDAgTCAxOS4yOTQgMCBMIDE1LjU5MiA3LjAyMSBDIDE1LjAxOCA4LjExIDEzLjU4NSA4Ljk5MiAxMi4zOTIgOC45OTIgTCAxMC4yMzIgOC45OTIgWiIgZmlsbD0icmdiKDAsIDAsIDApIj48L3BhdGg+Cjwvc3ZnPgo=&logoColor=white)|
| **Sass** | **스타일링**|![Sass](https://img.shields.io/badge/Sass-CC6699?style=flat-square&logo=Sass&logoColor=white)|

### 3. Back-End

| 사용기술 | 설명 | Badge |
| :---:| :---: | :---: |
| **PHP**       | **서버 사이드 스크립트 언어**                    | ![php](https://img.shields.io/badge/PHP-777BB4?style=flat-square&logo=php&logoColor=white) |
| **MySQL**     | **관계형 데이터베이스 시스템**                   | ![mysql](https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=mysql&logoColor=white) |
| **REST API**  | **HTTP 메서드를 활용한 API 설계 방식**            | ![rest](https://img.shields.io/badge/REST%20API-005571?style=flat-square&logo=apachespark&logoColor=white) |
| **JSON**      | **데이터 교환을 위한 경량 데이터 형식**           | ![json](https://img.shields.io/badge/JSON-000000?style=flat-square&logo=json&logoColor=white) |
| **CORS**      | **다른 출처의 요청을 허용하는 보안 정책 설정**    | ![cors](https://img.shields.io/badge/CORS-enabled-29B6F6?style=flat-square&logo=cloudflare&logoColor=white) |
| **Axios** | **서버에서 API 요청을 처리** |![axios](https://img.shields.io/badge/Axios-5A29E4?style=flat-square&logo=axios&logoColor=white)|

### 4. 개발 도구

|사용기술 | 설명 | Badge | 
| :---:| :---: | :---: |
| **Visual Studio Code (VS Code)** | **코드 편집기( 에디터 )** |![VSCode](https://img.shields.io/badge/VSCode-007ACC?style=flat-square&logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTI0LjAwMyAyTDEyIDEzLjMwM0w0Ljg0IDhMMiAxMEw4Ljc3MiAxNkwyIDIyTDQuODQgMjRMMTIgMTguNzAyTDI0LjAwMyAzMEwzMCAyNy4wODdWNC45MTNMMjQuMDAzIDJaTTI0IDkuNDM0VjIyLjU2NkwxNS4yODkgMTZMMjQgOS40MzRaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K&logoColor=white) |
|**GitHub** | **버전 관리** |![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white)| 
| **Vercel** | **서버리스 플랫폼** |![vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white)|
| **Figma** | **디자인 & UI/UX**|![Figma](https://img.shields.io/badge/Figma-F24E1E?style=flat-square&logo=Figma&logoColor=white) |

