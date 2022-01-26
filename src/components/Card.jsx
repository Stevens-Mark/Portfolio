import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
// for styling
import styled from 'styled-components'
import colors from '../utils/style/colors'
import { useTheme } from '../utils/Functions/theme'
// import fade-in keyframe
import { fadeIn } from '../utils/style/keyframes'
// import link components
import Links from './Links'

/**
 * CSS for component using styled.components
 */
const ProjectCard = styled.article`
  animation: ${fadeIn} 2s both ease-in-out;
  border: 1px solid ${colors.secondary};
  background: ${({ theme }) => (theme === 'light' ? `${colors.tertiary}` : `${colors.tertiary}`)};
  filter: ${({ theme }) => (theme === 'light' ? 'brightness(100%)' : 'brightness(85%)')};
  color: ${colors.secondary};
  border-radius: 0.313rem;
  padding: 0.938rem;
  margin: 1rem;
  transition: 0.4s;
  &:hover {
    filter: brightness(100%);
    box-shadow: 0 2px 4px rgba(0, 0, 0, .8);
  }

  h2 {
    font-size: 1.2rem;
  }
`;

const ProjectHeading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CoverImage = styled.img`
  // object-fit: cover;
  max-height: 300px;
  width: 100%; 
  margin-bottom: 5px;
`;

const TagForm = styled.span`
  font-size: 0.8rem;
  background: ${colors.primary};
  color: ${colors.tertiary};
  border-radius: 5px;
  margin: 2px;
  padding: 3px 8px;
`;

const ObjectiveText = styled.h3`    
  font-size: clamp(0.9rem, 1vw, 1rem);
  display: -webkit-box;
  -webkit-line-clamp: 2;    // text trunacted if needed
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
  
  @media screen and (min-width: 668px) {
    -webkit-line-clamp: 1;
  }
`;

const SummaryText = styled.p`
  color: ${colors.darkGrey};
  font-size: clamp(0.8rem, 1vw, 0.9rem);
  text-align: justify;
  text-justify: inter-word;
`;

/**
 * Individual announcement card for each project on Home page
 * @function Card
 * @param {object} data: for an individual project
 * @returns {JSX}
 */
const Card = ( { data } ) => {

  const { theme } = useTheme()

  const { id, title, cover, objective, summary, tags, website, github} = data

  return (
    <ProjectCard theme={theme}>
      
      <ProjectHeading>
        <h2>{title}</h2>
        <span>
          <Links website={website} github={github} />
        </span>
      </ProjectHeading>

        <Link to={`/project/${id}`}>
          <CoverImage src={cover} alt='Cover'/>
          {(tags).map((tag) => ( 
              <TagForm key={tag}>{tag} </TagForm> ))}
          <ObjectiveText>{objective}</ObjectiveText>
          <SummaryText>{summary}</SummaryText>
        </Link> 

    </ProjectCard>
  )
}

export default Card

// Prototypes
Card.propTypes = {
  data: PropTypes.object.isRequired,
}
