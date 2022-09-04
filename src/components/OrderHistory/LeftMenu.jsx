import { Link } from 'react-router-dom';
import styled from 'styled-components';

import fonts from '../../styles/fonts';

export default function LeftMenu() {
  return (
    <MenuList>
      <MenuItem>
        <StyledLink active="true" to="/mypage/order">
          주문 내역
        </StyledLink>
      </MenuItem>
      <MenuItem>
        <StyledLink to="/">위시 리스트</StyledLink>
      </MenuItem>
      <MenuItem>
        <StyledLink to="/">취소/교환/반품</StyledLink>
      </MenuItem>
      <MenuItem>
        <StyledLink to="/">쿠폰</StyledLink>
      </MenuItem>
    </MenuList>
  );
}

const MenuList = styled.ul`
  width: 210px;
  padding: 0 15px;
  ${fonts.Body1}

  @media screen and (max-width: 768px) {
    width: AUTO;
    display: flex;
  }
`;

const MenuItem = styled.li`
  width: 100%;
  margin-bottom: 12px;
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    ${fonts.Body2}
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`;

const StyledLink = styled(Link)`
  display: inline-block;
  border-bottom: 2px solid
    ${(props) => (props.active ? '#4A9C2D' : 'transparent')};
`;
