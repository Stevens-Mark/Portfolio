import { Component } from "react"
import PropTypes from 'prop-types'
// for styling
import styled from 'styled-components'
// import icons
import previousArrow from '../assets/icons/white_back_arrow.svg'
import nextArrow from '../assets/icons/white_forward_arrow.svg'
import Blank from '../assets/images/blank.jpg'

/**
 * CSS for the component using styled.components
 */
const CarouselWrapper = styled.article`
  margin: 10px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex:1;
`;

const CarouselImages = styled.img`
  width: 85%;
  border-radius: clamp(0.625rem, 1.736vw, 1.563rem);
  object-fit: contain;
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .8);
`;

const CarouselControls = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  cursor: pointer;
  position: absolute;
`;

const CarouselControlArrows = styled.img`
  filter: invert(68%) sepia(39%) saturate(716%) hue-rotate(131deg) brightness(93%) contrast(89%);
  width: clamp(2rem, 3.4vw, 3.125rem);
  margin: -5px;
`;

const Counter = styled.p`
  position: absolute;
  bottom: 0.625rem;
  font-size: clamp(0.625rem, 1.3vw, 1.25rem);
  margin: unset;
`;

/**
 * Renders Carousel at top of page for accomodation announcement
 * @function Carousel
 * @extends Component
 * @param {array} props photoAlbum: pictures for the carousel
 * @returns {JSX}
 */
export default class Carousel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentImageIndex: 0,
    }
  }

	render() { 
    const {currentImageIndex} = this.state
    const pictures = this.props.photoAlbum
    const length = pictures?.length
  
    const previousSlide = () => {
        this.setState((prevState) => ({
          currentImageIndex: prevState.currentImageIndex !== 0 ? prevState.currentImageIndex - 1 : prevState.currentImageIndex = length - 1
        }))
    };

    const nextSlide = () => {
        this.setState((prevState) => ({
          currentImageIndex: prevState.currentImageIndex !== length - 1 ? prevState.currentImageIndex + 1 : prevState.currentImageIndex = 0
        }))
    };

    return (   
          <CarouselWrapper>
            <CarouselControls>
              <CarouselControlArrows src={previousArrow} alt='previous' onClick={previousSlide} />
              <CarouselControlArrows src={nextArrow} alt='next' onClick={nextSlide} />
            </CarouselControls>
              <CarouselImages src={pictures? pictures[currentImageIndex] : Blank} alt='Carousel Gallery' />
              <Counter>{currentImageIndex+1}/{length || 0 }</Counter>
          </CarouselWrapper>     
    )
  }
}

// Prototypes
Carousel.propTypes = {
  photoAlbum : PropTypes.array.isRequired,
 }


