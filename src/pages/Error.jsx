import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
// for styling
import styled from 'styled-components'
import colors from '../utils/style/colors'
// import fade-in keyframe
import { fadeIn } from '../utils/style/keyframes'

/**
 * CSS for component using styled.components
 */
const ErrorWrapper = styled.main`
  align-items: center;
  animation: ${fadeIn} 1s both ease-in-out;
  color: ${colors.primary};
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-family: 'Vladimir', 'comfortaa';
    font-size: clamp(6rem, 10vw, 17rem);
    font-weight: 700;
    margin: 5.2rem 0rem;
  }

  h2 {
    font-family: 'Vladimir', 'comfortaa';
    font-size: clamp(2rem, 4vw, 4rem);
    font-weight: 500;
    margin-bottom: 5rem;
    text-align: center;
  }
`;

const ReturnLink = styled(Link)`
  color: ${colors.primary};
  font-size: clamp(0.875rem, 1.5vw, 1.375rem);
  font-weight: 500;
  margin-bottom: 2rem;
  text-align: center;
  text-decoration: underline;
`;

/**
 * Renders Error message  (if necessary)
 * @function Error
 * @param {object} siteText: either FR/EN
 * @returns {JSX}
 */
const Error = ( { siteText } ) => {
  
  const { code, message, linkText } = siteText.error

  useEffect(() => {
    document.title = 'Mark Stevens - Page not found'
    window.scrollTo(0, 0)
  }, [])

  return (
      <ErrorWrapper>
        <h1>{code}</h1>
        <h2>{message}</h2>
        <ReturnLink to="/">{linkText}</ReturnLink>
      </ErrorWrapper>
  )
}

export default Error

// Prototypes
Error.propTypes = {
  siteText: PropTypes.object.isRequired,
}