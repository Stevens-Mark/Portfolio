import { Link} from 'react-router-dom'
import PropTypes from 'prop-types'
// for styling
import styled from 'styled-components'
import colors from '../utils/style/colors'
import { useTheme } from '../utils/Functions/theme'
// import fade-in keyframe
import { fadeIn } from '../utils/style/keyframes'
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
  animation: ${fadeIn} 1s 200ms both ease-in-out;
  background: ${({ theme }) => (theme === 'light' ? `${colors.secondary}` : `${colors.mainBackgroundDarkMode}`)};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-top: 1rem;
  padding: 1rem 0rem;

  p {
    font-family: 'Vladimir', 'comfortaa';
    font-size: clamp(1.5rem, 1.6vw, 2rem);
    margin: 0.5rem;
    color: ${colors.primary};
  }
`;

const LogosWrapper = styled.span`
  @media screen and (min-width: 768px) {
    position: absolute;
    right: 1.25rem;
  }
`;

const LogoMark = styled.img`
  width: 4.2rem;
`;

const LinkImg = styled.img`
  width: 2rem;
  margin: 1rem 1.9rem;
  filter: invert(100%) sepia(0%) saturate(2%) hue-rotate(342deg) brightness(105%) contrast(101%);

  @media screen and (min-width: 768px) {
    margin: 1rem;
  }
`;

const NightModeButton = styled.button`
    background-color: transparent;
    font-family: 'comfortaa';
    font-size: 1.2rem;
    border: none;
    cursor: pointer;
    color: ${({ theme }) => (theme === 'light' ? `${colors.tertiary}` : `${colors.primary}`)};  
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
          <a href={gitLink} rel="noreferrer" target="_blank"><LinkImg src={git} alt="" title="Git Repo" /></a>
          <a href={linkedInLink} rel="noreferrer" target="_blank"><LinkImg src={linkedIn} alt="" title="Linked In"/></a>
          <a href={mail} rel="noreferrer" target="_blank"><LinkImg src={contact} alt="" title="Contact Me"/></a>
        </LogosWrapper>

        <p>{rights}</p>

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