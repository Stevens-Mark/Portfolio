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
 * @param {string} image: path to image for the background
 * @param {object} siteText: site text in FR/EN language
 * @returns {JSX}
 */
const Hero = ( { image, siteText } ) => {

  const { theme } = useTheme()
  const { title, subtitle1, subtitle2, subtitle3, slogan } = siteText.hero

  return (
    <HeroContainer backImg={image} theme={theme}>
      
        <h1 className="sr-only">Mark Stevens - Welcome</h1>
        <ReactSpinner />

        <HeroContent theme={theme} >
          <h2>{title}</h2>
          <HeroSubtitle>{subtitle1}</HeroSubtitle>
          <HeroSubtitle>{subtitle2}</HeroSubtitle>
          <HeroSubtitle>{subtitle3}</HeroSubtitle>
          <HeroText>{slogan}</HeroText>
        </HeroContent>

    </HeroContainer>
    )
}

export default Hero

// Prototypes
Hero.propTypes = {
  image: PropTypes.string.isRequired,
  siteText: PropTypes.object.isRequired,
}
