import React from 'react';
import { useDaumPostcodePopup } from 'react-daum-postcode';
import styled from 'styled-components';

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
    // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
  };

  const handleClick = () => {
    open({ onComplete: handleComplete });
  };

  return (
    <button type="button" onClick={handleClick}>
      주소찾기
    </button>
  );
};

export default SearchAddress;
