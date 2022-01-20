import { Link, NavLink } from 'react-router-dom'
// for styling
import styled from 'styled-components'
import colors from '../utils/style/colors'
import { useTheme } from '../utils/Functions/theme'
// import fade-in keyframe
import { fadeIn } from '../utils/style/keyframes'
// import logo
import logoM from '../assets/logos/mark_logo.png'

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

const Nav = styled.div`
  display: flex;
  list-style-type: none; 
  padding-right: 1.5rem;
`;

const NAVLINK = styled(NavLink)`
  text-decoration: none;
  padding-left: 2.5vw;
  cursor: pointer;  
  font-family: Vladimir script, 'comfortaa', 'Montserrat', sans-serif;
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
 * @returns {JSX}
 */
const Header = () => {

  const { theme } = useTheme()

  return (
    <HEADER theme={theme}>
      <Link to="/"><LogoImg src={logoM} alt="logo"/></Link>
      <Nav>
        <NAVLINK activeClassName="active" exact to="/">Accueil</NAVLINK>
        <NAVLINK activeClassName="active" to="/about">A Propos</NAVLINK>
      </Nav>
    </HEADER>
  )
}

  export default Header

