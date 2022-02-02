import { useState } from 'react'
import PropTypes from 'prop-types'
// for styling
import styled from 'styled-components'
import colors from '../utils/style/colors'
// import icons
import arrow from '../assets/icons/up_arrow_white.svg'
// import keyframes for component animations
import { slideIn } from '../utils/style/keyframes'
import { css } from 'styled-components'

/**
 * CSS for component using styled.components
 */

const ListWrapper = styled.div`
  max-width: 1023px;
  width: 100%;
`;

const TitleBar = styled.div`
  position: relative;
  z-index: 2;
  margin-top: 1.25rem;
  display: flex;
  max-width: 1023px;
  justify-content: space-between;
  align-items: center;
  background: ${colors.primary};
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

const BarText = styled.h2`
  font-size: clamp(0.813rem, 1.6vw, 1.5rem);
  font-weight: 500;
`;

const Arrow = styled.img`
  width: 1rem;
  transition: all 0.5s linear;
  transform: ${({ open }) => open ? 'rotate(180deg)' : 'rotate(0)'};
  @media screen and (min-width: 660px) {
     width: 1.2rem;
  }
  @media screen and (min-width: 1024px) {
      width: 1.5rem;
    }
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
  background: #F6F6F6;
  color: #FF6060;
  font-size: clamp(0.75rem, 1.6vw, 1.5rem);
  font-weight: 400;
  border-radius: 5px;
  padding: 0.75rem;
  box-shadow: 0px 7px 12px 3px #d9d9d9;
  margin: unset;
  // opacity:0;
  animation: ${({ open }) => open ? css`${slideIn} .7s both ease-in-out` : ''};
`;

const Text = styled.p`
  animation: ${({ open }) => open ? css`${slideIn} .9s both ease-in-out` : ''};
`;

/**
* Renders Dropdown lists on about page
* @function DropDown
* @param {string} title: dropdown heading
* @param {string/array} content: either text or list rendered in dropdown
* @returns {JSX}
*/
const DropDown = ( {  title, content } ) => {

  const [open, setOpen] = useState(false)
  const handleButtonClick = () => { setOpen(!open) }
  
  return (
      <ListWrapper>

        <TitleBar onClick={() =>handleButtonClick()}>
            <BarText>{title}</BarText>
            <Arrow open={open} src={arrow} alt="" />
        </TitleBar>

          { open && (typeof(content) === 'string' ? 
            (
              <ContentWrapper open={open}>
                <Text open={open}>{content}</Text>
              </ContentWrapper>
            ) :
            ( <ContentWrapper open={open}>
                <ul>
                  {content.map((equipment, index) => (
                    <li key={`${equipment}-${index}`}>{equipment}</li> ))}
                </ul>
              </ContentWrapper>
            ))
          }     

                {/* { open && (typeof(content) === 'string' ? 
            (
              <ContentWrapper open={open}>
                <Text>{content}</Text>
              </ContentWrapper>
            ) :
            ( <ContentWrapper open={open}>
                <ul>
                  {content.map((equipment, index) => (
                    <li key={`${equipment}-${index}`}>{equipment}</li> ))}
                </ul>
              </ContentWrapper>
            ))
          }                     */}
      </ListWrapper>
  )
}

export default DropDown

// Prototypes
DropDown.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
  ]).isRequired,
}

