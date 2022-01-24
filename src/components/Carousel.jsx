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
  margin: 0.625rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex:1;
  filter: ${({ theme }) => (theme === 'light' ? 'brightness(100%)' : 'brightness(85%)')};
  transition: 0.4s;
  &:hover {
    filter: brightness(100%);
  }
`;

const CarouselImages = styled.img`
  width: 85%;
  max-width: 600px;
  border-radius: clamp(0.625rem, 1.736vw, 1.563rem);
  object-fit: contain;
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .8);
`;

const CarouselControls = styled.div`
  display: flex;
  justify-content: space-between;
  width: 95%;
  cursor: pointer;
  position: absolute;
`;

const CarouselControlArrows = styled.img`
  filter: ${({ theme }) => (theme === 'light' ? 'invert(68%) sepia(39%) saturate(716%) hue-rotate(131deg) brightness(93%) contrast(89%)' : 'invert(0%) sepia(1%) saturate(1253%) hue-rotate(149deg) brightness(96%) contrast(83%)')};
  width: clamp(1.5rem, 2.2vw, 2.5rem);
  margin: -8px;
`;

const Counter = styled.p`
  color: ${colors.primary};
  position: absolute;
  bottom: -0.5rem;
  font-size: clamp(0.625rem, 1.3vw, 1.25rem);
`;

/**
 * Renders Carousel at top of page for the project
 * @function Carousel
 * @param {array} photoAlbum: pictures for the carousel
 * @returns {JSX}
 */
const Carousel = ( {photoAlbum} ) => {

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

      <CarouselControls>
        <CarouselControlArrows theme={theme} src={previousArrow} alt='previous' onClick={prevSlide} />
        <CarouselControlArrows theme={theme} src={nextArrow} alt='next' onClick={nextSlide} />
      </CarouselControls>

        <CarouselImages src={pictures? pictures[current] : Blank} alt='Project Gallery' />
        <Counter>{current+1}/{length || 0 }</Counter>
        
    </CarouselWrapper>     
  )
  
}

export default Carousel

// Prototypes
Carousel.propTypes = {
  photoAlbum : PropTypes.array.isRequired,
 }


