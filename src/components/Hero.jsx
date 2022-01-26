import PropTypes from 'prop-types'
// styling
import styled from 'styled-components'
import colors from '../utils/style/colors'
import { useTheme } from '../utils/Functions/theme'
// import fade-in keyframe
import { fadeIn } from '../utils/style/keyframes'
// hero banner background
import heroImg from '../assets/images/banner4.jpg'
import ReactSpinner from'../components/ReactSpinner'

/**
 * CSS for the component using styled.components
 */
const HeroContainer = styled.section`
  animation: ${fadeIn} 1s forwards ease-in-out;
  // background-image: url(${heroImg});
  background-image: url(${({ backImg }) => backImg});
  background-size: cover;
  background-repeat: no-repeat;
  height: 18.75rem;
  position: relative;
  filter: ${({ theme }) => (theme === 'light' ? 'brightness(100%)' : 'brightness(85%)')};

  @media (min-width: 920px) {
    height: 25rem;
  }
`;

const HeroContent = styled.article`
  position: relative;
  top: 3rem;
  z-index: 1;
  width: 13rem;
  border-radius: 0.313rem;
  background: ${({ theme }) => (theme === 'light' ? `${colors.primary}` : `${colors.mainBackgroundDarkMode}`)};
  padding: 0.5rem;
  margin: 0 auto;

  @media (min-width: 500px) {
    padding: 1rem;
    width: 18.5rem;
  }
  @media (min-width: 920px) {
    padding: 1.5rem;
    position: absolute;
    top: 2rem;
    right: 3.125rem;
    width: 18.75rem;
    margin: 2rem;
  }
`;

const HeroSubtitle = styled.p`
  font-weight: bold;
  font-size: 1rem;
  margin: 0;

  @media (min-width: 920px) {
    font-size: 1.5rem;
  }
`;

const HeroText = styled.p`
  margin-bottom: 0;
  font-size: 0.9rem;

  @media (min-width: 920px) {
    font-size: 1.2rem;
  }
`;

/**
 * Renders Hero Banner on Homepage
 * @function Hero
 * @package {string} image: path to image for the background
 * @returns {JSX}
 */
const Hero = ( { image } ) => {

  const { theme } = useTheme()

  return (
    <HeroContainer backImg={image} theme={theme}>
      
        <h1 className="sr-only">Mark Stevens - Welcome</h1>
        <ReactSpinner />

        <HeroContent theme={theme} >
          <h2>Développeur Front-end</h2>
          <HeroSubtitle>Fiabilité.</HeroSubtitle>
          <HeroSubtitle>Respect.</HeroSubtitle>
          <HeroSubtitle>Loyauté.</HeroSubtitle>
          <HeroText>Toujours prêt à apprendre !</HeroText>
        </HeroContent>

    </HeroContainer>
    )
}

export default Hero

// Prototypes
Hero.propTypes = {
  image: PropTypes.string,
}
