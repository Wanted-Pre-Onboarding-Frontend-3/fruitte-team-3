import { useState } from 'react';

export const useCounter = (initialValue = 0, options) => {
  const [value, setValue] = useState(initialValue);

  const increase = () => {
    setValue(value + 1);
  };

  const decrease = () => {
    if (value === 0) return;
    setValue(value - 1);
  };

  const onIncrease = () => {
    increase();
  };

  const onDecrease = () => {
    decrease();
  };

  return {
    value,
    setValue,
    componentProps: {
      value: value,
      onIncrease,
      onDecrease,
    },
  };
};
