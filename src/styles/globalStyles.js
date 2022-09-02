import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

import colors from './colors';

const GlobalStyles = createGlobalStyle`
${reset}
  * {
    box-sizing:border-box;  
  }

  body {
  line-height: 1;
  }

  ol,
  ul,
  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: ${colors.black};
  }

  button {   
    cursor: pointer;
  } 
`;

export default GlobalStyles;
