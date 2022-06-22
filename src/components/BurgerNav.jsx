import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../utils/style/colors'
import { useState } from 'react'
// import language flags
import logoFR from '../assets/icons/frenchflag.webp'
import logoUK from '../assets/icons/ukflag.webp'

/**
 * CSS for the component using styled.components
 */
const HamburgerWrapper = styled.div`
  display: fixed;

  @media (min-width: 601px){
    display: none;
  }
`;

const StyledMenu = styled.nav`
  background: ${colors.secondary};
  box-shadow: 0 2px 4px rgba(0, 0, 0, .8);
  display: flex;
  justify-content: space-around;
  left: 0;
  margin-top: 0.8rem;
  opacity: ${({ open }) => open ? '1' : '0'};
  position: absolute;
  right: 0;
  top: 50px;
  transition: opacity 0.6s ease-in-out;
  width: 100%;
`;

const LINK = styled(NavLink)`
  color:  ${colors.tertiary};
  font-size: clamp(1rem, 1.667vw, 1.5rem);
  font-weight: 500;
  padding: 0.5rem;
  &.${(props) => props.activeClassName} {
    color: ${colors.primary};
  transition: color 0.3s linear;

  &:hover {
      color: ${colors.primary};
      text-decoration: underline;
    }
`;

const LanguageButton = styled.button`
  background: transparent;
  border: none;
  
  img {
    width: 1.5rem;
  }
`;

const StyledBurger = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 1.5rem;
  justify-content: space-around;
  padding: 0;
  position: absolute;
  right: 1.563rem;
  top: 1.8rem;
  width: 1.5rem;
  z-index: 5;

  div {
    background: ${colors.primary};
    border-radius: 0.625rem;
    height: 0.2rem;
    position: relative;
    transform-origin: 1px;
    transition: all 0.3s linear;
    width: 1.5rem;

      :first-child {
        transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
        }

      :nth-child(2) {
        opacity: ${({ open }) => open ? '0' : '1'};
        transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
        }

      :nth-child(3) {
        transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
        }
    }
`;

/**
 *  Renders a 'Hamburger' icon for the navigation menu 
 *  when the screen width is less than 600px
 *  'StyledBurger' animates from a Hamburger icon (when closed menu) to an 'X' icon (when menu open)
 * @function BurgerNav
 * @param {boolean} language (state)
 * @param {function} toggleLanguage: to set state
 * @returns {JSX}
 */
const BurgerNav = ( { language, toggleLanguage } ) => {
  const [open, setOpen] = useState(false);
  return (
    <HamburgerWrapper>
        <StyledBurger open={open} onClick={() => setOpen(!open)}>
            <div />
            <div />
            <div />
        </StyledBurger>

        <StyledMenu open={open}>
            <LINK activeClassName="active" exact to="/">{language? 'Accueil' : 'Home'}</LINK>
            <LINK activeClassName="active" to="/about">{language? 'A Propos' : ' About'}</LINK>
            <LanguageButton onClick={() => toggleLanguage(!language)}>{language? <img src={logoUK} alt="Change to English"/> : <img src={logoFR} alt="Changement en Français"/>}</LanguageButton>
        </StyledMenu>
    </HamburgerWrapper>
  )
}

export default BurgerNav

// Prototypes
BurgerNav.propTypes = {
  language: PropTypes.bool,
  toggleLanguage: PropTypes.func,
}