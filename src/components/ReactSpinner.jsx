import logo from '../assets/logos/react_logo.svg'
import styled from 'styled-components'
// import rotate keyframe
import { rotate } from '../utils/style/keyframes'

/**
 * CSS for the ReactSpinner component
 */
const SpinnerWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 2.5rem;
`;

const LogoImg = styled.img`
  animation: ${rotate} infinite 20s linear;   
  pointer-events: none;
  width: clamp(7.5rem, 24.3vw, 21.875rem);
`;

/**
 * Renders a spinning react logo
 * @function ReactSpinner
 * @returns {JSX}
 */
const ReactSpinner = () => {
  return (
      <SpinnerWrapper>
        <LogoImg src={logo} alt="" />
      </SpinnerWrapper>
  )
}

export default ReactSpinner