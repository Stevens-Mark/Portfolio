import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
// for styling
import styled from 'styled-components'
import colors from '../utils/style/colors'
import { useTheme } from '../utils/Functions/theme'
// import fade-in keyframe
import { fadeIn } from '../utils/style/keyframes'
// import github, website links components
import Links from './Links'

/**
 * CSS for component using styled.components
 */
const ProjectCard = styled.article`
  animation: ${fadeIn} 2s both ease-in-out;
  background: ${({ theme }) => (theme === 'light' ? `${colors.tertiary}` : `${colors.tertiary}`)};
  border-radius: 0.313rem;
  border: 1px solid ${colors.secondary};
  color: ${colors.secondary};
  filter: ${({ theme }) => (theme === 'light' ? 'brightness(100%)' : 'brightness(85%)')};
  margin: 1rem;
  padding: 0.938rem;
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
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

const CoverImage = styled.img`
  // object-fit: cover;
  margin-bottom: 5px;
  max-height: 300px;
  width: 100%; 
`;

const TagForm = styled.span`
  background: ${colors.secondary};
  border-radius: 5px;
  color: ${colors.tertiary};
  font-size: 0.8rem;
  line-height: 1.5rem;
  margin: 2px;
  padding: 3px 8px;
`;

const ObjectiveText = styled.h3`    
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;    // text truncated if needed
  display: -webkit-box;
  font-size: clamp(0.9rem, 1vw, 1rem);
  overflow: hidden;
  text-overflow: ellipsis;
  
  @media screen and (min-width: 668px) {
    -webkit-line-clamp: 1;
  }
`;

const SummaryText = styled.p`
  color: ${colors.darkGrey};
  font-size: clamp(0.8rem, 1vw, 0.9rem);
  // text-align: justify;
  // text-justify: inter-word;
`;

/**
 * Individual announcement card for each project on Home page
 * @function Card
 * @param {object} project: data for an individual project
 * @returns {JSX}
 */
const Card = ( { project } ) => {

  const { theme } = useTheme()
  const { id, title, cover, objective, summary, tags, website, github} = project

  return (
    <ProjectCard theme={theme}>
      
      <ProjectHeading>
        <h2>{title}</h2>
        <span>
          <Links website={website} github={github} />
        </span>
      </ProjectHeading>

        <Link to={`/project/${id}`}>
          <CoverImage src={cover} alt='Website screen shot'/>
          <div>
            {(tags).map((tag) => ( 
                <TagForm key={tag}>{tag} </TagForm> ))}
          </div>
          <ObjectiveText>{objective}</ObjectiveText>
          <SummaryText>{summary}</SummaryText>
        </Link> 

    </ProjectCard>
  )
}

export default Card

// Prototypes
Card.propTypes = {
  project: PropTypes.object.isRequired,
}
