import { useState } from 'react'
import PropTypes from 'prop-types'
// for styling
import styled from 'styled-components'
import colors from '../utils/style/colors'
// import icons
import upArrow from '../assets/icons/up_arrow_white.svg'
import downArrow from '../assets/icons/down_arrow_white.svg'
// import Css as passed as parameters
import '../utils/style/DropDown.css'

/**
 * CSS for component using styled.components
 */
const DropDownTitleBar = styled.div`
  margin-top: 20px;
  display: flex;
  max-width: 1023px;
  justify-content: space-between;
  align-items: center;
  background:  #FF6060;
  height: 1.875rem;
  border-radius: 5px;
  cursor: pointer;
  padding: 7px 15px 7px 15px;
  box-shadow: 0px 7px 12px 3px  ${colors.shadow};

  @media screen and (min-width: 660px) {
    margin-top: 3.125rem;
    height: 3rem;
    }
`;

const DropDownTitleBarText = styled.h2`
  font-size: clamp(0.813rem, 1.6vw, 1.5rem);
  font-weight: 500;
`;

const DropdownArrow = styled.img`
  width: 1rem;

  @media screen and (min-width: 660px) {
     width: 1.2rem;
  }
  @media screen and (min-width: 1024px) {
      width: 1.5rem;
    }
`;

/**
* Renders Dropdown lists on about page
* @function DropDown
* @param {string} dropdownWidth: sets width of dropdown depending on page
* @param {string} dropdownHeight: sets height of dropdown depending on page
* @param {string} title: dropdown heading
* @param {string/array} content: either text or list rendered in dropdown
* @returns {JSX}
*/
const DropDown = ( {dropdownWidth, dropdownHeight, title, content} ) => {

  const [open, setOpen] = useState(false)
  const handleButtonClick = () => { setOpen(!open) }
  
  return (
      <div className={dropdownWidth} /* ref={this.container} */>
          <DropDownTitleBar onClick={() =>handleButtonClick()}>
              <DropDownTitleBarText>{title}</DropDownTitleBarText>
              <span>{open ? (<DropdownArrow src={upArrow} alt="" />) : 
                  (<DropdownArrow src={downArrow} alt="" />)}
              </span>
          </DropDownTitleBar>

          {open && (typeof(content) === 'string' ? (
          <p className={dropdownHeight}>{content}</p>) :  
          ( <ul className={dropdownHeight}>
              {content.map((equipment, index) => (
                <li key={`${equipment}-${index}`}>{equipment}</li> ))}
            </ul>
          ))}                     
      </div>
  )
}

export default DropDown

// Prototypes
DropDown.propTypes = {
  dropdownWidth: PropTypes.string.isRequired,
  dropdownHeight: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
  ]).isRequired,
}

