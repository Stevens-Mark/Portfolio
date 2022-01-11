import styled from 'styled-components'
import PropTypes from 'prop-types'
// import stars
import solidStar from '../assets/images/red_solid_star.svg'
import clearStar from '../assets/images/clear_solid_star.svg'
 
/**
 * CSS for the component using styled.components
 */
 const RatingsWrapper = styled.div`
	text-align: right;
`;

const Star = styled.img`
	margin-top: 0.5rem;
	width: 1.25rem;
	
	@media screen and (min-width: 600px) {
		width: 1.875rem;
		margin-top: 0.938rem;
	}
	@media screen and (min-width: 1220px) {
		margin-top: 1.563rem;
	}
`;

/**
 * Renders Host "star" rating
 * @function Ratings
 * @param {number} props ratingNumber: a number between 1 & 5 for the host's rating
 * @returns {JSX}
 */
const Ratings = ( { ratingNumber } ) => {

	const range = [1, 2, 3, 4, 5]

	return (
		<RatingsWrapper>
			{range.map((rangeElem) =>
				ratingNumber >= rangeElem ? (
					<Star key={rangeElem.toString()} src={solidStar} alt='' />
				) : <Star key={rangeElem.toString()} src={clearStar} alt='' />
			)}
		</RatingsWrapper>
		)
}
export default Ratings

// Prototypes
Ratings.propTypes = {
	ratingNumber: PropTypes.oneOf(['1', '2', '3', '4', '5']).isRequired,
}
  