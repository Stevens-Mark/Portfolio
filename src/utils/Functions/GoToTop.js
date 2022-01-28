import { useEffect, useState } from 'react'
// for styling
import styled from 'styled-components'
import colors from '../style/colors'
import { useTheme } from './theme'
import upArrow from '../../assets/icons/arrow_up.svg'

/**
 * CSS for component using styled.components
 */
const ToTopButton = styled.img`
  position: fixed;
  z-index: 9999;
  top:auto;
  bottom: 10rem;
  right: 1.25rem;
  width: clamp(1.5rem, 3.2vw, 2.5rem);
  padding: 3px;
  background: ${colors.topButtonMain};
  border: 2px solid ${colors.tertiary};
  filter: ${({ theme }) => (theme === 'light' ? '' : 'invert(100%) sepia(100%) saturate(0%) hue-rotate(288deg) brightness(102%) contrast(102%)')};
  cursor: pointer;
  border-radius: 40%;
  transition: 0.4s;
 
  &:hover {
    background: ${colors.topButtonHover};
  }
  @media screen and (min-width: 768px) {
    bottom: 8rem;
  }
  @media screen and (min-width: 1950px) {
    left: 50%;
    transform: translate(-50%, 0); 
    bottom: 12rem;
  }
`;

/**
* A go to top button appears after scrolling down a distance
 * @function GoToTop
 * @returns {JSX} back to top button
 */
const GoToTop = () => {
  const { theme } = useTheme()
  // The back-to-top button is hidden at the beginning
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true)
      } else {
        setShowButton(false)
      }
    })
    return () => setShowButton(false)
  }, [])
    
  // This function will scroll the window to the top 
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smoothly scrolling
    })
  }
  
  return (
    <>       
      {showButton && (
        <ToTopButton theme={theme} onClick={scrollToTop} src={upArrow} alt="" title="Back To Top"/>
      )}
  </>
  )
}

export default GoToTop