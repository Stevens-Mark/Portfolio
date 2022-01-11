import { Link} from 'react-router-dom'
// for styling
import styled from 'styled-components'
import colors from '../utils/style/colors'
import { useTheme } from '../utils/Functions/theme'
// import logo
import FooterLogo from '../assets/logos/mark_logo.png'

/**
 * CSS for component using styled.components
 */
const FOOTER = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 8rem;
  margin-top: 1rem;
  background: ${({ theme }) => (theme === 'light' ? `${colors.secondary}` : `${colors.mainBackgroundDarkMode}`)};
  
  img {
    margin-top: 0.5rem;
    width: 12rem;
  }

  p {
    font-size: clamp(0.75rem, 1.5vw, 2rem);
    font-family: Vladimir script;
    margin: unset;
    color: ${colors.primary};
  }
`;

const NightModeButton = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: ${({ theme }) => (theme === 'light' ? `${colors.tertiary}` : `${colors.primary}`)};  
`;

/**
 * Renders Footer on each page
 * @function Banner
 * @returns {JSX}
 */
const Footer = () => {
  const { toggleTheme, theme } = useTheme()
  return (
    <FOOTER theme={theme}>
        <Link to="/"><img src={FooterLogo} alt="logo"></img></Link>
        <p>© 2022 Mark Stevens. All rights reserved</p>
        <NightModeButton theme={theme} onClick={() => toggleTheme()}>
            Change mode : {theme === 'light' ? '☀️' : '🌙'}
        </NightModeButton>
    </FOOTER>
  )
}

export default Footer