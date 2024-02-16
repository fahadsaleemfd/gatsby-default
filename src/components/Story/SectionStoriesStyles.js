import styled from 'styled-components'

export const SectionStoriesContainer = styled.section`
  position: relative;
  padding: 15rem 0;
  margin-top: -10rem;

  @media only screen and (max-width: 56.25em) {
    padding: 2rem 0;
  }
`

export const BgVideo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
  overflow: hidden;
`

export const BgVideoContent = styled.video`
  height: 100%;
  width: 100%;
  object-fit: cover;
  @media only screen and (max-width: 56.25em) {
    display:none;
  }

`

export const UCenterText = styled.div`
  text-align: center !important;
`

export const StoryH2 = styled.h2`
  font-size: 3.5rem;
  padding: 1rem;
  text-transform: uppercase;
  font-weight: 700;
  display: inline-block;
  color: #ffffff; // White font color
  background-color: rgba(
    255,
    255,
    255,
    0.1
  ); // Semi-transparent white background
  padding: 0.2rem 0.5rem;
  border-radius: 5px;
  backdrop-filter: blur(10px); // Adding the blur effect
  border: 1px solid rgba(255, 255, 255, 0.2); // Subtle border for reflective edge
  text-shadow: 2px 2px 3px ${(props) => props.theme.colors.scrumhrBlue}; // Text shadow using scrumhrBlue
`

export const StoryShape = styled.figure`
  width: 15rem;
  height: 15rem;
  float: left;
  transform: translateX(-3rem) skewX(12deg);
  position: relative;
  overflow: hidden;
  border-radius: 50%;

  // Ensure images within StoryShape fit and scale appropriately
  img {
    width: 100%;
    height: 100%;
    object-fit: cover; // This ensures the image scales to cover the full size while maintaining its aspect ratio
    display: block; // To remove any unwanted spacing due to inline nature of images
  }

  @supports (clip-path: polygon(0 0)) or (-webkit-clip-path: polygon(0 0)) {
    -webkit-clip-path: circle(50% at 50% 50%);
    clip-path: circle(50% at 50% 50%);
    -webkit-shape-outside: circle(50% at 50% 50%);
    shape-outside: circle(50% at 50% 50%);
    border-radius: none;
  }

  @media only screen and (max-width: 37.5em) {
    transform: translateX(-3rem) skewX(0);
  }
`

export const StoryImages = styled.div`
  height: 100%;
  transform: translateX(-4rem) scale(1.4);
  backface-visibility: hidden;
  transition: all 0.5s;
`

export const StoryCaption = styled.figcaption`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 20%);
  color: white;
  text-transform: uppercase;
  font-size: 3rem;
  text-align: center;
  opacity: 0;
  transition: all 0.5s;
  backface-visibility: hidden;
  background: rgba(
    0,
    0,
    0,
    0.4
  ); /* Semi-transparent black for darker background */
  backdrop-filter: blur(
    10px
  ); /* Blur the background content behind the element */
  border-radius: 15px; /* Optional rounded corners */
`

export const Story = styled.div`
  width: 75%;
  margin: 0 auto;
  box-shadow: 0 3rem 6rem rgba(0, 0, 0, 0.1);
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 3px;
  padding: 6rem;
  padding-left: 9rem;
  font-size: 1.6rem;
  transform: skewX(-12deg);
  background-image: radial-gradient(#96c3e8, #002f5f);
  color: white;
  margin-bottom: 4rem;

  @media only screen and (max-width: 56.25em) {
    width: 100%;
    padding: 4rem;
    padding-left: 7rem;
  }

  @media only screen and (max-width: 37.5em) {
    transform: skewX(0);
  }

  &:hover ${StoryCaption} {
    opacity: 1;
    transform: translate(-50%, -50%);
  }

  &:hover ${StoryImages} {
    transform: translateX(-4rem) scale(1);
    filter: blur(3px) brightness(80%);
  }
`

export const StoryText = styled.div`
  transform: skewX(12deg);

  @media only screen and (max-width: 37.5em) {
    transform: skewX(0);
  }
`
