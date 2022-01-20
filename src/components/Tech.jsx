import PropTypes from 'prop-types'
// for styling
import styled from 'styled-components'
import colors from '../utils/style/colors'

const TechWrapper = styled.div`
    // display: flex;
    // margin-top: 0.625rem;
    // align-items: center;
    
    img {
        background: ${colors.Zircon};
        padding: 5px;
        border-radius: 5px;
        width: clamp(1.5rem, 2.1vw, 2rem);
        height:  2rem;
        margin: 0.5rem;
    }
`;

/**
 * Renders Individual "techIcons" for the projects
 * @function Tech
 * @param {array} icons: icons (react, JavaScript, etc...)
 * @returns {JSX}
 */
const Tech = ( { icons } ) => {

    return (
        <TechWrapper>
            {( icons || []).map((icon) => ( 
                 <img src={icon} alt='' title=""/>
            ))}  
        </TechWrapper>
    )
}

export default Tech

// Prototypes
Tech.propTypes = {
    techIcons: PropTypes.array.isRequired,
}
  