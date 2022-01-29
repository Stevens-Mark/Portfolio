import { useState } from 'react'
import PropTypes from 'prop-types'
// for styling
import styled from 'styled-components'
import colors from '../utils/style/colors'
import { useTheme } from '../utils/Functions/theme'
// import icons
import previousArrow from '../assets/icons/chevron_back.svg'
import nextArrow from '../assets/icons/chevron_forward.svg'
import Blank from '../assets/images/blank.jpg'

/**
 * CSS for the component using styled.components
 */
const CarouselWrapper = styled.article`
  align-items: center;
  display: flex;
  filter: ${({ theme }) => (theme === 'light' ? 'brightness(100%)' : 'brightness(85%)')};
  flex:1;
  justify-content: center;
  margin: 0.625rem;
  position: relative;
  transition: 0.4s;
  
  &:hover {
    filter: brightness(100%);
  }
`;

const CarouselImages = styled.img`
  background:${colors.tertiary};
  border-radius: clamp(0.313rem, 1.1vw, 1rem);
  box-shadow: 0 2px 4px rgba(0, 0, 0, .8);
  max-width: 600px;
  object-fit: contain;
  width: 85%;
`;

const CarouselControls = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  position: absolute;
  width: 95%;
`;

const CarouselControlArrows = styled.img`
  filter: ${({ theme }) => (theme === 'light' ? 'invert(68%) sepia(39%) saturate(716%) hue-rotate(131deg) brightness(93%) contrast(89%)' : 'invert(0%) sepia(1%) saturate(1253%) hue-rotate(149deg) brightness(96%) contrast(83%)')};
  margin: -8px;
  width: clamp(1.5rem, 2.2vw, 2.5rem);
`;

const Counter = styled.p`
  bottom: -0.5rem;
  color: ${colors.primary};
  font-size: clamp(0.625rem, 1.3vw, 1.25rem);
  position: absolute;
`;

/**
 * Renders Carousel at top of page for the project
 * @function Carousel
 * @param {array} photoAlbum: pictures for the carousel
 * @returns {JSX}
 */
const Carousel = ( { photoAlbum } ) => {

  const { theme } = useTheme()
  const pictures = photoAlbum
  const length = photoAlbum.length
  const [current, setCurrent] = useState(0)

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  }

  return (   
    <CarouselWrapper theme={theme}>

      { length >1 ?              // only show control arrrow if more than one photo
        <CarouselControls>
          <CarouselControlArrows theme={theme} src={previousArrow} alt='previous' onClick={prevSlide} />
          <CarouselControlArrows theme={theme} src={nextArrow} alt='next' onClick={nextSlide} />
        </CarouselControls> 
        : null
      }

        <CarouselImages src={length>0? pictures[current] : Blank} alt='Project Gallery' />
        <Counter>{current+1}/{length || 0 }</Counter>
    </CarouselWrapper>     
  )
}

export default Carousel

// Prototypes
Carousel.propTypes = {
  photoAlbum : PropTypes.array.isRequired,
 }


