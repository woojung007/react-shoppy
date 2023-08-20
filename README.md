# Project Shoppy

쇼핑몰 프로젝트

## Demo

- [배포 링크](https://main--courageous-rugelach-92fb07.netlify.app/)

https://github.com/woojung007/project-shoppy/assets/99471927/d6f522b8-dccc-475c-8dae-4ce70870888f




## 실행

```
yarn install
yarn start
```

## 개발 환경

node `^16.15.1`

yarn `^1.22.15`

## directory

```
📁
├─ public
│  ├─ images
│  │  └─ banner.png
│  ├─ index.html
│  ├─ manifest.json
│  ├─ robots.txt
│  ├─ shoppy.ico
│  └─ shoppy.svg
├─ src
│  ├─ App.test.tsx
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
│  ├─ react-app-env.d.ts
│  ├─ reportWebVitals.ts
│  ├─ setupTests.ts
│  └─ types
│     ├─ cart.types.ts
│     └─ product.types.ts
├─ .prettierrc
├─ package.json
├─ tailwind.config.js
└─ tsconfig.json
```

## APIS

- [Firebase API](https://firebase.google.com/?hl=ko)

  - Authentication
  - Realtime Datebase

- [Cloudinary](https://cloudinary.com/)
  - image upload
