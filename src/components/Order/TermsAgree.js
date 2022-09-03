import React, { useState } from 'react';
import styled from 'styled-components';

const TermsAgree = (props) => {
  const terms = [
    { id: 0, title: '(필수) 개인정보 수집·이용 및 처리 동의' },
    { id: 1, title: '(필수) 개인정보 제3자 제공 동의' },
    { id: 2, title: '(필수) 전자지급 결제대행 서비스 이용약관 동의' },
  ];

  const [checkItems, setCheckItems] = useState([]);

  const handleSingleCheck = (checked, id) => {
    if (checked) {
      setCheckItems((prev) => [...prev, id]);
    } else {
      setCheckItems(checkItems.filter((el) => el !== id));
    }
  };

  const handleAllCheck = (checked) => {
    if (checked) {
      const idArray = [];
      terms.forEach((el) => idArray.push(el.id));
      setCheckItems(idArray);
    } else {
      setCheckItems([]);
    }
    props.handleTermsAgree(checkItems);
  };

  return (
    <Wrapper>
      <div>
        <input
          type="checkbox"
          name="select-all"
          onChange={(e) => handleAllCheck(e.target.checked)}
          checked={checkItems.length === terms.length ? true : false}
        />
        <span>결제 진행 필수 전체 동의</span>
      </div>
      <ul>
        {terms?.map((term, key) => (
          <li key={key}>
            <input
              type="checkbox"
              name={`select-${term.id}`}
              onChange={(e) => handleSingleCheck(e.target.checked, term.id)}
              checked={checkItems.includes(term.id) ? true : false}
            />
            {term.title}
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};
export default TermsAgree;

const Wrapper = styled.div`
  ul {
    list-style: none;
    padding-left: 0.5rem;
  }
`;
