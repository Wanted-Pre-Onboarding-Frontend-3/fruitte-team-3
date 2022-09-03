import React from 'react';
import styled from 'styled-components';

import { useIsActiveTabBar } from '../../../components/BaseComponent/TabBar/hook';
import { Text } from '../../../components/ProductList/Common';
import { colors } from '../../../styles/colors';
import { PlainButton } from '../../../utils/css.util';

export const TabBar = (props) => {
  const { className, tabs } = props;

  const { isActive } = useIsActiveTabBar(props);

  return (
    <RootWrap className={className}>
      <TabBoxWrap>
        {tabs.map((tab) => (
          <TabWrap
            key={tab.value}
            isActive={isActive(tab.value)}
            onClick={tab.onClick}
          >
            <Text>{tab.label}</Text>
          </TabWrap>
        ))}
      </TabBoxWrap>
    </RootWrap>
  );
};

const RootWrap = styled.div`
  background-color: ${colors.white};
`;

const TabBoxWrap = styled.div`
  display: flex;
  align-items: center;
  padding-top: 4px;
`;

const TabWrap = styled(PlainButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  color: ${(props) => (props.isActive ? `${colors.black}` : `${colors.gray4}`)};

  & > * {
    position: relative;
    width: 100%;
    &::after {
      content: '';
      width: ${(props) => (props.isActive ? '100%' : '0')};
      height: 2px;
      background: ${colors.black};
      position: absolute;
      left: 0;
      bottom: 0;
    }
  }
`;
