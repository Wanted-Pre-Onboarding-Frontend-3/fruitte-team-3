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
| 김리후 | 팀원 / 상품 등록 페이지 |
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
#### 상품 주문 내역확인 페이지
#### 상품 목록조회 페이지
#### 상품목록 관리 페이지
#### 상품 주문 페이지
#### 상품 상세조회 페이지
