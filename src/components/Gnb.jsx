import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import logo from '../assets/images/fruitte-logo.png';
import { colors } from '../styles/colors';

const Gnb = () => {
  const [isDropdown, setIsDropdown] = useState(false);

  const handleShowDropdown = () => setIsDropdown(true);
  const handleHideDropdown = () => setIsDropdown(false);

  return (
    <Header className="gnb">
      <section>
        <Link to="/">
          <img src={logo} alt="Fruitte logo" />
        </Link>
      </section>

      <Menu>
        <Link to="/fruitstore" onMouseEnter={handleHideDropdown}>
          Fruit Store
        </Link>
        <div onMouseEnter={handleShowDropdown}>
          Admin
          {isDropdown && (
            <Dropdown onMouseLeave={handleHideDropdown}>
              <Link to="/admin/product-manage" onClick={handleHideDropdown}>
                상품관리
              </Link>
              <Link to="/admin/product-register" onClick={handleHideDropdown}>
                상품등록
              </Link>
            </Dropdown>
          )}
        </div>
        <Link to="/mypage/order" onMouseEnter={handleHideDropdown}>
          My Cart
        </Link>
      </Menu>
    </Header>
  );
};

const Header = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  width: -webkit-fill-available;
  padding: 1rem;
  background: ${colors.white};
  z-index: 50;
  box-shadow: 0 2px 6px 0 ${colors.gray5};
  user-select: none;

  img {
    width: 200px;
  }
`;

const Menu = styled.section`
  width: 100%;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-around;

  a {
    &:hover {
      color: ${colors.spring};
      font-weight: bold;
    }
  }

  div {
    cursor: pointer;
    position: relative;

    &:hover {
      color: ${colors.spring};
      font-weight: bold;
    }
  }
`;

const Dropdown = styled.span`
  position: absolute;
  width: 200px;
  top: 60px;
  left: -80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.3em;
  border: 1px solid ${colors.spring};
  border-top: 3px solid ${colors.spring};
  background-color: ${colors.white};

  a {
    font-size: 14px;
    font-weight: normal;

    &:first-child {
      margin-bottom: 1em;
    }
    &:hover {
      color: ${colors.spring};
      font-weight: bold;
    }
  }
`;

export default Gnb;
