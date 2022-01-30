import PropTypes from 'prop-types'
// for styling
import styled from 'styled-components'
// import link logos
import preview from '../assets/icons/preview.svg'
import git from '../assets/icons/github.svg'

/**
 * CSS for component using styled.components
 */
const LinkImg = styled.img`
  margin: 0px 5px;
  width: clamp(1rem, 1.6vw, 1.4rem);
`;

const NoLink = styled.img`
  filter: invert(57%) sepia(0%) saturate(4%) hue-rotate(266deg) brightness(88%) contrast(89%);
  margin: 0px 5px;
  width: clamp(1rem, 1.6vw, 1.4rem);
`;

/**
  * Links/icons to Github & Project websites
  * @function Links
  * @param {string} website: link to project webite
  * @param {string} github: link to project github repo 
  * @returns {JSX}
  */
const Links = ({ website, github }) => {
  return (
    <>
      {website ?
        ( <a href={website} aria-label="Link to project website" rel="noreferrer" target="_blank"><LinkImg src={preview} alt="Link to website" title="Visit Website"/></a>
        ) : 
        ( <NoLink src={preview} alt="No website" title="No Preview"/> )}

      {github ?
        ( <a href={github} aria-label="Link to project Repo" rel="noreferrer" target="_blank"><LinkImg src={git} alt="Link to project repo" title="Project Git Repo" /></a> 
        ) : 
        ( <NoLink src={git} alt="No Repo" title="No Project Repo"/> )} 
    </>   
  )
}

export default Links

// Prototypes
Links.propTypes = {
  website: PropTypes.string,
  github: PropTypes.string,
}
