import { Link} from 'react-router-dom'
import PropTypes from 'prop-types'
// for styling
import styled from 'styled-components'
import colors from '../utils/style/colors'

/**
 * CSS for component using styled.components
 */
const ProjectCard = styled.article`
  border-radius: 0.625rem;
  height: 255px;
  margin: 1.25rem 0rem;
  flex: 1 1 355px;
  transition: 0.4s;
  &:hover {
    opacity: 0.85;
    filter: brightness(100%);
    box-shadow: 0 2px 4px rgba(0, 0, 0, .8);
    transition: 0.4s;
  }

  @media screen and (min-width: 670px) {
    height: 275px;
    margin: 1.25rem;
    flex: 1 1 275px;
    /* max-width: 275px; */
  } 
  
  @media screen and (min-width: 1150px) {
    height: 340px;
    flex: 1 1 340px;
    /* max-width: 340px; */
  }

  h2 {
    color: ${colors.tertiary};
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 500;
    position: relative;
    bottom: 4rem;
    margin: 0.625rem;
  }
`;

const CoverImage = styled.img`
  filter: brightness(95%);
  object-fit: cover;
  border-radius: 0.625rem;
  height: 100%;
  width: 100%; 
  opacity: 1;
`;

/**
 * Individual announcement card for each project on Home page
 * @function Card
 * @param {string} id: used for the route
 * @param {string} title: title for the project anouncement card
 * @param {string} cover: cover photo of the project anouncement card
 * @returns {JSX}
 */
const Card = ( {id, title, cover} ) => {

  return (
    <ProjectCard>
      <Link to={`/project/${id}`}>
        <CoverImage src={cover} alt='Cover'/>
        <h2>{title}</h2>
      </Link> 
    </ProjectCard>
  )
}

export default Card

Card.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
}
