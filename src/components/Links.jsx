import PropTypes from 'prop-types'
// for styling
import styled from 'styled-components'
import { useTheme } from '../utils/Functions/theme'
// import Tooltip component
import Tooltip from './ToolsTips/ToolTip'
// import link logos
import preview from '../assets/icons/preview.svg'
import git from '../assets/icons/github.svg'

/**
 * CSS for component using styled.components
 */

const Filter = styled.span`
  &.projPageLink {
    filter: ${({ theme }) => (theme === 'light' ? '' : 'invert(65%) sepia(100%) saturate(341%) hue-rotate(127deg) brightness(91%) contrast(83%);')};
  }
`;

const LinkImg = styled.img`
  margin: 0px 5px;
  width: clamp(1rem, 1.6vw, 1.4rem);
  transition: 0.4s;
  &:hover {
    filter: invert(99%) sepia(1%) saturate(687%) hue-rotate(123deg) brightness(93%) contrast(89%);
    }
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
  * @param {string} linkType: set color behaviour for links on project page ONLY 
  * @returns {JSX}
  */
const Links = ({ website, github, linkType }) => {
  const { theme } = useTheme()

  return (
    <>
      {website ?
        ( <a href={website} aria-label="Link to project website" rel="noreferrer" target="_blank">
            <Tooltip content="Website">
              <Filter theme={theme} className={linkType}>
                <LinkImg src={preview} alt="Link to website"/>
              </Filter>
            </Tooltip>
          </a>
        ) : 
        ( <Tooltip content="No Website">
            <Filter theme={theme} className={linkType}>
              <NoLink src={preview} alt="No website"/>
            </Filter>
          </Tooltip>
        )} 

      {github ?
        ( <a href={github} aria-label="Link to project Repo" rel="noreferrer" target="_blank">
            <Tooltip content="GitHub Repo">
              <Filter theme={theme} className={linkType}>
                <LinkImg src={git} alt="Link to project repo"/>
              </Filter>
            </Tooltip>
          </a> 
        ) : 
        ( <Tooltip content="No GitHub Repo">
            <Filter theme={theme} className={linkType}>
              <NoLink src={git} alt="No Repo"/>
            </Filter>
          </Tooltip>
        )} 
    </>   
  )
}

export default Links

// Prototypes
Links.propTypes = {
  website: PropTypes.string,
  github: PropTypes.string,
  linkType: PropTypes.string,
}


