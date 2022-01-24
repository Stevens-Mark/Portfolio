import PropTypes from 'prop-types'
// for styling
import styled from 'styled-components'
// import link logos
import preview from '../assets/icons/preview.svg'
import git from '../assets/icons/tech/github.svg'

/**
 * CSS for component using styled.components
 */
const LinkImg = styled.img`
  width: clamp(1rem, 1.6vw, 1.4rem);
  margin: 0px 5px;
`;

const NoLink = styled.img`
  width: clamp(1rem, 1.6vw, 1.4rem);
  margin: 0px 5px;
  filter: invert(57%) sepia(0%) saturate(4%) hue-rotate(266deg) brightness(88%) contrast(89%);
`;

/**
  * Links to Github & Porject websites
  * @function Links
  * @param {string} website: link to project webite
  * @param {string} github: link to project github repo 
  * @returns {JSX}
  */
const Links = ({ website, github }) => {
  return (
    <>
      {website ?
        (<a href={website} rel="noreferrer" target="_blank"><LinkImg src={preview} alt="Link to website" title="Visit Website"/></a>) : 
        (<NoLink src={preview} alt="" title="No Preview"/>)}

      {github ?
        (<a href={github} rel="noreferrer" target="_blank"><LinkImg src={git} alt="Link to project repo" title="Project Git Repo" /></a>) : 
        (<NoLink src={git} alt="" title="No Project Repo"/>)} 
    </>   
  )
}

export default Links

// Prototypes
Links.propTypes = {
  website: PropTypes.string,
  github: PropTypes.string,
}
