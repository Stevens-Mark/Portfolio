import { Component } from "react"
import PropTypes from 'prop-types'
import solidStar from '../assets/images/red_solid_star.svg'
import clearStar from '../assets/images/clear_solid_star.svg'
import '../styles/Ratings.css'
 
/**
 * Renders Host "star" rating
 * @function Ratings
 * @extends Component
 * @param {number} props ratingNumber: a number between 1 & 5 for the host's rating
 * @returns {JSX}
 */
export default class Ratings extends Component {

    render() { 
        const {ratingNumber} = this.props
        const range = [1, 2, 3, 4, 5]

	return (
		<div className='ratingsWrapper'>
			{range.map((rangeElem) =>
				ratingNumber >= rangeElem ? (
					<img className='star' key={rangeElem.toString()} src={solidStar} alt='' />
				) : <img className='star' key={rangeElem.toString()} src={clearStar} alt='' />
			)}
		</div>
		)
	}
}

// Prototypes
Ratings.propTypes = {
	ratingNumber: PropTypes.oneOf(['1', '2', '3', '4', '5']).isRequired,
}
  