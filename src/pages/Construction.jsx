import { useEffect } from 'react'
import { Link } from 'react-router-dom'
// for styling
import styled from 'styled-components'
import colors from '../utils/style/colors'
// import fade-in keyframe
import { fadeIn } from '../utils/style/keyframes'

/**
 * CSS for component using styled.components
 */
const ConstructionWrapper = styled.main`
  align-items: center;
  animation: ${fadeIn} 1s both ease-in-out;
  color: ${colors.primary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: 'Vladimir', 'comfortaa';

  h1 {
    font-size: clamp(6rem, 10vw, 17rem);
    font-weight: 700;
    margin: 5.2rem 0rem;
  }

  p {
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
  text-decoration: underline;
`;

/**
 * Renders Under Construction message 
 * @function Construction
 * @param {object} siteText: either FR/EN
 * @returns {JSX}
 */
const Construction = ( { siteText } ) => {

  const { title, message, linkText } = siteText.construction
  
  useEffect(() => {
    document.title = 'Mark Stevens - Under Construction'
    window.scrollTo(0, 0)
  }, [])

  return (
      <ConstructionWrapper>
        <h1>{title}</h1>
        <p>{message}</p>
        <ReturnLink to="/">{linkText}</ReturnLink>
      </ConstructionWrapper>
  )
}

export default Construction

