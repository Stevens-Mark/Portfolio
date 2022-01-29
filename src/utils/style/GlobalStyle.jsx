import { createGlobalStyle } from 'styled-components'
import { useTheme } from '../Functions/theme'
import colors from './colors'

/**
 * CSS Global styles for the site using styled.components
 */
 const StyledGlobalStyle = createGlobalStyle`
body {  
  -webkit-font-smoothing: antialiased;
  background-color: ${({ isDarkMode }) => (isDarkMode ? `${colors.darkModeHighlights}` : `${colors.tertiary}`)};
  box-sizing: border-box;
  color: ${colors.tertiary};
  font-family: 'comfortaa', 'Montserrat', sans-serif;
  margin: auto;
  max-width: 1920px;
} 

code {
  // font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
}

main {
  min-height: 85vh;
  padding-top: 120px;
}

a {
  text-decoration: none;
  color: ${colors.secondary};
  cursor: pointer;  
}
 
.sr-only {
  -webkit-clip-path: inset(50%) !important;
  border: 0 !important;
  clip-path: inset(50%) !important; /* 2 */
  clip: rect(1px, 1px, 1px, 1px) !important; /* 1 */
  height: 1px !important;
  margin: -1px !important;
  overflow: hidden !important;
  padding: 0 !important;
  position: absolute !important;
  white-space: nowrap !important; /* 3 */
  width: 1px !important;
}

@font-face {
  font-family: "Vladimir";
  font-style: normal;
  font-weight: normal;
  src: url("../fonts/Vladimir.ttf") format("truetype");
}

@font-face {
  font-family: "comfortaa";
  font-style: normal;
  font-weight: normal;
  src: url("../fonts/Comfortaa.ttf") format("truetype");
}
`;

/**
 * @function GlogalStyle
 * @returns global theme css styling (either for day or night depending on state)
 */
function GlobalStyle() {
  const { theme } = useTheme()
  return <StyledGlobalStyle isDarkMode={theme === 'dark'} />
}

export default GlobalStyle