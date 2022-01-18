import { useParams } from 'react-router'
import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
// for styling
import styled from 'styled-components'
import colors from '../utils/style/colors'
// import components
import LoadingIcon from '../utils/Loaders/MiniLoadingIcon'
import Carousel from '../components/Carousel'
import Tags from '../components/Tags'
import DropDown from '../components/DropDown'
import Error from './Error'

/**
 * CSS for component using styled.components
 */
const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 85vh;
`;

const ProjectWrapper = styled.div`
  background: ${colors.primary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  
`;

const Overview = styled.div`
  // display: block;
  max-width: 1440px;
  margin: auto;
  margin-top: 1rem;
  color: ${colors.secondary};
  @media screen and (min-width: 660px) {
    display: flex;
    justify-content: space-between;
    // margin-top: 1.875rem;
  }
`;

const Texte = styled.div`
  margin: 10px;
  flex:1;

  h1 {
    font-size: clamp(1.125rem, 2.5vw, 2.25rem);
    margin: unset;
  }
  p {
    color: ${colors.darkGrey};
    text-align: justify;
    text-justify: inter-word;
    margin-top: 5px;
    font-size: clamp(0.875rem, 1.2vw, 1.125rem);
  }
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  
  @media screen and (min-width: 600px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 3.125rem;
  }
`;

/**
* Individual Project page template
* relevant project displayed based on ID extracted from Url params
 * @function Project
 * @param {array} siteData: all the site data
 * @returns {JSX}
 */
const Project = ( { siteData } ) => {

  const [data, setData] = useState('')
  const [isLoading, setLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  // Get ID from URL param
  const idUrl = useParams().id

  useEffect(() => {
    document.title = 'Mark Stevens - Project'
  }, [])

  useEffect(() => {
    const projectToShow = siteData.find((room) => room.id === idUrl)
    if (projectToShow) {
          setData(projectToShow)
          setLoading(false)
          setIsError(false)
      }
      else {
        setLoading(false)
        setIsError(true)
      }
  }, [idUrl, siteData])

      if (isLoading) return (  
        <main>   
          <LoadingWrapper>
            <LoadingIcon />
          </LoadingWrapper>
        </main> 
        ) 
      
        if (isError) 
          return <Error />
        
        else 
        {
          return (
              <main>
                  <ProjectWrapper>
                  
                    <Overview>
                      <Texte>
                        <h1>{data.title}</h1>
                        <p>{data.scenario}</p>
                      </Texte>
                      <Carousel photoAlbum={data.pictures}/>
                    </Overview> 



{/* EXPERIMENT - color are passed as parameters to change the colo of the drop downs */}
                    <Details>

                         <DropDown dropdownWidth='DropdownAccomPage' dropdownHeight='dropDownListAccomodation' dropdownColor={colors.darkGrey}  title={'Compétences'} content={data.skills}/>

                        <Tags tagData={data.tags} tagColor={colors.secondary} /> 
                    </Details>

                  </ProjectWrapper>                   
              </main>
          )
        }
}

export default Project

// Prototypes
Project.propTypes = {
  siteData: PropTypes.array.isRequired,
}


