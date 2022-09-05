# 원티드 프리온보딩 1차 과제 - Fruitte의 스토어 리뉴얼 개발

## 🚀🚀 [배포 보러가기](http://fruitte-team-3.s3-website.ap-northeast-2.amazonaws.com/?page=1)
## 1. 소개

- 원티드 프리온보딩 프론트엔드 코스 6기 1-2 과제
- Fruitte 기존 운영 서비스의 신규 페이지 제작
- 기간 : 2022/09/02 ~ 2022/09/05

<br>

## 2. 실행 방법
```jsx
# with yarn
# install
$ yarn install

# run
$ yarn start
```

### **:exclamation: :exclamation: 주의사항**
배포된 페이지에서 `상품상세 페이지 > 구매하기` 를 통해서 주문 페이지로 이동을 하면 CORS 에러가 있습니다.

따라서 상품주문 기능은 현재 로컬에서만 확인가능합니다.


<br>

## 3. 역할
| 이름   | 역할  |
| ------ | ------ |
| 김리후 | 팀원 / 상품 등록 페이지. Gnb |
| 김지현 | 팀원 / 상품 주문 내역확인 페이지 | 
| 이경준 | 팀원 / 상품 목록조회 페이지, 초기 세팅 |
| 이혜성 | **팀장** / 상품목록 관리 페이지, S3 + github actions 정적 사이트 CD |
| 문선화 | 팀원 / 상품 주문 페이지 |
| 홍성준 | 팀원 / 상품 상세조회 페이지 |
| 서수민 | 팀원 / 건강상의 이유로 불참 |

<br>

## 4. 디렉토리 구조

```
📦src
 ┣ 📂assets
 ┃ ┗ 📂images
 ┃ ┃ ┣ 📜fruitte-logo.png
 ┃ ┃ ┣ 📜symbol.png
 ┃ ┃ ┗ 📜user-default.png
 ┣ 📂components
 ┃ ┣ 📂BaseComponent
 ┃ ┃ ┣ 📂DropDown
 ┃ ┃ ┃ ┗ 📜index.jsx
 ┃ ┃ ┣ 📂slider
 ┃ ┃ ┃ ┣ 📜index.jsx
 ┃ ┃ ┃ ┗ 📜slideItem.jsx
 ┃ ┃ ┗ 📂TabBar
 ┃ ┃ ┃ ┣ 📜hook.js
 ┃ ┃ ┃ ┗ 📜index.jsx
 ┃ ┣ 📂Order
 ┃ ┃ ┣ 📜OrderInput.jsx
 ┃ ┃ ┣ 📜OrderList.jsx
 ┃ ┃ ┣ 📜OrderSelectBox.jsx
 ┃ ┃ ┗ 📜SearchAddress.jsx
 ┃ ┣ 📂OrderHistory
 ┃ ┃ ┣ 📜LeftMenu.jsx
 ┃ ┃ ┣ 📜OrdererInfo.jsx
 ┃ ┃ ┣ 📜OrderItemLayout.jsx
 ┃ ┃ ┣ 📜OrderListHeader.jsx
 ┃ ┃ ┗ 📜UserInfo.jsx
 ┃ ┣ 📂ProductDetail
 ┃ ┃ ┣ 📜ProductDetailContentInfo.jsx
 ┃ ┃ ┣ 📜ProductDetailCounter.jsx
 ┃ ┃ ┣ 📜ProductDetailItemOption.jsx
 ┃ ┃ ┗ 📜useProductDetailTabBar.jsx
 ┃ ┣ 📂ProductList
 ┃ ┃ ┣ 📜BottomSection.jsx
 ┃ ┃ ┣ 📜Common.jsx
 ┃ ┃ ┣ 📜InterviewItem.jsx
 ┃ ┃ ┣ 📜Pagination.jsx
 ┃ ┃ ┣ 📜ProductItem.jsx
 ┃ ┃ ┣ 📜Symbol.jsx
 ┃ ┃ ┣ 📜Tags.jsx
 ┃ ┃ ┗ 📜TopSection.jsx
 ┃ ┣ 📂ProductRegister
 ┃ ┃ ┣ 📜index.jsx
 ┃ ┃ ┣ 📜RegisterFrame.jsx
 ┃ ┃ ┣ 📜RegisterImgButton.jsx
 ┃ ┃ ┣ 📜RegisterInput.jsx
 ┃ ┃ ┣ 📜RegisterOption.jsx
 ┃ ┃ ┗ 📜RegisterOptionSet.jsx
 ┃ ┣ 📜Gnb.jsx
 ┃ ┗ 📜Layout.jsx
 ┣ 📂hook
 ┃ ┗ 📜useCounter.js
 ┣ 📂mock
 ┃ ┣ 📜interview_list.json
 ┃ ┗ 📜product_list.json
 ┣ 📂pages
 ┃ ┣ 📂Order
 ┃ ┃ ┣ 📜Order.jsx
 ┃ ┃ ┗ 📜OrderComplete.jsx
 ┃ ┣ 📂OrderHistory
 ┃ ┃ ┣ 📜OrderHistory.jsx
 ┃ ┃ ┗ 📜OrderHistoryDetail.jsx
 ┃ ┣ 📂ProductDetail
 ┃ ┃ ┗ 📜ProductDetail.jsx
 ┃ ┣ 📂ProductList
 ┃ ┃ ┗ 📜ProductList.jsx
 ┃ ┣ 📂productManage
 ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┗ 📜tableWithCheckbox.jsx
 ┃ ┃ ┗ 📜index.jsx
 ┃ ┗ 📜home.jsx
 ┣ 📂styles
 ┃ ┣ 📜colors.js
 ┃ ┣ 📜fonts.js
 ┃ ┗ 📜globalStyles.js
 ┣ 📂utils
 ┃ ┣ 📜css.util.js
 ┃ ┣ 📜fetch.util.js
 ┃ ┣ 📜hooks.js
 ┃ ┣ 📜orderStore.js
 ┃ ┣ 📜purchaseStore.js
 ┃ ┗ 📜registerStore.js
 ┣ 📜App.js
 ┣ 📜App.test.js
 ┣ 📜index.js
 ┣ 📜reportWebVitals.js
 ┗ 📜setupTests.js                   
```


<br>

## 5. 기술 스택
- React
- JavaScript
- styled-components
- recoil

<br>

## 6. 기능 구현 요구 사항

### 5-1. 사용자 기능

- 스토어 상품목록 조회(30개 이상의 상품목록, 10개 단위의 페이지네이션, 인피니트 스크롤 X)
- 스토어 상품 상세조회(이미지, 상품 옵션, 수량, 가격 등)
    - 상품 상세 페이지는 단순 퍼블리싱 영역이므로 제외
- 스토어 상품 주문(상품 선택, 수량, 배송주소, 연락처 등)
    - 결제 기능은 미포함
- 스토어 상품 주문 내역확인 (주문 번호, 상품명, 주문 수량, 주문 옵션)

<br>

### 5-2. 관리자 기능

- 스토어 상품목록 등록 페이지(이미지, 상품 옵션, 수량, 가격 등)
- 스토어 상품목록 관리 페이지
    - 상품 삭제 기능
    - 상품 노출 여부 조정 기능(상품은 유지되어 있되, 노출 여부를 수정하는 기능)

<br>

## 7. 구현 결과
#### 상품 등록 페이지

<img src="https://user-images.githubusercontent.com/81549337/188328968-c4f81c99-9c4b-4737-89b6-939c21e11a7d.PNG" width="400" />

- 과제 요건 충족을 위해 기본적인 **상품 정보**(이미지, 상품 옵션, 수량, 가격 등) 및 추가적인 정보 등록 페이지를 구현하였습니다.
- 상품 등록시 필요한 input값을 **recoil**을 이용해 관리하여 **기존 json 데이터**와 합치도록 하였습니다. 
- **상품 코드**는 랜덤으로 생성됩니다.
- **이미지 첨부**는 메인 이미지의 경우 하나, 상세정보의 경우 여러 장을 올릴 수 있도록 하였습니다. 
- **재사용성**을 위해 input, 이미지 첨부 버튼, 상품옵션 컴포넌트를 별도로 만들었습니다. 
- [src/components/ProductRegister/index.jsx](src/components/ProductRegister)
#### 상품 주문 내역확인 페이지
![test](https://user-images.githubusercontent.com/78922001/188329364-2320274e-e1e2-4fce-a0c6-2618af24c7a1.png)

- 스토어 상품 주문 내역(주문 번호, 상품명, 주문 수량, 주문 옵션)을 확인할 수 있는 페이지를 구현하였습니다.
- 주문 번호를 통해, 배송 정보를 포함한 주문 상세정보를 뽑아 낼 수 있게끔 구현했습니다.

#### 상품목록 조회 페이지
![product-list-demo](https://user-images.githubusercontent.com/27720475/188330193-3d4cf9e0-077d-44b9-be5f-aca4429652f0.gif)
- 스토어 상품목록 조회
- 10개 단위 페이지네이션
- pagination vs infinite scroll에 대한 고민
	- infinite scroll은 유저가 직접 페이지를 넘기지 않고 상품리스트를 볼 수 있으므로 ux를 향상시킬 수 있다. 
	- 그러나 웹은 앱과 다르게 단독으로 url 접근, 공유되는 상황이 고려되어야함(ex. 내가 공유하고싶은 상품이 포함된 리스트의 페이지, 상품 상세페이지 내에서의 리뷰 영역)
	- 이와 같은 상황때문에 커머스 서비스는 상품 리스트페이지를 대부분 페이지네이션으로 구현
- 상품 아이디에 대한 고민
	- 상품 목록의 상품 아이디는 상품 상세페이지로 넘어갔을 때 /products => /product/${id} 형태로 넘어가게 되는데 id가 길어지면 url도 길어지게 됨
	- 클라이언트 입장에서는 number와 같은 고유하면서도 sequential한 아이디가 장점으로 작용할 수 있음
	- 서버측 컨벤션에 의해 id가 길어지거나 search param이 길어진다면 short url과 같은 솔루션 도입이 필요

#### 상품목록 관리 페이지
![product-manage-demo](https://user-images.githubusercontent.com/27720475/188330036-60b462f6-ac2e-4ac3-a901-e6aa8f311c3b.gif)
- 테이블 상품 전체선택 기능
- 상품 삭제 기능: alert로 동작
- 상품 노출 여부 변경: alert로 동작

#### 상품 주문 페이지
- 사용자가 상품 주문시 경험하는 보편적인 UI/UX를 구현하는 것을 목표로 작업하였습니다.
	- 카카오 api를 사용한 우편번호,주소 검색
	- 배송 정보에 주문자 정보 간편 입력
	- 배송 메모 선택
-  주문 상품리스트를 public 경로의 mock data를 axios를 이용해 받아온 후, 주문 완료된 데이터는 recoil을 이용해 저장해 주문내역 확인 페이지에서 재사용할 수 있도록 데이터 흐름을 구성했습니다.
- 결제 진행 관련 약관에 체크 시 버튼이 활성화 되도록 했으며, 결제 버튼에 금액을 표시해 사용자가 주문 금액을 한번 더 인지할 수 있도록 했습니다.
#### 상품 상세조회 페이지
- BaseComponent로 사용할 Slide, DropDown, TabBar 컴포넌트를 작성했습니다.
- 많이 사용하는 버튼, media query관련 css util함수를 작성했습니다.
- 상품 옵션 선택시 옵션개수에서 자동으로 삭제 후 옵션카드로 추가 될 수 있게끔 작성하였습니다.
- 옵션 카드에서 사용할 useCounter 커스텀 훅 & 카운터 컴포넌트를 작성하였습니다.
- list페이지의 id를 통해 상품상세정보의 데이터를 뽑아 낼 수 있게끔 구현했습니다.
- 상품페이지에서 옵션 추가를 하게 되면 recoil을 통해 전역상태를 추가해놨습니다.
- **api**가 따로 없어 통신의 과정을 보여드리려 fetch util을 만들어서 사용 후 작성하였습니다.
