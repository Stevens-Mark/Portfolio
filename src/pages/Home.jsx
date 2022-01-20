import { useEffect } from 'react'
import PropTypes from 'prop-types'
// for styling
import styled from 'styled-components'
import colors from '../utils/style/colors'
import { useTheme } from '../utils/Functions/theme'
// import components
import Hero from '../components/Hero'
import Card from '../components/Card'
import Footer from '../components/Footer'
import GoToTop from '../utils/Functions/GoToTop'
import heroImg from '../assets/images/banner4.jpg'

/**
 * CSS for component using styled.components
 */
const PortFolioWrapper = styled.div`
  margin-top: .25rem;
  padding: 1rem 0rem;
  background: ${({ theme }) => (theme === 'light' ? `${colors.primary}` : `${colors.darkModeHighlights}`)};
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

/**
* Home page template
 * @function Home
 * @param {object} siteData: all data for the site
 * @returns {JSX}
 */
const Home = ( { siteData } ) => {
  
  const { theme } = useTheme()

  useEffect(() => {
    document.title = 'Mark Stevens - Home'
  }, [])
 
  return (
    <>
      <main>
        <Hero image={heroImg}/>
        <PortFolioWrapper theme={theme}>
            {siteData.map((data) => ( 
                  <Card key={data.id} data={data}/> 
            ))}   
        </PortFolioWrapper>
        <GoToTop />
      </main>
      <Footer />
    </>
  )
}

export default Home

// Prototypes
Home.propTypes = {
  siteData: PropTypes.array.isRequired,
}
