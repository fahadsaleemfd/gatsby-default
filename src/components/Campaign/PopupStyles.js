import styled from 'styled-components'
import Modal from 'styled-react-modal'
import ButtonStyles from '../styles/ButtonStyles'
import { HeadingSecondary, HeadingTertiary } from '../styles/HeadingStyles'

// This is the modal background overlay
export const ModalBackground = styled.div`
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  transition: opacity 0.3s, visibility 0.3s;
  opacity: 0;
  visibility: hidden;
  &.active {
    opacity: 1;
    visibility: visible;
  }
`

// This is the styled modal content area
export const StyledModal = Modal.styled`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 75%;
  background-color: #fff;
  box-shadow: 0 2rem 4rem rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  overflow: hidden;
  z-index: 10000 !important; // Above the overlay
  transition: transform 0.5s, opacity 0.5s;
  opacity: 0;
  visibility: hidden;
  &.active {
    opacity: 1;
    visibility: visible;
    transform: translate(-50%, -50%) scale(1);
  }
`

// The internal container for the modal content
export const PopupContainer = styled.div`
  display: grid;
  grid-template-areas:
    'images heading close'
    'images content content'
    'images button button';
  grid-template-columns: 1fr 2fr auto;
  grid-template-rows: auto 1fr auto;
  /* gap: 1rem; */
  @media (max-width: 960px) {
    display:flex;
    flex-direction:column-reverse;
    height:500px;
    overflow:scroll;
  }


`

// Styled left column for images with grid areas
export const LeftColumn = styled.div`
  grid-area: images;
  display: flex;
  flex-direction: column;
`

export const ImageContainer = styled.img`
  width: 100%;
  height: 100%; // Change height to 100% if you want it to cover the flex container
  display: block; // This ensures that the image behaves like a block-level element
  object-fit: cover; // This will cover the area without changing the aspect ratio
  // If you want no gap at all, ensure that the images are the same height or the container flex is set to stretch
`

// Styled right column for text with grid areas
export const RightColumn = styled.div`
  grid-area: content;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-image: radial-gradient(#96c3e8, #002f5f);
  color: white;
  padding: 3rem;
`

// Individual styled components for each content area
export const Heading = styled(HeadingSecondary)`
  grid-area: heading;
  // Override the hover styles from HeadingSecondary
  &:hover {
    transform: none;
    text-shadow: none;
  }
`

export const SubHeading = styled(HeadingTertiary)`
  grid-area: subheading;
`

export const ContentContainer = styled.div`
  grid-area: content;
  font-size: 1.4rem;
  column-count: 2;
  column-gap: 4rem;
  column-rule: 1px solid #eee;
  hyphens: auto;
  overflow: auto; // If your content is long, you might want to enable scrolling

  p {
    font-size: 1.4rem;
  }

  h3 {
    font-size: 1.6rem;
    margin-bottom: 1rem;
  }
`

export const GridButton = styled(ButtonStyles)`
  grid-area: button;
  justify-self: center; // Center the button in its cell
  align-self: center;
`

// Styled CloseButton using grid placement instead of absolute positioning
export const CloseButton = styled.button`
  grid-area: close; // Assign to the "close" grid area
  justify-self: end; // Align to the end of the grid area
  align-self: end; // Align to the top of the grid area
  background: transparent;
  border: none;
  font-size: 3rem;
  cursor: pointer;
  padding: 1rem; // Add padding for easier clicking
  z-index: 10; // Ensure it's above the other content
  color: white;
`
