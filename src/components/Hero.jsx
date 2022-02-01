import PropTypes from 'prop-types'
// styling
import styled from 'styled-components'
import colors from '../utils/style/colors'
import { useTheme } from '../utils/Functions/theme'
// import keyframes for component animations
import { fadeIn, scaleRotate, yTranslate } from '../utils/style/keyframes'
// import components
import ReactSpinner from'../components/ReactSpinner'
// import author's photograph
import author from '../assets/images/mark.webp'

/**
 * CSS for the component using styled.components
 */
const HeroContainer = styled.section`
  align-items: center;
  animation: ${fadeIn} 1s forwards ease-in-out;
  background-image: url(${({ backImg }) => backImg});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  filter: ${({ theme }) => (theme === 'light' ? 'brightness(100%)' : 'brightness(85%)')};
  height: 18.75rem;
  justify-content: center;
  position: relative;
  
  @media (min-width: 1440px) {
    height: 25rem;
  }
`;

const HeroContent = styled.article`
  // background: ${({ theme }) => (theme === 'light' ? `${colors.primary}` : `${colors.mainBackgroundDarkMode}`)};

  background: ${({ theme }) => (theme === 'light' ? 'linear-gradient(200deg, rgba(19,154,154,1) 21%, rgba(51,204,204,1) 79%)' : 'linear-gradient(45deg, rgba(79,76,107,1) 0%, rgba(47,46,65,1) 48%)')};

  border-radius: 0.313rem;
  padding: 0.5rem;
  width: 13rem;
  z-index: 1;

  @media (min-width: 500px) {
    padding: 1rem;
    width: 18.5rem;
  }
  @media (min-width: 1024px) {
    padding: 1.5rem;
    position: absolute;
    right: 3.125rem;
    width: 18.75rem;
  }
`;

const HeroSubtitle = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0.1rem;

  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }
`;

const HeroText = styled.p`
  font-size: 0.9rem;
  margin-bottom: 0;

  @media (min-width: 1024px) {
    font-size: 1.2rem;
  }
`;

// About Hero Banner
const AboutTitleWrappper = styled.div`
  display: block;
  background: ${colors.mainBackgroundDarkMode};
  border-radius: 0.313rem;
  height: 6.25rem;;
  overflow: hidden;
  position: absolute;
  transform: scale(1) rotate(0deg);
  transition: transform 330ms ease-in-out;
  width: 6.25rem;
  animation: ${scaleRotate} 380ms backwards ease-in-out 500ms;

  h2 {
    animation: ${yTranslate} 330ms both ease-out 550ms;
    font-size: 2.5rem;
    text-align: center;
    transform: translateY(-4px);
    transition: transform 280ms ease-out 50ms;
  }

  @media (min-width: 500px) {
    transform: scale(0) rotate(-90deg);
    h2 {
      transform: translateY(250%);
    }
  }
  @media (min-width: 600px) {
    display: none;
  }
`;

const ImgWrapper = styled.div`
  background: ${colors.mainBackgroundDarkMode};
  background: linear-gradient(-45deg, rgba(0,51,153,1) 0%, rgba(0,0,51,1) 70%);
  border-radius: 0.313rem;
  display: none;
  padding: 1rem;
  width: 10rem;
  z-index: 1;
  

  @media (min-width: 500px) {
    animation: ${fadeIn} 1.5s forwards ease-in-out;
    display: block;
    text-align: center;
    width: 14rem;
  }
  @media (min-width: 1024px) {
    position: absolute;
    right: 3.125rem;
  }
  @media (min-width: 1440px) {
    padding: 1.5rem;
    width: 15rem;
  }
`;

const Author = styled.img`
  border-radius: 50%;
  height: 9.375rem;
  width: 9.375rem;

  @media (min-width: 500px) {
    height: 12.5rem;
    width:  12.5rem;
  }
  @media (min-width: 1440px) {
    height: 13.75rem;
    width: 13.75rem;
  }
`;

/**
 * Renders Hero Banner on Home & About pages
 * @function Hero
 * @param {string} image: path to image for the background
 * @param {object} siteText(optional): site text for Home page Hero FR/EN 
 * @param {string} about: text for About page hero 'mobile'  version heading FR/EN
 * @returns {JSX}
 */
const Hero = ( { image, siteText={}, about={} } ) => {

  const { theme } = useTheme()
  const { title, subtitle1, subtitle2, subtitle3, slogan } = siteText.hero || []

  return (
    <>
      {window.location.pathname !=='/about'? 
        (
          <HeroContainer backImg={image} theme={theme}>   
            <ReactSpinner />
              <HeroContent theme={theme} >
                  <h2>{title}</h2>
                  <HeroSubtitle>{subtitle1}</HeroSubtitle>
                  <HeroSubtitle>{subtitle2}</HeroSubtitle>
                  <HeroSubtitle>{subtitle3}</HeroSubtitle>
                  <HeroText>{slogan}</HeroText> 
              </HeroContent>
          </HeroContainer> 
        ) : 
        (
          <HeroContainer backImg={image} theme={theme}> 

          <AboutTitleWrappper>
            <h2>{about}</h2>
            </AboutTitleWrappper>
              <ImgWrapper theme={theme} >  
                <Author src={author} alt="Author's photograph"/> 
              </ImgWrapper>
          </HeroContainer>
        )
      }
    </>
    )
}

export default Hero

// Prototypes
Hero.propTypes = {
  image: PropTypes.string.isRequired,
  siteText: PropTypes.object,
  about: PropTypes.string,
}


