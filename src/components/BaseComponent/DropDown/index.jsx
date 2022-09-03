import React, { useState } from 'react';
import styled from 'styled-components';

import { Text } from '../../../components/ProductList/Common';
import { colors } from '../../../styles/colors';

export function DropDown(props) {
  const [dropdownState, setDropdownState] = useState(false);

  const handleDropdownClick = () => {
    setDropdownState(!dropdownState);
  };
  const handleSetDropdownValue = (value) => {
    props.setValue(value);
    setDropdownState(!dropdownState);
  };

  return (
    <DropDownContainer>
      <DropDownWrap>
        <DropDownButton onClick={handleDropdownClick}>
          <Text fontSize={12}>
            {props.value === '' ? '필수항목을 선택해주세요' : props.value}
          </Text>
        </DropDownButton>
        <DropDownItems isVisible={dropdownState}>
          {props.options &&
            props.options.map((option) => {
              return (
                <DropDownItem
                  key={option.title}
                  onClick={() => handleSetDropdownValue(option.title)}
                >
                  <Text fontSize={12}>{option.title}</Text>
                </DropDownItem>
              );
            })}
        </DropDownItems>
      </DropDownWrap>
    </DropDownContainer>
  );
}

const DropDownContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  background: white;
`;

const DropDownWrap = styled.div`
  min-width: 100px;
  width: 100%;
  position: relative;
`;

const DropDownButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${colors.gray6};
  border: 1px solid ${colors.spring};
  border-radius: 4px;
  height: 40px;
  width: auto;
  cursor: pointer;

  &&:hover {
    background: #f2f2f2;
  }

  &&:focus {
    background: #f2f2f2;
  }
`;

const DropDownItems = styled.div`
  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
  position: absolute;
  width: 100%;
  margin-top: 8px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: ${colors.gray6};
  border: 1px solid ${colors.spring};
  border-radius: 2px;
`;

const DropDownItem = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &&:not(:first-child) {
    padding-top: 15px;
    padding-bottom: 15px;
  }

  &&:not(:last-child) {
    padding-top: 15px;
    padding-bottom: 15px;
    border-bottom: 1px solid ${colors.spring};
  }
`;
