import { Component } from "react"
import PropTypes from 'prop-types'
// for styling
import styled from 'styled-components'
import colors from '../utils/style/colors'
// import icons
import previousArrow from '../assets/icons/white_back_arrow.svg'
import nextArrow from '../assets/icons/white_forward_arrow.svg'
import Blank from '../assets/images/blank.jpg'

/**
 * CSS for the component using styled.components
 */
const CarouselWrapper = styled.article`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CarouselImages = styled.img`
  width: 100%;
  height: 15.938rem;
  border-radius: clamp(0.625rem, 1.736vw, 1.563rem);
  /* object-fit: cover; */
  box-shadow: 0px 4px 12px 3px ${colors.shadow};

  @media screen and (min-width: 600px) {
    height: unset;
    height: 25.938rem;
  }
`;

const CarouselControls = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  cursor: pointer;
  position: absolute;
`;

const CarouselControlArrows = styled.img`
  width: 1.875rem;

  @media screen and (min-width: 600px) {
      width: 3.125rem;
  }
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


