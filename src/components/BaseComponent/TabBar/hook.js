import { useState } from 'react';

export const useIsActiveTabBar = (props) => {
  const { currentValue } = props;

  const isActive = (value) => currentValue === value;

  return { isActive };
};

export const useTypedTabBar = (props) => {
  const { tabs, initialValue = '' } = props;

  const [currentValue, setCurrentValue] = useState(initialValue);

  const newTabs = tabs.map((tab) => {
    const { value, onClick } = tab;

    return {
      ...tab,
      onClick: async () => {
        await onClick?.();
        setCurrentValue(value);
      },
    };
  });

  return {
    componentProps: {
      className: props.className,

      tabs: newTabs,
      currentValue,
    },
  };
};
