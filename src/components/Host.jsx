import { Component } from 'react'
import PropTypes from 'prop-types'
import '../styles/HostDetails.css'
import DefaultPicture from '../assets/images/profile.png'

/**
 * Renders Host details in accomodation anouncement
 * @function Host
 * @extends Component
 * @param {string} props hostData.name: hosts name
 * @param {string} props hostData.picture: hosts photograph
 * @returns {JSX}
 */
export default class Host extends Component {

    render() {
       
        return (
        <div className='hostWrapper'>
            <h2 className='hostTitle'>{this.props.hostData.name || " "}</h2>
            <img className='hostPhoto' src={this.props.hostData.picture || DefaultPicture} alt={this.props.hostData.name || " "}/>
        </div>
        )
    }
}

// Prototypes
Host.propTypes = {
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
  }

  Host.defaultProps = {
    name: '',
    picture: DefaultPicture,
}