// styling
import styled from 'styled-components'
import colors from '../utils/style/colors'
// hero banner background
import heroImg from '../assets/images/banner4.jpg'
import ReactSpinner from'../components/ReactSpinner'
/**
 * CSS for the component using styled.components
 */
const HeroContainer = styled.section`
  background-image: url(${heroImg});
  // background-position: 0 -50px;
  background-size: cover;
  background-repeat: no-repeat;
  height: 18.75rem;
  position: relative;
  
  @media (min-width: 920px) {
    height: 25rem;
    // background-position: 0% 33%;
  }
`;

const HeroContent = styled.article`
  position: relative;
  top: 1rem;
  z-index: 1;
  width: 12.5rem;
  background: ${({ theme }) => (theme === 'light' ? `${colors.tertiary}` : `${colors.mainBackgroundDarkMode}`)};
  padding: 1.5rem;
  // text-align: left;
  margin: 0 auto;

  @media (min-width: 920px) {
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
 * @returns {JSX}
 */
const Hero = () => {

  return (
    <HeroContainer>
        {/* <h1 className="sr-only">Argent Bank - Welcome</h1> */}
        <ReactSpinner />

        <HeroContent>
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


