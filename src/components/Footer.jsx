import { Link} from 'react-router-dom'
import PropTypes from 'prop-types'
// for styling
import styled from 'styled-components'
import colors from '../utils/style/colors'
import { useTheme } from '../utils/Functions/theme'
// import fade-in keyframe
import { fadeIn } from '../utils/style/keyframes'
// import Tooltip component
import Tooltip from './ToolsTips/ToolTip'
// import logos
import logoM from '../assets/logos/logoM.png'
import git from '../assets/icons/github.svg'
import linkedIn from '../assets/icons/linked_in.svg'
import contact from '../assets/icons/contact.svg'
// import 'other' website & email links
import { gitLink, linkedInLink, mail } from '../assets/data/additionalData'

/**
 * CSS for component using styled.components
 */
const FOOTER = styled.footer`
  align-items: center;
  animation: ${fadeIn} 1s 200ms both ease-in-out;
  background: ${colors.secondary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 1rem;
  padding: 1rem 0rem;
  position: relative;

  h2 {
    font-weight: 500;
    color: ${colors.primary};
    font-family: 'Vladimir', 'comfortaa';
    font-size: clamp(1.5rem, 1.6vw, 2rem);
    margin: 0 0 0.5rem;
  }
`;

const LogosWrapper = styled.span`
  @media screen and (min-width: 768px) {
    position: absolute;
    right: 1.25rem;
  }
`;

const LogoMark = styled.img`
  width: 3.2rem;
`;

const LinkImg = styled.img`
  filter: invert(100%) sepia(0%) saturate(2%) hue-rotate(342deg) brightness(105%) contrast(101%);
  margin: 1rem 1.9rem;
  width: 2rem;

  @media screen and (min-width: 768px) {
    margin: 1rem;
  }
`;

const NightModeButton = styled.button`
    background-color: transparent;
    border: none;
    color: ${({ theme }) => (theme === 'light' ? `${colors.tertiary}` : `${colors.primary}`)};  
    cursor: pointer;
    font-family: 'comfortaa';
    font-size: 1.2rem;
`;

/**
 * Renders Footer on each page
 * @function Footer
 * @param {object} siteText: either FR/EN
 * @returns {JSX}
 */
const Footer = ( { siteText } ) => {

  const { rights } = siteText.footer
  const { toggleTheme, theme } = useTheme()

  return (
    <FOOTER theme={theme}>

        <Link to="/"><LogoMark src={logoM} alt="Link to home page" /></Link>

        <LogosWrapper>
          <a href={gitLink} aria-label="Link to Github Repository" rel="noreferrer" target="_blank">
            <Tooltip content="GitHub">
              <LinkImg src={git} alt="Link to Github" />
            </Tooltip>
          </a>

          <a href={linkedInLink} aria-label="Link to LinkedIn" rel="noreferrer" target="_blank">
            <Tooltip content="LinkedIn">
              <LinkImg src={linkedIn} alt="Link to Linked in"/>
            </Tooltip>
          </a>

          <a href={mail} aria-label="Link to contact email" rel="noreferrer" target="_blank">
            <Tooltip content="Email">
              <LinkImg src={contact} alt="Contact Email"/>
            </Tooltip>
          </a>
        </LogosWrapper>

        <h2>{rights}</h2>

        <NightModeButton theme={theme} onClick={() => toggleTheme()}>
                Change mode :  {theme === 'light' ? '☀️' : '🌙'}
        </NightModeButton>
    </FOOTER>
  )
}

export default Footer

// Prototypes
Footer.propTypes = {
  siteText: PropTypes.object.isRequired,

}