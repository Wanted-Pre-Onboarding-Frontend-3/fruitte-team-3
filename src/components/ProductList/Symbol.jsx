import styled from 'styled-components';

import symbol from '../../assets/images/symbol.png';

export default function Symbol() {
  return <SymbolImage src={symbol} alt="symbol" />;
}

const SymbolImage = styled.img`
  width: 35px;
  aspect-ratio: 1 / 1;
`;
