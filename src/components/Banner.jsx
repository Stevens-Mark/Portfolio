import PropTypes from 'prop-types'
// for styling
import styled from 'styled-components'
import colors from '../utils/style/colors'

/**
 * CSS for component using styled.components
 */
 const BannerImg = styled.img`
  width: 100%;
  height: 100%;
  max-width: 1240px;
  max-height: 13.938rem;
  min-height: 6.938rem; 
  border-radius: clamp(0.625rem, 1.736vw, 1.563rem);
  filter: brightness(70%); 
  object-fit: cover;  
  box-shadow: 0px 4px 12px 3px ${colors.shadow};
`;

/**
 * Renders banner at top of Home/About page
 * @function Banner
 * @param {string}  image: image for the banner
 * @param {string}  alternate: the alternative text for the image
 * @returns {JSX}
 */
const Banner = ( {image, alternate} ) => {
  return (
    <BannerImg src={image} alt={alternate}/>
  )
}

export default Banner

// Prototypes
Banner.propTypes = {
  image: PropTypes.string.isRequired,
  alternate: PropTypes.string.isRequired,
}
