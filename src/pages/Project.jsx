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
import TechIcons from '../components/TechTags'
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
<<<<<<< HEAD
  // min-height: 85vh;
  // min-height: calc(100vh - 12.5rem);
=======
>>>>>>> multi
`;

const ProjectWrapper = styled.div`
  animation: ${fadeIn} 1s both ease-in-out;
  color: ${({ theme }) => (theme === 'light' ? `${colors.secondary}` : `${colors.primary}`)};
  background: ${({ theme }) => (theme === 'light' ? `${colors.primary}` : `${colors.darkModeHighlights}`)};
  display: flex;
  flex-direction: column;
  margin: auto;
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

const NightDayFilter = styled.span`
  filter: ${({ theme }) => (theme === 'light' ? '' : 'invert(65%) sepia(100%) saturate(341%) hue-rotate(127deg) brightness(91%) contrast(83%);')};
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
<<<<<<< HEAD
    margin: 10px 0px;
=======
    margin: 0.625rem 0rem;
>>>>>>> multi
    color: ${({ theme }) => (theme === 'light' ? `${colors.darkGrey}` : `${colors.Zircon}`)};
    text-align: justify;
    text-justify: inter-word;
    font-size: clamp(0.875rem, 1.2vw, 1.125rem);
<<<<<<< HEAD
    white-space: pre-line; 
=======
    white-space: pre-line;              // used with \n\n in JSON to format text on the page.
>>>>>>> multi
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
 * @param {array} siteData: all the site data FR/EN
 * @returns {JSX}
 */
const Project = ( { siteData } ) => {

<<<<<<< HEAD
=======
  const projects = siteData.projects
>>>>>>> multi
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
<<<<<<< HEAD
    const projectToShow = siteData.find((room) => room.id === idUrl)
=======
    const projectToShow = projects.find((room) => room.id === idUrl)
>>>>>>> multi
    if (projectToShow) {
          setData(projectToShow)
          setLoading(false)
          setIsError(false)
      }
      else {
        setLoading(false)
        setIsError(true)
      }
<<<<<<< HEAD
  }, [idUrl, siteData])

  const { title, pictures, description, functionality, constraints, notes, skills, techIcons, website, github} = data
=======
  }, [idUrl, projects])

  // extract project data & headings
  const { title, pictures, description, functionality, constraints, notes, skills, techIcons, website, github } = data
  const { subheading1, subheading2, subheading3, subheading4 } = siteData.siteText.projectPage
>>>>>>> multi

  return (
    <>
      {isLoading ? <LoadingWrapper><LoadingIcon /></LoadingWrapper> : 
      <>
        {isError ? <Error /> :  
          <>     
            <main>
              <ProjectWrapper theme={theme}>  
<<<<<<< HEAD
=======

>>>>>>> multi
                  <Heading>
                    <h1>{title}</h1>
                    <NightDayFilter theme={theme}>
                      <Links website={website} github={github} />
                    </NightDayFilter>
                  </Heading>
<<<<<<< HEAD
=======

>>>>>>> multi
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
<<<<<<< HEAD
                      <h2>Fonctionnalités</h2>
=======
                      <h2>{subheading1}</h2>
>>>>>>> multi
                      <ListCreate group='functionality' data={functionality}/>
                    </Texte>
                  </LeftSide>

                </Overview> 

                <Details>
                    <Texte theme={theme}>
<<<<<<< HEAD
                      <h2>Contraints</h2>
=======
                      <h2>{subheading2}</h2>
>>>>>>> multi
                      <ListCreate group='constraints' data={constraints}/>
                    </Texte>

                    <Texte theme={theme}>
<<<<<<< HEAD
                      <h2>Compétences</h2>
                      <ListCreate group='skills' data={skills}/>
                  </Texte>
                </Details>

                  {notes?  
                    <Texte theme={theme}>
                      <h2>Notes</h2>
=======
                      <h2>{subheading3}</h2>
                      <ListCreate group='skills' data={skills}/>
                  </Texte>
                </Details>
                      {/* If no notes added then don't show heading */}
                  {notes?       
                    <Texte theme={theme}>
                      <h2>{subheading4}</h2>
>>>>>>> multi
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
  siteData: PropTypes.object.isRequired,
}


