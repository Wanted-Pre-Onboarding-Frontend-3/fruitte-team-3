import styled from 'styled-components';

import { colors } from '../../styles/colors';

export default function Tags({ tag, ...props }) {
  const tagElements = {
    SALE: (
      <Tag
        backgroundColor={colors.red}
        color={colors.white}
        borderWidth={0}
        {...props}
      />
    ),
    MD: <Tag {...props} />,
    BEST: <Tag {...props} />,
    SOLDOUT: <Tag {...props} />,
    판매대기: <Tag {...props} />,
    default: <Tag {...props} />,
  };

  return tagElements?.[tag] || tagElements.default;
}

const Tag = styled.div`
  background-color: ${(props) => props.backgroundColor};
  border-color: ${(props) => props.borderColor || colors.gray4};
  color: ${(props) => props.color};
  border-width: ${(props) =>
    props.boderWidth ? `${props.boderWidth}px` : '1px'};
  border-style: solid;
  padding: 4px 8px;
  font-size: 11px;
`;
