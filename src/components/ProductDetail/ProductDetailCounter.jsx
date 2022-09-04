import styled from 'styled-components';

import { colors } from '../../styles/colors';
import { PlainButton } from '../../utils/css.util';

export const Counter = (props) => {
  const { value, onIncrease, onDecrease } = props;

  return (
    <RootWrap>
      <ButtonWrap onClick={onDecrease}>-</ButtonWrap>
      <CounterValueWrap>{value}</CounterValueWrap>
      <ButtonWrap onClick={onIncrease}>+</ButtonWrap>
    </RootWrap>
  );
};

const RootWrap = styled.div`
  display: flex;
`;

const ButtonWrap = styled(PlainButton)`
  border: 1px solid ${colors.gray1};
  padding: 4px 6px;
  font-size: 18px;
  font-weight: 300;
`;

const CounterValueWrap = styled.div`
  display: flex;
  align-items: center;
  border-top: 1px solid ${colors.gray1};
  border-bottom: 1px solid ${colors.gray1};
  padding: 4px 16px;
  font-size: 14px;
`;
