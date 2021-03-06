// import colors from '../style/colors'
import styled from 'styled-components'
import colors from '../style/colors'
// import rotate keyframe
import { rotate } from '../style/keyframes'
import PropTypes from 'prop-types'

/**
 * CSS for the Loader component
 */
const Loader = styled.div`
  animation: ${rotate} 1s infinite linear;
  border-bottom-color: transparent;
  border-radius: 6.625rem;   
  border: 0.5rem solid ${props => props.primary ? '#fff' : `${colors.primary}` };
  padding: 0.938rem;
`;

/**
 * Renders a loading icon (either white or primary color of website)
 * @function LoadingIcon
 * @param {boolean} isWhite
 * @returns {JSX}
 */
const LoadingIcon = ( { isWhite } ) => {
  return (
    <>
      {isWhite ? ( 
        <Loader primary /> ) 
      : ( 
        <Loader /> 
      )}      
    </>
  )
}

export default LoadingIcon

// Prototypes
LoadingIcon.propTypes = {
  isWhite: PropTypes.bool,
}

