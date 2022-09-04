import { atom } from 'recoil';

import product_list from '../mock/product_list';

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
