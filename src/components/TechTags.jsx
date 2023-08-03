import PropTypes from 'prop-types'
// for styling
import styled from 'styled-components'
import colors from '../utils/style/colors'
// import fade-in keyframe
import { fadeIn } from '../utils/style/keyframes'
// import Tooltip component
import Tooltip from './ToolsTips/ToolTip'
// import list of icon paths
import { techIconList } from '../assets/data/additionalData'

const TechImg = styled.img`  
    background: ${colors.Zircon};
    border-radius: 0.313rem;
    margin: 0.2rem;
    padding: 0.313rem;
    width: 50%;
    max-width: 2rem;
    aspect-ratio: 1/1;

    animation: ${fadeIn} 1.5s both ease-in-out 1s;
    transition: 0.4s;
    &:hover {
      transform: scale(1.2);
    }

    @media (min-width: 1050px) {
      margin: 0.5rem;
    }
`;

/**
 * Renders Individual "techIcons" for the projects
 * @function TechTags
 * @param {array} icons: (react, JavaScript, etc...)
 * @returns {JSX}
 */
const TechTags = ( { icons=[] } ) => {

    const iconToShow = techIconList.filter(icon => icons.includes(icon.id))

    return (
        <>
            {( iconToShow  || []).map((icon) => ( 
                <Tooltip key={icon.id} content={icon.alt}>
                 <TechImg  src={icon.path} alt={icon.alt}/>
                 </Tooltip>
            ))}  
        </>
    )
}

export default TechTags

// Prototypes
TechTags.propTypes = {
    icons: PropTypes.array,
}
  