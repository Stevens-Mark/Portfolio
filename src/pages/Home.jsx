import { useEffect } from 'react'
import PropTypes from 'prop-types'
// for styling
import styled from 'styled-components'
import colors from '../utils/style/colors'
// import components
import Hero from '../components/Hero'
import Card from '../components/Card'

/**
 * CSS for component using styled.components
 */
const PortFolioWrapper = styled.div`
  margin-top: .25rem;
  padding: 1rem 0rem;
  background: ${colors.primary};
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
const Home = ( {siteData} ) => {

  useEffect(() => {
    document.title = 'Mark Stevens - Home'
  }, [])

  return (
    <main>
      <Hero />
      <PortFolioWrapper>
          {siteData.map((data) => ( 
                <Card key={data.id} id={data.id} title={data.title} summary={data.summary} cover={data.cover} tags={data.tags} website={data.website} github={data.github}/> 
          ))}         
      </PortFolioWrapper>
  </main>
  )
}

export default Home

// Prototypes
Home.propTypes = {
  siteData: PropTypes.array.isRequired,
}
