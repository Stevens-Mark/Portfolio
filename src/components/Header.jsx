import { Link, NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
// for styling
import styled from 'styled-components'
import colors from '../utils/style/colors'
import { useTheme } from '../utils/Functions/theme'
// import fade-in keyframe
import { fadeIn } from '../utils/style/keyframes'
// import logo
import logoM from '../assets/logos/mark_logo.png'
import logoFR from '../assets/icons/frenchflag.png'
import logoUK from '../assets/icons/ukflag.png'
/**
 * CSS for component using styled.components
 */
const HEADER = styled.header`
  max-width: 1920px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  z-index: 9999;
  background: ${({ theme }) => (theme === 'light' ? `${colors.secondary}` : `${colors.mainBackgroundDarkMode}`)};
  padding: 1.5rem 0rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .8);
`;

const LogoImg = styled.img`
  animation: ${fadeIn} 3s both ease-in-out;
  width: clamp(8rem, 12.2vw, 12rem);
  padding-left: 1.5rem;
`;

const LanguageButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  img {
    animation: ${fadeIn} 3s both ease-in-out;
    width: clamp(1.5rem, 1.2vw, 1.5rem);
  }
`;

const Nav = styled.div`
  display: flex;
  list-style-type: none; 
  align-items: center;
  padding-right: 1rem;
`;

const NAVLINK = styled(NavLink)`
  text-decoration: none;
  padding: 0vw 1.5vw;
  cursor: pointer;  
  font-family: Vladimir script, 'comfortaa', sans-serif;
  font-weight: 500;
  color: ${colors.tertiary};
  font-size: clamp(1.3rem, 2vw, 2.5rem);
  &.${(props) => props.activeClassName} {
    color: ${colors.primary};
  }
  &:hover {
    color: ${colors.primary};
    text-decoration: underline;
  }
`;

/**
 * Renders Header on each page
 * @function Header
 * @param {boolean} language (state)
 * @param {function} toggleLanguage: to set state
 * @returns {JSX}
 */
const Header = ( { language, toggleLanguage } ) => {

  const { theme } = useTheme()

  return (
    <HEADER theme={theme}>
      <Link to="/"><LogoImg src={logoM} alt="logo"/></Link>
 
      <Nav>
        <NAVLINK activeClassName="active" exact to="/">{language? 'Accueil' : ' Home'}</NAVLINK>
        <NAVLINK activeClassName="active" to="/about">{language? 'A Propos' : ' About'}</NAVLINK>
        <LanguageButton onClick={() => toggleLanguage(!language)}>{language? <img src={logoUK} alt="Change to English"/> : <img src={logoFR} alt="Changement en Français"/>}</LanguageButton>
      </Nav>
    </HEADER>
  )
}

export default Header

// Prototypes
Header.propTypes = {
  language: PropTypes.bool.isRequired,
  toggleLanguage: PropTypes.func.isRequired,
}



