import { Link, NavLink } from 'react-router-dom'
// for styling
import styled from 'styled-components'
import colors from '../utils/style/colors'
// import logo
import logo from '../assets/logos/mark_logo.png'

/**
 * CSS for component using styled.components
 */

const HEADER = styled.header`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  z-index: 9999;
  background: black;
  justify-content: space-between;
  align-items: center;
  // max-width: 1240px;
  padding: 1.5rem;
  
  // @media screen and (max-width: 1240px) {
  //   margin: 1.25rem;
  // }
`;

const LogoImg = styled.img`
  width: 14.6vw;
  min-width: 11rem;
  max-width: 11rem;
`;

const UList = styled.ul`
  display: flex;
  list-style-type: none; 
  padding-left: 0rem;
`;

const NAVLINK = styled(NavLink)`
  text-decoration: none;
  padding-left: 2.5vw;
  cursor: pointer;  
  font-family: Vladimir script, 'Montserrat', sans-serif;
  font-weight: 500;
  color: ${colors.tertiary};
  font-size: clamp(0.75rem, 2vw, 2.5rem);
  &.${(props) => props.activeClassName} {
    color: ${colors.activeA};
  }
  &:hover {
    color: ${colors.activeA};
    text-decoration: underline;
  }

  @media screen and (max-width: 600px) {
    text-transform: uppercase;
  }
`;

/**
 * Renders Header on each page
 * @function Header
 * @returns {JSX}
 */
const Header = () => {
  return (
    <HEADER>
      <Link to="/"><LogoImg src={logo} alt="logo"/></Link>
      <nav>
        <UList>
          <li><NAVLINK activeClassName="active" exact to="/">Accueil</NAVLINK></li>
          <li><NAVLINK activeClassName="active" to="/about">A Propos</NAVLINK></li>
        </UList>
      </nav>
    </HEADER>
  )
}

  export default Header

