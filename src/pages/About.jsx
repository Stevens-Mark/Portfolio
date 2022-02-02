import { useEffect } from 'react'
import PropTypes from 'prop-types'
// for styling
import styled from 'styled-components'
import colors from '../utils/style/colors'
import { useTheme } from '../utils/Functions/theme'
// import fade-in keyframe
import { fadeIn } from '../utils/style/keyframes'
// import components
import Hero from '../components/Hero'
import ListCreate from '../components/ListCreate'
import GoToTop from '../utils/Functions/GoToTop'
import aboutHero from '../assets/images/banner5.webp'

/**
 * CSS for component using styled.components
 */
const AboutWrapper = styled.div`
  animation: ${fadeIn} 1s both ease-in-out;
  background: ${({ theme }) => (theme === 'light' ? 'linear-gradient(45deg, rgba(148,191,224,1) 0%, rgba(51,204,204,1) 42%);' : 'linear-gradient(0deg, rgba(79,76,107,1) 0%, rgba(47,46,65,1) 48%)')};
  color: ${({ theme }) => (theme === 'light' ? `${colors.secondary}` : `${colors.primary}`)};
  display: flex;
  flex-direction: column;
  margin: auto;
  min-height: 85vh;
  margin-top: 0.25rem;
  padding: 1rem;
`;

const Overview = styled.div`
  @media screen and (min-width: 900px) {
    display: flex;
    flex-direction: row;
  }
`;

const InfoWrapper = styled.div`
  animation: ${fadeIn} 1.5s 300ms both ease-in-out;
  flex: 1;
  padding 0 0.5rem;
`;

const Texte = styled.div`
  margin-bottom: 0rem;

  h2 {
    font-size: clamp(1rem, 1.6vw, 1.5rem);
  }

  p, li {
    color: ${({ theme }) => (theme === 'light' ? `${colors.darkGrey}` : `${colors.Zircon}`)};
    font-size: clamp(0.875rem, 1.2vw, 1.125rem);
    margin: 0.625rem 0rem;
    white-space: pre-line;             // used with \n\n in JSON to format text on the page.
  }
 
  @media screen and (min-width: 900px) {
    margin-bottom: 4rem;
  }
`;

/**
 * Renders About page
 * @function About
 * @param {object} aboutText: data for about page FR/EN
 * @returns {JSX}
 */
const About = ( { aboutText } ) => {

  const { theme } = useTheme()
  const { about, subheading1, description, subheading2, motivations, subheading3, future, subheading4, skills } = aboutText

  useEffect(() => {
    document.title = 'Mark Stevens - About'
    window.scrollTo(0, 0)
  }, [])

  return ( 
    <main role="main">
      
        <h1 className="sr-only">Mark Stevens - About</h1>
        <Hero image={aboutHero} about={about}/>
      
        <AboutWrapper theme={theme}> 
        <Overview>

          <InfoWrapper>
              <Texte theme={theme}>
              <h2>{subheading1}</h2>
              <p>{description}</p>
            </Texte>
          </InfoWrapper>

          <InfoWrapper> 
            <Texte theme={theme}>
              <h2>{subheading2}</h2>
              <ListCreate group='motivations' data={motivations}/>
            </Texte>

            <Texte theme={theme}>
              <h2>{subheading3}</h2>
              <ListCreate group='future' data={future}/>
            </Texte>

            <Texte theme={theme}>
              <h2>{subheading4}</h2>
              <ListCreate group='skills' data={skills}/>
            </Texte>
          </InfoWrapper>

        </Overview> 
    </AboutWrapper>  
    <GoToTop />     {/* button to scroll go back to top */}
    </main>
  )
}

export default About

// Prototypes
About.propTypes = {
  aboutText: PropTypes.object.isRequired,
}