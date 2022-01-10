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
 const HomeWrapper = styled.main`
  display: flex;
  flex-direction: column;
`;

const PortFolioWrapper = styled.div`
  margin-top: 1.25rem;
  // max-width: 1240px;
  // border-radius: 1.563rem;
  display: flex;
  flex-flow: row wrap;
  // justify-content: spac-between;
  background: ${colors.primary};
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
    <HomeWrapper>
      <Hero />
      <PortFolioWrapper>
          {siteData.map((data) => ( 
                <Card key={data.id} id={data.id} title={data.title} summary={data.summary} cover={data.cover} tags={data.tags} website={data.website} github={data.github}/> 
          ))}         
      </PortFolioWrapper>
  </HomeWrapper>
  )
}

export default Home

Home.propTypes = {
  siteData: PropTypes.array.isRequired,
}
