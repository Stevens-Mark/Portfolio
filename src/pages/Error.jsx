import { useEffect } from 'react'
import { Link } from 'react-router-dom'
// for styling
import styled from 'styled-components'
import colors from '../utils/style/colors'

/**
 * CSS for component using styled.components
 */
const ErrorWrapper = styled.main`
  align-items: center;
  color: ${colors.styledText};
  display: flex;
  flex-direction: column;

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
 color: ${colors.styledText};
 font-size: clamp(0.875rem, 1.5vw, 1.375rem);
 font-weight: 500;
 margin-bottom: 2rem;
`;

/**
 * Renders Error message  (if necessary)
 * @function Error
 * @returns {JSX}
 */
const Error = () => {
  
  useEffect(() => {
    document.title = 'Mark Stevens - Page not found'
  }, [])

  return (
    <ErrorWrapper>
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <ReturnLink to="/">Retourner sur la page d’accueil</ReturnLink>
    </ErrorWrapper>
  )
}

export default Error

