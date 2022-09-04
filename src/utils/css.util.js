import styled, { css } from 'styled-components';

export const preventBlueHighlight = css`
  -webkit-tap-highlight-color: transparent;

  &:focus {
    outline: none;
  }
`;

export const PlainButton = styled.button`
  ${preventBlueHighlight};
  padding: 0;
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }
`;

const mediaQuery = (width) => {
  return `@media (max-width: ${width}px)`;
};

const MOBILE_MAX_WIDTH = 768;
const TABLET_MAX_WIDTH = 1280;

export const media = {
  mobile: mediaQuery(MOBILE_MAX_WIDTH),
  tablet: mediaQuery(TABLET_MAX_WIDTH),
  custom: mediaQuery,
};
