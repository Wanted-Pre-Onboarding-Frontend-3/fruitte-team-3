import styled from 'styled-components';

import userDefaultImg from '../../assets/images/user-default.png';
import { colors } from '../../styles/colors';
import { fonts } from '../../styles/fonts';

export default function UserInfo() {
  return (
    <UserInfoWrapper>
      <UserImg defaultImg={userDefaultImg} />
      <Text>홍길동 님 안녕하세요.</Text>
    </UserInfoWrapper>
  );
}

const UserInfoWrapper = styled.div`
  width: 100%;
  padding: 50px 0px 40px 45px;
  margin-bottom: 70px;
  display: flex;
  align-items: center;
  background-color: ${colors.white};
`;

const UserImg = styled.div`
  width: 85px;
  height: 85px;
  margin-right: 30px;
  background-image: url(${(props) => props.defaultImg});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
`;

const Text = styled.p`
  ${fonts.H3}
`;
