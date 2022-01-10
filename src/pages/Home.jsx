import { useEffect } from 'react'
import PropTypes from 'prop-types'
// for styling
import styled from 'styled-components'
// import components
import Hero from '../components/Hero'
import Card from '../components/Card'

/**
 * CSS for component using styled.components
 */
 const HomeWrapper = styled.main`
  display: flex;
  flex-direction: column;
  // align-items: center;
`;

const PortFolioWrapper = styled.div`
  margin-top: 1.25rem;
  // max-width: 1240px;
  border-radius: 1.563rem;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;

  @media screen and (min-width: 670px) {
    background: #F6F6F6;
    margin-top: 2.5rem;
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
    <HomeWrapper>
      <Hero />
      <PortFolioWrapper>
          {siteData.map((data) => ( 
                <Card key={data.id} id={data.id} title={data.title} cover={data.cover}/> 
          ))}         
      </PortFolioWrapper>
  </HomeWrapper>
  )
}

export default Home

Home.propTypes = {
  siteData: PropTypes.array.isRequired,
}
