import { createGlobalStyle } from 'styled-components'
import { useTheme } from '../Functions/theme'
import colors from './colors'

/**
 * CSS Global styles for the site using styled.components
 */
 const StyledGlobalStyle = createGlobalStyle`
body {  
  font-family: 'comfortaa', 'Montserrat', 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  color: #FFFFFF;
  margin: auto;
  box-sizing: border-box;
  background-color: ${({ isDarkMode }) => (isDarkMode ? `${colors.darkModeHighlights}` : `${colors.tertiary}`)};
  // color: ${({ isDarkMode }) => (isDarkMode ? `${colors.tertiary}` : `${colors.secondary}`)};
  max-width: 1920px;

  // min-height: 100vh;
} 

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
}

main {
  padding-top: 110px;
  // min-height: calc(100vh - 22rem);
  //  height: 100%; 
  min-height: 85vh; 
}

a {
  text-decoration: none;
  color: #000;
}
 
.sr-only {
  border: 0 !important;
  clip: rect(1px, 1px, 1px, 1px) !important; /* 1 */
  -webkit-clip-path: inset(50%) !important;
  clip-path: inset(50%) !important; /* 2 */
  height: 1px !important;
  margin: -1px !important;
  overflow: hidden !important;
  padding: 0 !important;
  position: absolute !important;
  width: 1px !important;
  white-space: nowrap !important; /* 3 */
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