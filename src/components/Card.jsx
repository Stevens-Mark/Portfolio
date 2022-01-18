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
  }
`;


const ProjectHeading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LinkImg = styled.img`
  // width: 1.563rem;
  width: clamp(1rem, 1.6vw, 1.4rem);
  margin: 0px 5px;
`;

const NoLink = styled.img`
  // width: 1.563rem;
  width: clamp(1rem, 1.6vw, 1.4rem);
  margin: 0px 5px;
  filter: invert(57%) sepia(0%) saturate(4%) hue-rotate(266deg) brightness(88%) contrast(89%);
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

// text trunacted if needed
const SummaryText = styled.h3`
  font-size: clamp(0.9rem, 1vw, 1rem);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
  @media screen and (min-width: 668px) {
    -webkit-line-clamp: 1;
  }
`;

const DescriptionText = styled.p`
  color: ${colors.darkGrey};
  font-size: clamp(0.8rem, 1vw, 0.9rem);
  text-align: justify;
  text-justify: inter-word;
`;


/**
 * Individual announcement card for each project on Home page
 * @function Card
 * @param {string} id: of project
 * @param {object} data: for an individual project
 * @returns {JSX}
 */
const Card = ( { data } ) => {

  const { theme } = useTheme()

  let { id, title,  cover, summary, description, tags, website, github} = data

  return (
    <ProjectCard theme={theme}>
      <ProjectHeading>
        <h2>{title}</h2>
        <span>
          {website ?
              (<a href={website} rel="noreferrer" target="_blank"><LinkImg src={preview} alt="" title="Visit Website"/></a>) : 
              (<NoLink src={preview} alt="" title="No Preview"/>)}

          {github ?
              (<a href={github} rel="noreferrer" target="_blank"><LinkImg src={git} alt="" title="Project Git Repo" /></a>) : 
              (<NoLink src={git} alt="" title="No Project Repo"/>)}   
        </span>
      </ProjectHeading>

        <Link to={`/project/${id}`}>
          <CoverImage src={cover} alt='Cover'/>
          {(tags).map((tag) => ( <TagForm key={tag}>{tag} </TagForm> ))}
          <SummaryText className="test">{summary}</SummaryText>
          <DescriptionText >{description}</DescriptionText>
        </Link> 


    </ProjectCard>
  )
}

export default Card

// Prototypes
Card.propTypes = {
  data: PropTypes.object.isRequired,


}
