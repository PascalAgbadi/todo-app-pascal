import { createGlobalStyle, css } from "styled-components";

export default createGlobalStyle`
${({ theme }) => css`
:root {
    color: ${theme.colors.black};
    filter: ${theme.colors.filter};
  }
  
`}
`;