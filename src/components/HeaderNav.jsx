
import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
// for styling
import styled from 'styled-components'
import colors from '../utils/style/colors'
import { useTheme } from '../utils/Functions/theme'
// import Tooltip component
import Tooltip from './ToolsTips/ToolTip'
// import fade-in keyframe
import { fadeIn } from '../utils/style/keyframes'
// import logo & language flags
import logo from '../assets/logos/mark_logo.webp'
import logoFR from '../assets/icons/frenchflag.webp'
import logoUK from '../assets/icons/ukflag.webp'
// import Hamburger Navigation component
import BurgerNav from './BurgerNav'

/**
 * CSS for the component using styled.components
 */
const HEADER = styled.header`
  align-items: center;
  animation: ${fadeIn} 1s both ease-in-out;
  background: ${colors.secondary};
  box-shadow: 0 2px 4px rgba(0, 0, 0, .8);
  display: flex;
  justify-content: space-between;
  left: 0;
  margin: 0 auto;
  max-width: 1920px;
  padding: 1rem 0rem;
  position: fixed;
  right: 0;
  top: ${({ position }) => position};
  transition: top 0.6s;
  z-index: 999;

  @media screen and (min-width: 600px) {
    height: 4rem;
    padding: 1rem 0rem;
  }
`;

const Image = styled.img`
  animation: ${fadeIn} 3s both ease-in-out;
  width: clamp(10rem, 13vw, 14rem);
`;

const NavGroup = styled.nav`
  padding: 0rem 1.563rem;
  width: 100%;

  @media screen and (min-width: 601px) {
    align-items: center;
    display: flex;
    justify-content: space-between;
    }
`;

const LinkGroup = styled.div`
  display: none;

  @media screen and (min-width: 601px) {
    align-items: center;
    display: flex;
    }
`;

const LanguageButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  img {
    animation: ${fadeIn} 3s both ease-in-out;
    width: 1.5rem;
  }
`;

const LINK = styled(NavLink)`
  position:relative;
  color: ${colors.tertiary};
  font-family: 'Vladimir', 'comfortaa';
  font-size: clamp(2rem, 3.125vw, 2.5rem);
  padding: 0vw 1.5vw;
  transition: 300ms ease-in-out;
    &.${(props) => props.activeClassName} {
      color: ${colors.primary};
        }
    &:hover {
      color: ${colors.primary};
    }
  
    &:after {
      display:block;
      margin: -0.5rem;
      content: "";
      border-bottom: solid 4px ${colors.primary};  
      border-radius: 3rem;
      transform: scaleX(0);  
      transition: transform 300ms ease-in-out;
      transform-origin:100% 50%
    }
    &:hover:after { 
      transform: scaleX(1);
      transform-origin:0 50%;
    }
`;

/**
 * Renders Header on each page
 * @function Header
 * @param {boolean} language (state)
 * @param {function} toggleLanguage: to set state
 * @param {object} siteText: either FR/EN
 * @returns {JSX}
 */
const Header = ( { language, toggleLanguage, siteText }) => {

  const { home, about } = siteText.header
  const { theme } = useTheme()

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

   useEffect(() => {
    const handleScroll = () => {
    const currentScrollPos = window.pageYOffset        // find current scroll position
    setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 0) || currentScrollPos < 10)   // set state based on location info
    setPrevScrollPos(currentScrollPos)      // set state to new scroll position
    }
    window.addEventListener('scroll', handleScroll)
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [prevScrollPos])

  return (
    <HEADER theme={theme} position={visible ? '0' : '-115px' }>
      <NavGroup>
          <LINK to="/"><Image src={logo} alt="Link to Home"></Image></LINK>
          <LinkGroup>
            <LINK className="expand" activeClassName="active" exact to="/">{home}</LINK>
            <LINK activeClassName="active" to="/about">{about}</LINK>
            <LanguageButton onClick={() => toggleLanguage(!language)}>
              {language? 
                (
                <Tooltip content="English">
                  <img src={logoUK} alt="Change to English"/>
                </Tooltip>
                )
              : 
                (
                <Tooltip content="Français">
                  <img src={logoFR} alt="Change to French"/>
                </Tooltip>
                )
              }
            </LanguageButton> 
          </LinkGroup>
            <BurgerNav language={language} toggleLanguage={toggleLanguage} />
      </NavGroup>
    </HEADER>
    )
}

export default Header

// Prototypes
Header.propTypes = {
  language: PropTypes.bool.isRequired,
  toggleLanguage: PropTypes.func.isRequired,
  siteText: PropTypes.object.isRequired,
}