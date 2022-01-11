import { useEffect, useState } from 'react'
// for styling
import styled from 'styled-components'
import colors from '../style/colors'
import upArrow from '../../assets/icons/arrow_up.svg'

/**
 * CSS for component using styled.components
 */
const ToTopButton = styled.img`
  position: fixed;
  top:auto;
  bottom: 25px;
  right: 20px;
  width: clamp(1.5rem, 3.2vw, 2.5rem);
  padding: 3px;
  background: yellow;
  border: 2px solid ${colors.tertiary};
  cursor: pointer;
  border-radius: 40%;
  transition: 0.4s;
  &:hover {
    background: ${colors.primary};
`;

/**
* A go to top button appears after scrolling down a distance
 * @function GoToTop
 * @returns {JSX} back to top button
 */
const GoToTop = () => {

  // The back-to-top button is hidden at the beginning
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
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
        <ToTopButton onClick={scrollToTop} src={upArrow} alt="" title="Back To Top"/>
      )}
  </>
  )
}

export default GoToTop