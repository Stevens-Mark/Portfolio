import { createGlobalStyle } from 'styled-components'
import { useTheme } from '../Functions/theme'
import colors from './colors'
// import fonts from  local folder
import vladimir from '../../assets/fonts/Vladimir.ttf'
import comfortaa from '../../assets/fonts/Comfortaa.ttf'
import montserrat from '../../assets/fonts/Montserrat.ttf'


/**
 * CSS Global styles for the site using styled.components
 */
 const StyledGlobalStyle = createGlobalStyle`
body {  
  -webkit-font-smoothing: antialiased;
  background-color: ${({ isDarkMode }) => (isDarkMode ? `${colors.darkModeHighlights}` : `${colors.tertiary}`)};
  box-sizing: border-box;
  color: ${colors.secondary};
  font-family: 'comfortaa', 'Montserrat', sans-serif;
  margin: auto;
  max-width: 1920px;

} 

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
}

main {
  min-height: 85vh;
  padding-top: 100px;

  @media screen and (min-width: 600px) {
    padding-top: 110px;
  }
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
  src: url(${vladimir}) format("truetype");
  font-display: swap;
}

@font-face {
  font-family: "comfortaa";
  font-style: normal;
  font-weight: normal;
  src: url(${comfortaa}) format("truetype");
  font-display: swap;
}

@font-face {
  font-family: "montserrat";
  font-style: normal;
  font-weight: normal;
  src: url(${montserrat}) format("truetype");
  font-display: swap;
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