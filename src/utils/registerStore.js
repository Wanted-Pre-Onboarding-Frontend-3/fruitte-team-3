import { atom } from 'recoil';

import product_list from '../mock/product_list';

// newItemInfo 객체로 받이 기존 데이터에 추가하기 위한 값 : 옵션 설정값

export const itemListState = atom({
  key: 'itemListState',
  default: product_list,
});

export const newItemInfoState = atom({
  key: 'newItemInfoState',
  default: {},
});

export const itemCodeState = atom({
  key: 'itemCodeState',
  default: 0,
});

export const optSetsState = atom({
  key: 'optSetsState',
  default: [],
});

export const mainImgUrlState = atom({
  key: 'mainImgUrlState',
  default: [],
});

export const detailImgUrlState = atom({
  key: 'detailImgUrlState',
  default: [],
});

export const itemOptTitleState = atom({
  key: 'itemOptTitleState',
  default: '',
});

export const itemOptPriceState = atom({
  key: 'itemOptPriceState',
  default: 0,
});
