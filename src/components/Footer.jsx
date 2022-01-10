import { Link} from 'react-router-dom'
// for styling
import styled from 'styled-components'
import colors from '../utils/style/colors'
// import logo
import FooterLogo from '../assets/logos/mark_logo.png'

/**
 * CSS for component using styled.components
 */
const FOOTER = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 8rem;
  margin-top: 1rem;
  background: ${colors.secondary};
  
  img {
    margin-top: 0.5rem;
    width: 12rem;
  }

  p {
    font-size: clamp(0.75rem, 1.5vw, 2rem);
    font-family: Vladimir script;
    margin: unset;
    color: ${colors.primary};
  }
`;

/**
 * Renders Footer on each page
 * @function Banner
 * @returns {JSX}
 */
const Footer = () => {
  return (
    <FOOTER>
        <Link to="/"><img src={FooterLogo} alt="logo"></img></Link>
        <p>© 2022 Mark Stevens. All rights reserved</p>
    </FOOTER>
  )
}

export default Footer