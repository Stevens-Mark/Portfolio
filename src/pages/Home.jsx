import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
// for styling
import styled from 'styled-components'
import { useTheme } from '../utils/Functions/theme'
// import components
import Hero from '../components/Hero'
import Card from '../components/Card'
import GoToTop from '../utils/Functions/GoToTop'
import heroImg from '../assets/images/banner4.webp'
import ASC from '../assets/icons/ascending.svg'
import DESC from '../assets/icons/descending.svg'

/**
 * CSS for component using styled.components
 */
const PortFolioWrapper = styled.section`
  background: ${({ theme }) => (theme === 'light' ? 'linear-gradient(45deg, rgba(148,191,224,1) 0%, rgba(51,204,204,1) 42%);' : 'linear-gradient(0deg, rgba(79,76,107,1) 0%, rgba(47,46,65,1) 48%)')};
  margin-top: 0.25rem;
  padding: 2rem 0rem;
  position: relative;
  
  @media screen and (min-width: 668px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
  }
  @media screen and (min-width: 1080px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media screen and (min-width: 1670px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

const Sort = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  margin-top: 0.5rem;
  position: absolute;
  right: 1rem;
  top: 0;

  img {
    filter: ${({ theme }) => (theme === 'light' ? '' : 'invert(65%) sepia(100%) saturate(341%) hue-rotate(127deg) brightness(91%) contrast(83%);')};
    width: 1.563rem;
  }
`;

/**
* Home page template
 * @function Home
 * @param {object} siteData: all data for the site
 * @returns {JSX}
 */
const Home = ( { siteData } ) => {

  const { theme } = useTheme()
  const projects = siteData.projects
  const [data, setData] = useState(projects)
  const [desc, setDesc] = useState(true)

  useEffect(() => {
    document.title = 'Mark Stevens - Home'
    window.scrollTo(0, 0)
  }, [])

  const HandleSort = () => {    // ascending/descending order function
    setDesc(!desc)
    const sorted = desc ? [...projects].sort((a, b) => (a.date > b.date ? -1 : 1)) : [...projects].sort((a, b) => (a.date < b.date ? -1 : 1))
    setData(sorted)
  }

  return (
    <main role="main">
      <h1 className="sr-only">Mark Stevens - Welcome</h1>
      <Hero image={heroImg} siteText={siteData.siteText}/>

      <PortFolioWrapper theme={theme}>                    {/* ascending/descending order button */}
        <Sort theme={theme} aria-label="Sort by date"
              onClick={() => HandleSort()}>{desc? <img src={DESC} alt='descending'/> : <img src={ASC} alt='ascending'/>}</Sort>

          <h2 className="sr-only">Portfolio</h2>
            {data.map((project) => ( 
                  <Card key={project.id} project={project}/> 
            ))}   
      </PortFolioWrapper>

      <GoToTop />     {/* button to scroll go back to top */}
    </main>
  )
}

export default Home

// Prototypes
Home.propTypes = {
  siteData: PropTypes.object.isRequired,
}
