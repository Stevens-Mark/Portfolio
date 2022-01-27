import PropTypes from 'prop-types'
// for styling
import styled from 'styled-components'
import colors from '../utils/style/colors'

const TagWrapper = styled.div`
    display: flex;
    margin-top: 0.625rem;
    align-items: center;

    h3 {
        font-size: clamp(0.625rem, 1vw, 0.875rem);
        font-style: normal;
        font-weight: 500;
        text-align: center;
        color: ${colors.tertiary};
        // background: ${colors.primary};
        background: ${props => props.color ? props.color : `${colors.primary}`};
<<<<<<< HEAD
        padding: 5px;
=======
        padding: 0.313rem;
>>>>>>> multi
        width: clamp(6rem, 9.8vw, 11rem);
        border-radius: 0.625rem;
        margin-right: 0.625rem;
        box-shadow: 0px 4px 12px 3px ${colors.shadow};
    }
`;

/**
 * Renders Individual "tags" for the projects
 * @function Tags
 * @param {array} tagData: tags (react, JavaScript, etc...)
 * @param {string} tagColor: defiines color of tag
 * @returns {JSX}
 */
const Tags = ( {tagData, tagColor} ) => {

    return (
        <TagWrapper color={tagColor}>
            {(tagData || []).map((tag) => ( 
                <h3 key={tag}>{tag}</h3>
            ))}  
        </TagWrapper>
    )
}

export default Tags

// Prototypes
Tags.propTypes = {
    tagData: PropTypes.array,
    tagColor: PropTypes.string,
}
  