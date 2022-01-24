import PropTypes from 'prop-types'
// for styling
import styled from 'styled-components'
import colors from '../utils/style/colors'

const TechImg = styled.img`   
    background: ${colors.Zircon};
    padding: 5px;
    border-radius: 5px;
    width: 2rem;
    height:  2rem;
    margin: 0.5rem;
`;

/**
 * Renders Individual "techIcons" for the projects
 * @function Tech
 * @param {array} icons: icons (react, JavaScript, etc...)
 * @returns {JSX}
 */
const Tech = ( { icons } ) => {

    return (
        <>
            {( icons || []).map((icon) => ( 
                 <TechImg src={icon} alt='' title=""/>
            ))}  
        </>
    )
}

export default Tech

// Prototypes
Tech.propTypes = {
    techIcons: PropTypes.array,
}
  