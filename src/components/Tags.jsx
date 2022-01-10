import PropTypes from 'prop-types'
import styled from 'styled-components'
import colors from '../utils/style/colors'

const TagWrapper = styled.div`
    display: flex;
    margin-top: 0.625rem;
    align-items: center;
    flex-wrap: wrap;
    white-space: nowrap;

    h3 {
        font-size: clamp(0.625rem, 1vw, 0.875rem);
        font-style: normal;
        font-weight: 500;
        text-align: center;
        color: #fff;
        background: ${colors.primary};
        padding: 5px;
        width: clamp(6rem, 9.8vw, 11rem);
        border-radius: 0.625rem;
        margin-right: 0.625rem;
        box-shadow: 0px 4px 12px 3px ${colors.shadow};
    }

    @media screen and (min-width: 680px) {
        margin-top: 1.563rem;
    }
    
    @media screen and (min-width: 1220px) {
        margin-top: 0.625rem;
    }

`;

/**
 * Renders Individual accomodation "tags"
 * @function Tags
 * @param {array} tagData: tags for the accomodation
 * @returns {JSX}
 */
const Tags = ( {tagData} ) => {
    
    return (
        <TagWrapper>
            {(tagData || []).map((tag) => ( 
                <h3 key={tag}>{tag}</h3>
            ))}  
        </TagWrapper>
    )
}

export default Tags

Tags.propTypes = {
    tagData: PropTypes.array.isRequired,
}
  