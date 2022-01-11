import { Link} from 'react-router-dom'
import PropTypes from 'prop-types'
// for styling
import styled from 'styled-components'
import colors from '../utils/style/colors'
import { useTheme } from '../utils/Functions/theme'
// import fade-in keyframe
import { fadeIn } from '../utils/style/keyframes'
// import link logos
import preview from '../assets/icons/preview.svg'
import git from '../assets/icons/github.svg'

/**
 * CSS for component using styled.components
 */
const ProjectCard = styled.article`
  animation: ${fadeIn} 2s forwards ease-in-out;
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
    font-weight: 500;
  }
`;

const ProjectHeading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LinkImg = styled.img`
  width: 1.563rem;
  width: clamp(1rem, 1.6vw, 1.4rem);
  margin: 0px 5px;
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
 padding: 1px 8px;
`;

const SummaryText = styled.h3`
  font-weight: 500;
  font-size: clamp(0.9rem, 1vw, 1rem);
`;

const ScenarioText = styled.p`
  font-weight: 500;
  font-size: clamp(0.9rem, 1vw, 0.8rem);
  text-align: justify;
  // text-justify: inter-word;
`;


/**
 * Individual announcement card for each project on Home page
 * @function Card
 * @param {string} id: used for the route
 * @param {string} title: title
 * @param {string} cover: cover photo 
 * @param {array} tags: project tags
 * @param {string} website: project website
 * @param {string} github: project repo
 * @returns {JSX}
 */
const Card = ( {id, title,  cover, summary, scenario, tags, website, github} ) => {

  const { theme } = useTheme()

  return (
    <ProjectCard theme={theme}>
      <ProjectHeading>
        <h2>{title}</h2>
        <span>
          <a href={website} rel="noreferrer" target="_blank"><LinkImg src={preview} alt="" title="Visit Website"/></a>
          <a href={github} rel="noreferrer" target="_blank"><LinkImg src={git} alt="" title="Project's Repo" /></a>
        </span>
      </ProjectHeading>

        <Link to={`/project/${id}`}>
          <CoverImage src={cover} alt='Cover'/>
          {(tags).map((tag) => ( <TagForm key={tag}>{tag} </TagForm> ))}
          <SummaryText>{summary}</SummaryText>
          <ScenarioText>{scenario}</ScenarioText>
        </Link> 
    </ProjectCard>
  )
}

export default Card

// Prototypes
Card.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  website: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
}
