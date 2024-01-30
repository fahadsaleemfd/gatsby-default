import styled from 'styled-components'
import OriginalButtonStyles from '../styles/ButtonStyles'
import { moveInLeft, moveInRight } from '../styles/Animations'

export const ParallaxContainer = styled.div`
  display: grid;
  grid-template-areas:
    'header header header'
    'main main main'
    'button button button';
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: repeat(3, 1fr);
  position: relative; // Needed for absolute positioning of children

  /* Apply the clip-path for supporting browsers */
  @supports (clip-path: polygon(0 0)) or (-webkit-clip-path: polygon(0 0)) {
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
    clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
    height: 85vh;
  }

  /* High resolution and large-screen devices */
  @media only screen and (min-resolution: 192dpi) and (min-width: 37.5em),
    only screen and (-webkit-min-device-pixel-ratio: 2) and (min-width: 37.5em),
    only screen and (min-width: 125em) {
    background-image: linear-gradient(
        to right bottom,
        rgba(126, 213, 111, 0.1),
        rgba(40, 112, 200, 0.8)
      ),
      url('../images/bg.jpg');
  }

  /* Smaller devices */
  @media only screen and (max-width: 37.5em) {
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 85vh, 0 100%);
    clip-path: polygon(0 0, 100% 0, 100% 85vh, 0 100%);
  }
`

export const ParallaxBackground = styled.div`
  grid-area: 1 / 1 / -1 / -1; // Cover all rows and columns
  background: ${(props) => `url(${props.bgImage}) no-repeat center center`};
  background-size: cover;
  background-attachment: fixed;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1; // Behind all other content
`

export const ParallaxLayerForest = styled.img`
  grid-area: 3 / 1 / 4 / -1; // Cover the bottom row and all columns
  position: absolute;
  bottom: 0;
  width: 100%;
  z-index: 0; // Above the background but below the rock image
`

export const ParallaxLayerRock = styled.img`
  grid-area: 3 / 1 / 4 / -1; // Same grid area as forestImage
  position: absolute;
  bottom: 0;
  width: 100%;
  z-index: 1; // Above the forest image
`

export const HeaderLogoBox = styled.div`
  grid-area: header;
  align-self: start;
  justify-self: start;
  padding: 4rem;
  z-index: 10;
`

export const HeaderTextBox = styled.div`
  grid-area: main;
  align-self: end;
  justify-self: center;
  z-index: 10;
  color: white;
  /* background-color: rgba(
    255,
    255,
    255,
    0.1
  ); // Semi-transparent white background
  padding: 0.2rem 0.5rem;
  border-radius: 5px;
  backdrop-filter: blur(10px); // Adding the blur effect
  border: 1px solid rgba(255, 255, 255, 0.2); // Subtle border for reflective edge
  text-shadow: 2px 2px 3px ${(props) =>
    props.theme.colors.scrumhrBlue}; // Text shadow using scrumhrBlue */
`

export const HeadingPrimaryMain = styled.h1`
  text-align: center;
  font-size: 6rem;
  font-weight: 400;
  letter-spacing: 1.5rem;
  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.5), 0 -1px 0 rgba(255, 255, 255, 0.2),
    2px 2px 2px rgba(0, 0, 0, 0.5);
  animation: ${moveInRight} 1s ease-out;

  @media only screen and (max-width: 37.5em) {
    letter-spacing: 1rem;
    font-size: 3rem; // Adjusted to correct property
  }
`

export const HeadingPrimarySub = styled.div`
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  animation: ${moveInLeft} 1s ease-out;
`

export const ButtonStyles = styled(OriginalButtonStyles)`
  grid-area: button;
  align-self: start;
  justify-self: center;
  z-index: 10;

  &:hover::after {
    background-color: ${({ theme }) => theme.colors.lightBlue || '#add8e6'};
    transform: scaleX(1.4) scaleY(1.6);
  }
`
