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
  animation: ${fadeIn} 1s both ease-in-out;
  color: ${colors.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-family: Vladimir script;
    font-size: clamp(6rem, 10vw, 17rem);
    font-weight: 700;
    margin: 5.2rem 0rem;
  }

  p {
    font-family: Vladimir script;
    font-size: clamp(2rem, 4vw, 4rem);
    font-weight: 500;
    margin-bottom: 5rem;
    text-align: center;
  }
`;

const ReturnLink = styled(Link)`
  color: ${colors.primary};
  font-size: clamp(0.875rem, 1.5vw, 1.375rem);
  text-decoration: underline;
  font-weight: 500;
  margin-bottom: 2rem;
`;

/**
 * Renders Under Construction message 
 * @function Construction
<<<<<<< HEAD
 * @returns {JSX}
 */
const Construction = () => {
=======
 * @param {object} siteText: either FR/EN
 * @returns {JSX}
 */
const Construction = ( { siteText } ) => {

  const { title, message, linkText } = siteText.construction
>>>>>>> multi
  
  useEffect(() => {
    document.title = 'Mark Stevens - Under Construction'
    window.scrollTo(0, 0)
  }, [])

  return (
      <ConstructionWrapper>
<<<<<<< HEAD
        <h1>Oups!</h1>
        <p>En construction : il apparaîtra dans le futur...</p>
        <ReturnLink to="/">Retourner sur la page d’accueil</ReturnLink>
=======
        <h1>{title}</h1>
        <p>{message}</p>
        <ReturnLink to="/">{linkText}</ReturnLink>
>>>>>>> multi
      </ConstructionWrapper>
  )
}

export default Construction

