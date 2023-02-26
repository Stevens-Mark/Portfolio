
import { NavLink } from 'react-router-dom'
// for styling
import styled from 'styled-components'
import colors from '../utils/style/colors'
import { fadeIn } from '../utils/style/keyframes'
// import logo & language flags
import logo from '../assets/logos/mark_logo.webp'
import linkedIn from '../assets/icons/linked_in.svg'
import contact from '../assets/icons/contact.svg'
// import 'other' website & email links
import { linkedInLink, mail } from '../assets/data/additionalData'

/**
 * CSS for the component using styled.components
 */

const Banner = styled.div`
  animation: ${fadeIn} 3s forwards ease-in-out;
  background: ${colors.secondary};
  box-shadow: 0 2px 4px rgba(0, 0, 0, .8);
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  height: 3.8rem;
  padding: 1rem 1.563rem;
`;

const Image = styled.img`
  width: clamp(9rem, 13vw, 14rem);
  padding: 0vw 1.5vw;
`;

const LinkImg = styled.img`
  filter: invert(100%) sepia(0%) saturate(2%) hue-rotate(342deg) brightness(105%) contrast(101%);
  margin: 1rem 0.5rem;
  width: clamp(1.4rem, 5vw, 2rem);
`;

/**
 * Renders 'Hidden' Banner under moving navbar as white page
 * appears sometimes on mobile devices when navbar 'stays' up position
 * @function HiddenBanner
 * @returns {JSX}
 */
const HiddenBanner = () => {

  return (
    <Banner>
      <NavLink to="/"><Image src={logo} alt="Link to Home"></Image></NavLink>
      <div>
        <a href={linkedInLink} aria-label="Link to LinkedIn" rel="noreferrer" target="_blank">
          <LinkImg src={linkedIn} alt="Link to Linked in"/>
        </a>

        <a href={mail} aria-label="Link to contact email" rel="noreferrer" target="_blank">
          <LinkImg src={contact} alt="Contact Email"/> 
        </a>
      </div>
    </Banner>
    )
}

export default HiddenBanner

