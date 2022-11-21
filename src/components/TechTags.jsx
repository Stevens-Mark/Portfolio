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
    height:  2rem;
    margin: 0.5rem;
    padding: 0.313rem;
    width: 2rem;
    animation: ${fadeIn} 1.5s both ease-in-out 1s;
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
  