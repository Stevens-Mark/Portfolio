import { useEffect } from 'react'
// for styling
import styled from 'styled-components'
import colors from '../utils/style/colors'
// import fade-in keyframe
// import { fadeIn } from '../utils/style/keyframes'
// import components

import aboutHero from '../assets/images/banner5.jpg'
import DropDown from '../components/DropDown'
import { dropDownList } from '../assets/data/aboutDropdownData.js'
import Hero from '../components/Hero'

/**
 * CSS for component using styled.components
 */
// const AboutWrapper = styled.div`
//   animation: ${fadeIn} 1s forwards ease-in-out;
//   // min-height: calc(100vh - 12.5rem);
//   align-items: center;
//   display: flex;
//   flex-direction: column;
//   min-height: 85vh;
// `;

const AboutBanner = styled.div`

  // align-items: center;
  // display: flex;
  // height: 13.938rem;
  // border-radius: clamp(0.625rem, 1.736vw, 1.563rem);
  // box-shadow: 0px 4px 12px 3px ${colors.shadow};
`;

/**
 * Renders About page
 * @function About
 * @param {string} aboutBanner: image for the banner from file
 * @param {array} dropDownList: content for dropdown list from file
 * @returns {JSX}
 */
const About = ( { siteText } ) => {
 
  useEffect(() => {
    document.title = 'Mark Stevens - About'
    window.scrollTo(0, 0)
  }, [])

  return ( 
      <main role="main">
          <h1 className="sr-only">Mark Stevens - About</h1>
          <Hero image={aboutHero} about={siteText.about}/>
       
                
        <AboutBanner>
        
        
          </AboutBanner>     
            {/* {dropDownList.map((data) => (
            <DropDown key={data.id} dropdownWidth='DropdownAboutPage' dropdownHeight='dropDownListAbout' dropdownColor='' title={data.title} content={data.content} />
            ))}    */}
      
      </main>
  )
}

export default About