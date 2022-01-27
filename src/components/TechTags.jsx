import PropTypes from 'prop-types'
// for styling
import styled from 'styled-components'
import colors from '../utils/style/colors'
// import list of icon paths
import { techIconList } from '../assets/data/additionalData'

const TechImg = styled.img`   
    background: ${colors.Zircon};
<<<<<<< HEAD
    padding: 5px;
    border-radius: 5px;
=======
    padding: 0.313rem;
    border-radius: 0.313rem;
>>>>>>> multi
    width: 2rem;
    height:  2rem;
    margin: 0.5rem;
`;

/**
 * Renders Individual "techIcons" for the projects
 * @function TechTags
<<<<<<< HEAD
 * @param {array} icons: icons (react, JavaScript, etc...)
=======
 * @param {array} icons: (react, JavaScript, etc...)
>>>>>>> multi
 * @returns {JSX}
 */
const TechTags = ( { icons } ) => {

    const iconToShow = techIconList.filter(icon => icons.includes(icon.id))

    return (
        <>
            {( iconToShow  || []).map((icon) => ( 
                 <TechImg key={icon.id} src={icon.path} alt='' title={icon.title}/>
            ))}  
        </>
    )
}

export default TechTags

// Prototypes
TechTags.propTypes = {
    icons: PropTypes.array,
}
  