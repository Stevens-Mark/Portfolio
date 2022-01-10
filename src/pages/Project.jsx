import { useParams } from 'react-router'
import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
// for styling
import styled from 'styled-components'
import colors from '../utils/style/colors'
// import components
import LoadingIcon from '../utils/Loaders/MiniLoadingIcon'
import Carousel from '../components/Carousel'
import Host from '../components/Host'
import Tags from '../components/Tags'
import DropDown from '../components/DropDown'
import Ratings from '../components/Ratings'
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
  max-width: 1240px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
`;

const ProjectHeader = styled.div`
  display: block;
  color: ${colors.primary};
  margin-top: 1rem;

  @media screen and (min-width: 660px) {
    display: flex;
    justify-content: space-between;
    margin-top: 1.875rem;
  }

  h1 {
    font-weight: 500;
    font-size: clamp(1.125rem, 2.5vw, 2.25rem);
    margin: unset;
    /* margin-top: 0.938rem; */
  }

  p {
    margin: unset;
    margin-top: 5px;
    font-weight: 500;
    font-size: clamp(0.875rem, 1.2vw, 1.125rem);
    // @media screen and (min-width: 660px) {
    //   margin-top: 1.25rem;
    // }
  }
`;

const HostSummary = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row-reverse;
  
  @media screen and (min-width: 660px) {
    display: block;
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
                    <Carousel photoAlbum={data.pictures}/>
                    <ProjectHeader>

                        <div>
                            <h1>{data.title}</h1>
                            <p>{data.location}</p> 
                            <Tags tagData={data.tags} />
                        </div>

                        <HostSummary>
                            <Host hostData={data.host} />
                            <Ratings ratingNumber={data.rating}/>
                        </HostSummary>
                    </ProjectHeader>   

                    <Details>
                        <DropDown dropdownWidth='DropdownAccomPage' dropdownHeight='dropDownListAccomodation' title={'Description'} content={data.description}/>
                        <DropDown dropdownWidth='DropdownAccomPage' dropdownHeight='dropDownListAccomodation'  title={'Skills'} content={data.skills}/>
                    </Details>

                  </ProjectWrapper>                   
              </main>
          )
        }
}

export default Project

Project.propTypes = {
  siteData: PropTypes.array.isRequired,
}


