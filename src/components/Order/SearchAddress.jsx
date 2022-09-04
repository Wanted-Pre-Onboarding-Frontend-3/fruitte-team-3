import React from 'react';
import { useDaumPostcodePopup } from 'react-daum-postcode';
import styled from 'styled-components';

import { colors } from '../../styles/colors';
import { fonts } from '../../styles/fonts';

const SearchAddress = (props) => {
  const CURRENT_URL =
    'https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';
  const open = useDaumPostcodePopup(CURRENT_URL);

  const handleComplete = (data) => {
    console.log(data);
    let fullAddress = data.address;
    let zipcode = data.zonecode;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress +=
          extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }

    const adrData = {
      fullAddress: fullAddress,
      zipcode: zipcode,
      detailAddress: '',
    };
    props.handleAddress(adrData);
  };

  const handleClick = () => {
    open({ onComplete: handleComplete });
  };

  return (
    <BtnWrapper>
      <button type="button" onClick={handleClick}>
        주소찾기
      </button>
    </BtnWrapper>
  );
};

export default SearchAddress;

const BtnWrapper = styled.div`
  margin-top: 1rem;

  button {
    width: 100%;
    border: 0;
    ${fonts.body1};
    color: ${colors.white};
    background: ${colors.spring};
    padding: 1rem 2rem;
    border-radius: 0.4rem;
  }

  button:hover {
    background: ${colors.summer};
  }
`;
