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
import Links from '../components/Links'
import Carousel from '../components/Carousel'
import TechIcons from '../components/Tech'
import GoToTop from '../utils/Functions/GoToTop'
import ListCreate from '../components/ListCreate'
import Error from './Error'

/**
 * CSS for component using styled.components
 */
const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  // min-height: 85vh;
  // min-height: calc(100vh - 12.5rem);
`;

const ProjectWrapper = styled.div`
  animation: ${fadeIn} 1s both ease-in-out;
  color: ${({ theme }) => (theme === 'light' ? `${colors.secondary}` : `${colors.primary}`)};
  background: ${({ theme }) => (theme === 'light' ? `${colors.primary}` : `${colors.darkModeHighlights}`)};
  display: flex;
  flex-direction: column;
  margin: auto;
  // min-height: calc(100vh - 12.5rem);
  min-height: 85vh;
`;

const Heading = styled.div`

  padding: 0rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: clamp(1.5rem, 2.1vw, 2rem);
  }
`;

const Overview = styled.div`
  margin-top: 1rem;

  @media screen and (min-width: 900px) {
    display: flex;
    flex-direction: row-reverse;
  }
`;

const LeftSide = styled.div`
  flex: 2;
`;

const RightSide = styled.div`
  animation: ${fadeIn} 1.5s 300ms both ease-in-out;
  flex: 1.3;
  text-align: center;
`;

const Texte = styled.div`
  margin: 1rem;
  flex: 1;

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
// white-space: pre-line used with \n to format text on the page.

const Details = styled.div`
  display: flex;
  flex-direction: column;
  
  @media screen and (min-width: 900px) {
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

  const idUrl = useParams().id   // Get ID from URL param

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

  const { title, pictures, description, functionality, constraints, notes, skills, techIcons, website, github} = data

  return (
    <>
      {isLoading ? <LoadingWrapper><LoadingIcon /></LoadingWrapper> : 
      <>
        {isError ? <Error /> :  
          <>     
            <main>
              <ProjectWrapper theme={theme}>  
                  <Heading>
                    <h1>{title}</h1>
                    <span>
                      <Links website={website} github={github} />
                    </span>
                  </Heading>
                <Overview>
                  
                  <RightSide>
                    <Carousel photoAlbum={pictures}/>
                    <TechIcons icons={techIcons} />
                  </RightSide>

                  <LeftSide> 
                    <Texte theme={theme}>

                      <p>{description}</p>
                    </Texte>

                    <Texte theme={theme}>
                      <h2>Fonctionnalités</h2>
                      <ListCreate group='functionality' data={functionality}/>
                    </Texte>
                  </LeftSide>

                </Overview> 

                <Details>
                    <Texte theme={theme}>
                      <h2>Contraints</h2>
                      <ListCreate group='constraints' data={constraints}/>
                    </Texte>

                    <Texte theme={theme}>
                      <h2>Compétences</h2>
                      <ListCreate group='skills' data={skills}/>
                  </Texte>
                </Details>

                  {notes?  
                    <Texte theme={theme}>
                      <h2>Notes</h2>
                      <p>{notes}</p>
                    </Texte>
                  : null 
                  }            
              </ProjectWrapper>  
              <GoToTop />                 
            </main>   
          </>
          }
      </>
      }   
    </>
  )
}

export default Project

// Prototypes
Project.propTypes = {
  siteData: PropTypes.array.isRequired,
}


