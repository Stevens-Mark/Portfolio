import { useParams } from 'react-router'
import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
// for styling
import styled from 'styled-components'
import colors from '../utils/style/colors'
import { useTheme } from '../utils/Functions/theme'
// import fade-in keyframe
import { fadeIn } from '../utils/style/keyframes'
// import components
import LoadingIcon from '../utils/Loaders/MiniLoadingIcon'
import Carousel from '../components/Carousel'
import TechIcons from '../components/Tech'
import GoToTop from '../utils/Functions/GoToTop'
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
  animation: ${fadeIn} 1s both ease-in-out;
  background: ${({ theme }) => (theme === 'light' ? `${colors.primary}` : `${colors.darkModeHighlights}`)};
  display: flex;
  flex-direction: column;
  margin: auto;
`;

const Overview = styled.div`
  margin-top: 1rem;
  color: ${colors.secondary};
  @media screen and (min-width: 900px) {
    display: flex;
    flex-direction: row-reverse;
    // align-items: center;
  }
`;

const LeftSide = styled.div`
  flex: 2;
`;

const RightSide = styled.div`
  animation: ${fadeIn} 1.5s 300ms both ease-in-out;
  flex: 1;
  text-align: center;
`;

const Texte = styled.div`
  margin: 1rem;
  flex: 1;
  color: ${({ theme }) => (theme === 'light' ? `${colors.secondary}` : `${colors.primary}`)};

  h1 {
    font-size: clamp(1.125rem, 2.5vw, 2.25rem);
  }
  h2 {
    font-size: clamp(1rem, 1.6vw, 1.5rem);
  }
  p, li {
    margin: 10px 0px;
    color: ${({ theme }) => (theme === 'light' ? `${colors.darkGrey}` : `${colors.Zircon}`)};
    text-align: justify;
    text-justify: inter-word;
    font-size: clamp(0.875rem, 1.2vw, 1.125rem);
    white-space: pre-line;
  }
`;
// white-space: pre-line used in conjunction with control character such as \n 
// to format the text on the page.

const Details = styled.div`
  display: flex;
  flex-direction: column;
  
  @media screen and (min-width: 600px) {
    flex-direction: row;
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

  const { theme } = useTheme()

  const [data, setData] = useState('')
  const [isLoading, setLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  // Get ID from URL param
  const idUrl = useParams().id

  useEffect(() => {
    document.title = 'Mark Stevens - Project'
    window.scrollTo(0, 0)
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
          <ProjectWrapper theme={theme}>    
            <Overview>
              <RightSide>
                <Carousel photoAlbum={data.pictures}/>
                <TechIcons icons={data.techIcons} /> 
              </RightSide>

              <LeftSide>
                <Texte theme={theme}>
                  <h1>{data.title}</h1>
                  <p>{data.scenario}</p>
                </Texte>

                <Texte theme={theme}>
                  <h2>Fonctionnalités</h2>
                  <ul>{data.functionality.map((func, index) => (
                    <li key={`func-${index}`}>{func}</li> ))}
                  </ul> 
                </Texte>
              </LeftSide>     
            </Overview> 

            <Details>
                <Texte theme={theme}>
                  <h2>Contraints</h2>
                  <ul>{data.constraints.map((constraint, index) => (
                    <li key={`cons-${index}`}>{constraint}</li> ))}
                  </ul>
                </Texte>

                <Texte theme={theme}>
                <h2>Skills</h2>
                <ul>{data.skills.map((skill, index) => (
                  <li key={`${skill}-${index}`}>{skill}</li> ))}
                </ul>  
              </Texte>
            </Details>
            
              {data.notes?  
                <Texte theme={theme}>
                  <h2>Notes</h2>
                  <p>{data.notes}</p>
                </Texte>
              : null 
              }            
          </ProjectWrapper>  
          <GoToTop />                 
        </main>
      )
    }
}

export default Project

// Prototypes
Project.propTypes = {
  siteData: PropTypes.array.isRequired,
}


