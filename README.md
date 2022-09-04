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

<br>

## 3. 역할
| 이름   | 역할  |
| ------ | ------ |
| 김리후 | 팀원 / 상품 등록 페이지. Gnb |
| 김지현 | 팀원 / 상품 주문 내역확인 페이지 | 
| 이경준 | 팀원 / 상품 목록조회 페이지 |
| 이혜성 | **팀장** / 상품목록 관리 페이지 |
| 문선화 | 팀원 / 상품 주문 페이지 |
| 홍성준 | 팀원 / 상품 상세조회 페이지 |
| 서수민 | 팀원 / 건강상의 이유로 불참 |

<br>

## 4. 디렉토리 구조

```
public                         
├─ mock                        
│  ├─ cart.json                
│  ├─ product_detail.json      
│  ├─ product_list_small.json  
│  └─ product_manage.json      
├─ favicon.ico                 
├─ index.html                  
├─ logo192.png                 
├─ logo512.png                 
├─ manifest.json               
└─ robots.txt                  
```

<br>

```
src                                    
├─ api                                 
├─ assets                              
│  └─ images                           
│     ├─ fruitte-logo.png              
│     ├─ symbol.png                    
│     └─ user-default.png              
├─ components                          
│  ├─ BaseComponent                    
│  │  ├─ DropDown                      
│  │  │  └─ index.jsx                  
│  │  ├─ slider                        
│  │  │  ├─ index.jsx                  
│  │  │  └─ slideItem.jsx              
│  │  └─ TabBar                        
│  │     ├─ hook.js                    
│  │     └─ index.jsx                  
│  ├─ Order                            
│  │  ├─ OrderInput.jsx                
│  │  ├─ OrderList.jsx                 
│  │  ├─ OrderSelectBox.jsx            
│  │  └─ SearchAddress.jsx             
│  ├─ OrderHistory                     
│  │  ├─ LeftMenu.jsx                  
│  │  ├─ OrdererInfo.jsx               
│  │  ├─ OrderItemLayout.jsx           
│  │  ├─ OrderListHeader.jsx           
│  │  └─ UserInfo.jsx                  
│  ├─ ProductDetail                    
│  │  └─ useProductDetailTabBar.jsx    
│  ├─ ProductList                      
│  │  ├─ BottomSection.jsx             
│  │  ├─ Common.jsx                    
│  │  ├─ InterviewItem.jsx             
│  │  ├─ Pagination.jsx                
│  │  ├─ ProductItem.jsx               
│  │  ├─ Symbol.jsx                    
│  │  ├─ Tags.jsx                      
│  │  └─ TopSection.jsx                
│  ├─ ProductRegister                  
│  │  ├─ index.jsx                     
│  │  ├─ RegisterFrame.jsx             
│  │  ├─ RegisterImgButton.jsx         
│  │  ├─ RegisterInput.jsx             
│  │  ├─ RegisterOption.jsx            
│  │  └─ RegisterOptionSet.jsx         
│  ├─ SamplePage                       
│  │  └─ sample-page-components-list   
│  ├─ Gnb.jsx                          
│  └─ Layout.jsx                       
├─ mock                                
│  ├─ interview_list.json              
│  └─ product_list.json                
├─ pages                               
│  ├─ Order                            
│  │  ├─ Order.jsx                     
│  │  └─ OrderComplete.jsx             
│  ├─ OrderHistory                     
│  │  ├─ OrderHistory.jsx              
│  │  └─ OrderHistoryDetail.jsx        
│  ├─ ProductDetail                    
│  │  └─ ProductDetail.jsx             
│  ├─ ProductList                      
│  │  └─ ProductList.jsx               
│  ├─ productManage                    
│  │  ├─ components                    
│  │  │  └─ tableWithCheckbox.jsx      
│  │  └─ index.jsx                     
│  └─ home.jsx                         
├─ router                              
├─ src                                 
│  └─ ProductDetail                    
│     └─ ProductDetailContentInfo.jsx  
├─ styles                              
│  ├─ colors.js                        
│  ├─ fonts.js                         
│  └─ globalStyles.js                  
├─ utils                               
│  ├─ css.util.js                      
│  ├─ fetch.util.js                    
│  ├─ hooks.js                         
│  ├─ orderStore.js                    
│  └─ registerStore.js                 
├─ App.js                              
├─ App.test.js                         
├─ index.js                            
├─ reportWebVitals.js                  
└─ setupTests.js                       
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

## 7. 구현 결과 @@@체이지 캡쳐와 함께 작성하면 어떨까 하여, 우선 비워뒀습니다@@@
#### 상품 등록 페이지

<img src="https://user-images.githubusercontent.com/81549337/188328968-c4f81c99-9c4b-4737-89b6-939c21e11a7d.PNG" width="400" />

- 과제 요건 충족을 위해 기본적인 **상품 정보**(이미지, 상품 옵션, 수량, 가격 등) 및 추가적인 정보 등록 페이지를 구현하였습니다.
- 상품 등록시 필요한 input값을 **recoil**을 이용해 관리하여 **기존 json 데이터**와 합치도록 하였습니다. 
- **상품 코드**는 랜덤으로 생성됩니다.
- **이미지 첨부**는 메인 이미지의 경우 하나, 상세정보의 경우 여러 장을 올릴 수 있도록 하였습니다. 
- **재사용성**을 위해 input, 이미지 첨부 버튼, 상품옵션 컴포넌트를 별도로 만들었습니다. 
- [src/components/ProductRegister/index.jsx](src/components/ProductRegister)
#### 상품 주문 내역확인 페이지
#### 상품 목록조회 페이지
#### 상품목록 관리 페이지
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
