import { useParams } from 'react-router'
import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
// for styling
import styled from 'styled-components'
import colors from '../utils/style/colors'
import { useTheme } from '../utils/Functions/theme'
// import fade-in keyframe
import { fadeIn, slideIn, slideInRight } from '../utils/style/keyframes'
// import components
import LoadingIcon from '../utils/Loaders/MiniLoadingIcon'
import Links from '../components/Links'
import Carousel from '../components/Carousel'
import TechIcons from '../components/TechTags'
import ListCreate from '../components/ListCreate'
import Error from './Error'

/**
 * CSS for component using styled.components
 */
const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProjectWrapper = styled.div`
  animation: ${fadeIn} 1s both ease-in-out;
  background: ${({ theme }) => (theme === 'light' ? 'linear-gradient(45deg, rgba(148,191,224,1) 0%, rgba(51,204,204,1) 42%);' : 'linear-gradient(0deg, rgba(79,76,107,1) 0%, rgba(47,46,65,1) 48%)')};
  color: ${({ theme }) => (theme === 'light' ? `${colors.secondary}` : `${colors.primary}`)};
  display: flex;
  flex-direction: column;
  margin: auto;
  min-height: 85vh;
`;

const Heading = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 0rem 1rem;
  overflow: hidden;

  h1 {
    font-size: clamp(1.5rem, 2.5vw, 2.25rem);
    animation: ${slideIn} 1s both ease-in-out 0.7s; 
  }

  img {
    width: clamp(1.5rem, 2.1vw, 2rem);
  }
`;

const NightDayFilter = styled.span`
  filter: ${({ theme }) => (theme === 'light' ? '' : 'invert(65%) sepia(100%) saturate(341%) hue-rotate(127deg) brightness(91%) contrast(83%);')};
  animation: ${slideIn} 1s both ease-in-out 0.7s;
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
  flex: 1.3;
  text-align: center;
`;

const Texte = styled.div`
  flex: 1;
  margin: 1rem;
  overflow: hidden;
  

  h2 {
    font-size: clamp(1rem, 1.6vw, 1.5rem);
    animation: ${slideIn} 1s both ease-in-out 0.7s; 
  }

  p, li {
    animation: ${slideInRight} 1.5s both ease-in-out; 
    color: ${({ theme }) => (theme === 'light' ? `${colors.darkGrey}` : `${colors.Zircon}`)};
    font-size: clamp(0.875rem, 1.2vw, 1.125rem);
    margin: 0.625rem 0rem;
    white-space: pre-line;             // used with \n\n in JSON to format text on the page.
    
  }
  p {
    // text-align: justify;
    // text-justify: inter-word;
  }
`;

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
 * @param {array} siteData: all the site data FR/EN
 * @returns {JSX}
 */
const Project = ( { siteData } ) => {

  const projects = siteData.projects
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
    const projectToShow = projects.find((room) => room.id === idUrl)
    if (projectToShow) {
          setData(projectToShow)
          setLoading(false)
          setIsError(false)
      }
      else {
        setLoading(false)
        setIsError(true)
      }
  }, [idUrl, projects])

  // extract project data & headings
  const { title, pictures, description, functionality, constraints, notes, skills, techIcons, website, github } = data
  const { subheading1, subheading2, subheading3, subheading4 } = siteData.siteText.projectPage

  return (
    <>
      {isLoading ? <LoadingWrapper><LoadingIcon /></LoadingWrapper> : 
      <>
        {isError ? <Error siteText={siteData.siteText} /> :  
          <>     
            <main role="main">
              <ProjectWrapper theme={theme}>  
                  <Heading>
                    <h1>{title}</h1>
                    <NightDayFilter theme={theme}>
                      <Links website={website} github={github} />
                    </NightDayFilter>
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
                      <h2>{subheading1}</h2>
                      <ListCreate group='functionality' data={functionality}/>
                    </Texte>
                  </LeftSide>

                </Overview> 

                <Details>
                    <Texte theme={theme}>
                      <h2>{subheading2}</h2>
                      <ListCreate group='constraints' data={constraints}/>
                    </Texte>

                    <Texte theme={theme}>
                      <h2>{subheading3}</h2>
                      <ListCreate group='skills' data={skills}/>
                  </Texte>
                </Details>
                      {/* If no notes added then don't show heading */}
                  {notes?       
                    <Texte theme={theme}>
                      <h2>{subheading4}</h2>
                      <p>{notes}</p>
                    </Texte>
                  : null 
                  }            
              </ProjectWrapper>                
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
  siteData: PropTypes.object.isRequired,
}


