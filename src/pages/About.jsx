import { useEffect } from 'react'
// for styling
import styled from 'styled-components'
import colors from '../utils/style/colors'
// import components
import Banner from '../components/Banner'
import DropDown from '../components/DropDown'
import aboutBanner from '../assets/images/aboutBanner.jpg'
// import data
import { dropDownList} from '../assets/data/aboutDropdownData.js'

/**
 * CSS for component using styled.components
 */
const AboutWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AboutBanner = styled.div`
  display: flex;
  align-items: center;
  height: 13.938rem;
  border-radius: clamp(0.625rem, 1.736vw, 1.563rem);
  box-shadow: 0px 4px 12px 3px ${colors.shadow};

  h1 {
    border: 0;
    clip: rect(0, 0, 0, 0);
    height: 1px;
    margin: -1px;
    padding: 0px;
    border: 0px;
    white-space: nowrap;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
`;

/**
 * Renders About page
 * @function About
 * @param {string} aboutBanner: image for the banner from file
 * @param {array} dropDownList: content for dropdown list from file
 * @returns {JSX}
 */
const About = () => {
 
  useEffect(() => {
    document.title = 'Mark Stevens - About'
  }, [])

  return ( 
    <AboutWrapper>
      <AboutBanner>
        <Banner image={aboutBanner} alternate='A Mountain Scene'/>
        <h1 className='sr-only'>A Propos</h1>
      </AboutBanner>     
        {dropDownList.map((data) => (
        <DropDown key={data.id} dropdownWidth='DropdownAboutPage' dropdownHeight='dropDownListAbout' title={data.title} content={data.content}/>
        ))}   
    </AboutWrapper>
  )
}

export default About