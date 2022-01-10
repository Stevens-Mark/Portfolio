import logo from '../assets/logos/react_logo.svg'
import styled, { keyframes } from 'styled-components'

/**
 * Keyframe for Spinning React Logo component
 */
 const AppLogoSpin = keyframes`
 from {
   transform: rotate(0deg);
 }

 to {
   transform: rotate(360deg);
 }
`;

/**
 * CSS for the ReactSpinner component
 */

const SpinnerWrapper = styled.div`
  position: absolute;
`;

const LogoImg = styled.img`
height: 30vmin;
pointer-events: none;
animation: ${AppLogoSpin} infinite 20s linear;   
`;

/**
 * Renders a spinning react logo
 * @function ReactSpinner
 * @returns {JSX}
 */
const ReactSpinner = () => {
  return (
      <SpinnerWrapper>
        <LogoImg src={logo} alt="Spinning react logo" />
      </SpinnerWrapper>
  )
}

export default ReactSpinner;