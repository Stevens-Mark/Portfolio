import { Link} from 'react-router-dom'
// for styling
import styled from 'styled-components'
import colors from '../utils/style/colors'
import { useTheme } from '../utils/Functions/theme'
// import fade-in keyframe
import { fadeIn } from '../utils/style/keyframes'
// import logos
import logoM from '../assets/logos/logoM.png'
import git from '../assets/icons/tech/github.svg'
import linkedIn from '../assets/icons/linked_in.svg'
import contact from '../assets/icons/contact.svg'
// import links
import { gitLink, linkedInLink, mail } from '../assets/data/linkData' 

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
  padding: 0.5rem 0rem;

  p {
    font-family: Vladimir script;
    font-size: clamp(0.75rem, 1.5vw, 2rem);
    margin: 0.2rem;
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
  width: clamp(1.2rem, 2.2vw, 2rem);
  margin-bottom: 0.1rem;
`;

const LinkImg = styled.img`
  width: clamp(1.2rem, 2vw, 2rem);
  margin: 0rem 0.625rem;
  filter: invert(100%) sepia(0%) saturate(2%) hue-rotate(342deg) brightness(105%) contrast(101%);
`;

const NightModeButton = styled.button`
    background-color: transparent;
    font-family: 'comfortaa';
    font-size: clamp(0.6rem, 0.9vw, 0.9rem);
    border: none;
    cursor: pointer;
    color: ${({ theme }) => (theme === 'light' ? `${colors.tertiary}` : `${colors.primary}`)};  
`;

/**
 * Renders Footer on each page
 * @function Banner
 * @returns {JSX}
 */
const Footer = () => {
  
  const { toggleTheme, theme } = useTheme()

  return (
    <FOOTER theme={theme}>

        <Link to="/"><LogoMark src={logoM} alt="Link to home page" /></Link>

        <LogosWrapper>
          <a href={gitLink} rel="noreferrer" target="_blank"><LinkImg src={git} alt="" title="Git Repo" /></a>
          <a href={linkedInLink} rel="noreferrer" target="_blank"><LinkImg src={linkedIn} alt="" title="Linked In"/></a>
          <a href={mail} rel="noreferrer" target="_blank"><LinkImg src={contact} alt="" title="Contact Me"/></a>
        </LogosWrapper>

        <p>© 2022 All rights reserved</p>

        <NightModeButton theme={theme} onClick={() => toggleTheme()}>
                Change mode :  {theme === 'light' ? '☀️' : '🌙'}
        </NightModeButton>

    </FOOTER>
  )
}

export default Footer