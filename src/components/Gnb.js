import { Link } from 'react-router-dom';
import styled from 'styled-components';

import logo from '../assets/fruitte-logo.png';
import colors from '../styles/colors';

const Gnb = () => {
  return (
    <Header className="gnb">
      <div>
        <Link to="/">
          <img src={logo} alt="Fruitte logo" />
        </Link>
      </div>

      <ul>
        <li>
          <Link to="/">Fruit Store</Link>
        </li>

        <li>
          <Link to="/">Admin</Link>
        </li>

        <li>
          <Link to="/">My Cart</Link>
        </li>
      </ul>
    </Header>
  );
};

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  display: flex;

  border-bottom: 1px solid ${colors.gray1};

  ul {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
`;

export default Gnb;
