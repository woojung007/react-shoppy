# Project Shoppy

쇼핑몰 프로젝트

<br/>

## 기능
- 로그인 (Firebase를 사용한 구글 OAuth 로그인)
- 사용자 분기처리
   - 인증 (로그인 유무)
   - 인가 (일반유저, 어드민 유저)
- Firebase (구글 로그인, 실시간 데이터베이스 사용)
- Firebase의 CREATE(등록), READ(목록, 상세), UPDATE(수정), DELETE(삭제) api 연결 (useQuery 사용)
- 장바구니 기능
   - 아이템 추가 및 삭제 시 장바구니 배지 변경
   - 아이템 수량 변경시 주문 가격 총액 변경
   - 상품 삭제
- 어드민 기능
   - 상품 등록
      - 이미지 업로드(Cloudnary 사용, Firebase에 새로운 제품 추가)
- 로딩 오버레이 ui

<br/>

## 데모

https://github.com/woojung007/project-shoppy/assets/99471927/d6f522b8-dccc-475c-8dae-4ce70870888f

<br/>

## 기술스택
- 언어 : [Typescript](https://www.typescriptlang.org/)
- 코어 라이브러리 : [React](https://react.dev/), [React Router](https://reactrouter.com/en/main)
- 상태관리 : [Context API](https://react.dev/learn/passing-data-deeply-with-context)
- 스타일 : [Tailwind CSS](https://tailwindcss.com/)
- 패키지 관리자 : [yarn](https://yarnpkg.com/)

<br/>

## 개발 환경

node `^16.15.1`

yarn `^1.22.15`

<br/>


## 실행

```
yarn install
yarn start
```

<br/>

## 폴더 구조

```
📁
├─ public
│  ├─ images
│  │  └─ banner.png
│  ├─ index.html
│  ├─ manifest.json
│  ├─ robots.txt
│  └─ shoppy.svg
├─ src
│  ├─ App.tsx
│  ├─ api
│  │  ├─ firebase.ts
│  │  └─ uploader.ts
│  ├─ components
│  │  ├─ Banner.tsx
│  │  ├─ CartItem.tsx
│  │  ├─ CartStatus.tsx
│  │  ├─ PriceCard.tsx
│  │  ├─ ProductCard.tsx
│  │  ├─ Products.tsx
│  │  ├─ User.tsx
│  │  ├─ layout
│  │  │  └─ Navbar.tsx
│  │  └─ ui
│  │     └─ Button.tsx
│  ├─ context
│  │  └─ AuthContext.tsx
│  ├─ hooks
│  │  ├─ useCart.tsx
│  │  └─ useProducts.tsx
│  ├─ index.css
│  ├─ index.tsx
│  ├─ pages
│  │  ├─ AllProducts.tsx
│  │  ├─ Home.tsx
│  │  ├─ MyCart.tsx
│  │  ├─ NewProduct.tsx
│  │  ├─ NotFound.tsx
│  │  ├─ ProductDetail.tsx
│  │  └─ ProtectedRoute.tsx
│  └─ types
│     ├─ cart.types.ts
│     └─ product.types.ts
├─ tailwind.config.js
└─ tsconfig.json
```

<br/>

## 사용한 APIS

- [Firebase API](https://firebase.google.com/?hl=ko)

  - Authentication
  - Realtime Database

- [Cloudinary](https://cloudinary.com/)
  - image upload
