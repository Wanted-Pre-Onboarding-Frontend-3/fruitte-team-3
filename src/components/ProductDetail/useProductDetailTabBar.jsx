import { useRef, useState } from 'react';

export const useProductDetailTabBar = (args) => {
  const { reviewCount = 0 } = args;

  const baseTabs = buildProductDetailTabs(reviewCount);
  const initialValue = baseTabs[0].value;

  const scrollRef = useRef(null);
  const [currentTab, setCurrentTab] = useState(initialValue);

  const scrollToElement = () => {
    const element = scrollRef.current;
    // * 전체 스크롤 높이가 달라질 경우 스크롤 높이 조정 후 스크롤 되도록 함
    if (window && element)
      setTimeout(() => window.scrollTo({ top: element.offsetTop }), 0);
  };

  const tabs = baseTabs.map((tab) => ({
    ...tab,
    onClick: async () => {
      setCurrentTab(tab.value);
      scrollToElement();
    },
  }));

  const isShowTab = (value) => {
    return currentTab === value;
  };

  return {
    scrollRef,
    isShowTab,
    componentProps: {
      tabs,
      initialValue,
    },
  };
};

export const PRODUCT_CONTENT_TAB = 'product-content';
export const REVIEW_TAB = 'review';
export const QNA_TAB = 'qna';

const buildProductDetailTabs = (reviewCount) => [
  {
    value: PRODUCT_CONTENT_TAB,
    label: '상품설명',
  },
  {
    value: REVIEW_TAB,
    label: `리뷰(${reviewCount})`,
  },
  {
    value: QNA_TAB,
    label: '교환/환불',
  },
];
