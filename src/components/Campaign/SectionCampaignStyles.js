import styled from 'styled-components'
import ButtonStyles from '../styles/ButtonStyles'
import { HeadingSecondary as DefaultHeadingSecondary } from '../styles/HeadingStyles' // Adjust the import path as necessary

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(150px, 1fr));
  gap: 2rem;
  background-image: linear-gradient(to right, #96c3e8, #002f5f);
  padding: 8rem 40rem;
  @media (max-width: 56.25em) {
    grid-template-columns: 1fr;
  }
`

export const CardFront = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr; // Split card content into two columns
  grid-template-rows: auto auto auto; // Four rows: image, dates, ul
  gap: 1rem; // Gap between rows and columns
  width: 100%;
  min-height: 100%;
  backface-visibility: hidden;
  color: white;
  background-image: radial-gradient(#96c3e8, #002f5f);
  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.15);
  perspective: 150rem;
  top: 0;
  left: 0;
  transition: transform 0.8s;

  @media (max-width: 56.25em) {
    grid-template-columns: 1fr; // Single column for smaller screens
    grid-column: span 1;
  }

  img {
    grid-row: 1 / 2; // Image occupies the first row
    grid-column: 1 / -1; // Image spans the entire width of the card
    width: 100%;
    height: auto;
    display: block;
    clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
  }

  ul {
    width: 80%;
    margin: 0 auto;
    padding: 3rem;

    grid-row: 3 / 4; // ul occupies the third row
    grid-column: 1 / -1; // ul spans the full width of the card
    justify-self: center; // Horizontally center within its cell
    align-self: center; // Vertically center within its cell

    li {
      text-align: center;
      font-size: 1.5rem;
      padding: 1rem;

      &:not(:last-child) {
        border-bottom: 1px solid #eee;
      }
    }
  }
`
export const Dates = styled.span`
  grid-row: 2 / 3; // Dates occupy the second row
  grid-column: 1 / -1; // Dates span the full width of the card
  text-align: center;
  gap: 0.5rem;

  span {
    font-size: 1.5rem;
    color: white;
    font-weight: 700; // Makes the text bolder
  }

  span:first-of-type::after {
    content: '-'; // Inserts the pipe character
    margin: 0 0.5rem; // Adds a little spacing on both sides of the pipe
  }
`

export const CardHeading = styled.h3`
  grid-row: 1 / span 2; // This makes the heading span both rows
  grid-column: 1 / span 2;
  justify-self: end;
  align-self: center;
  margin: 0;
  padding: 10px;
  z-index: 1;
  font-size: 2.8rem;
  font-weight: 300;
  text-transform: uppercase;
  text-align: right;
  color: white;
  background-color: ${(props) => props.theme.scrumhrBlue};
  // Semi-transparent white background
  padding: 0.2rem 0.5rem;
  border-radius: 5px;
  backdrop-filter: blur(10px); // Adding the blur effect
  border: 1px solid rgba(255, 255, 255, 0.2); // Subtle border for reflective edge
  text-shadow: 2px 2px 3px ${(props) => props.theme.colors.scrumhrBlue}; // Ensures the heading overlays other contents
`

// Add a new styled component for the back side
export const CardBack = styled(CardFront)`
  display: grid;
  grid-template-columns: 1fr; // Split card content into two columns
  grid-template-rows: auto auto auto auto; // Four rows with third row taking available space
  gap: 1rem; // Gap between rows and columns
  width: 100%;
  position: absolute;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  place-items: center;
  height: 100%;
  cursor: default;
`

export const CardBackHeading = styled.h3`
  grid-row: 1;
  grid-column: 1;
  font-size: 2.4rem;
  align-self: center;
`
export const CardBackContentWrapper = styled.div`
  grid-row: 2 / span 2; // Spans from row 2 to 4
  grid-column: 1; // Takes up the first column
  display: grid;
  grid-template-rows: repeat(2, 1fr); // Create two rows of equal height
  align-items: center; // Center the content vertically
  font-size: 6rem;
  font-weight: 100;
`

export const CardBackContent = styled.p`
  justify-self: center; // Center the content horizontally
  font-size: inherit; // Inherit the font-size from the wrapper
  font-weight: inherit; // Inherit the font-weight from the wrapper
`
// Extend ButtonStyles with additional grid placement styles
export const GridButton = styled(ButtonStyles)`
  grid-row: 4;
  grid-column: 1;
  align-self: center;
`

// Wrap the entire Card component
export const SingleCardContainer = styled.div`
  transform-style: preserve-3d;
  width: 100%;
  height: 100%;
  cursor: pointer;

  grid-column: span ${(props) => props.span};
  &:hover ${CardFront} {
    transform: rotateY(180deg);
  }
  &:hover ${CardBack} {
    transform: rotateY(0deg);
  }
`
export const HeadingSecondary = styled(DefaultHeadingSecondary)`
  // Override hover styles
  &:hover {
    transform: none;
    text-shadow: none;
  }

  // Add new styles
  grid-column: 1 / -1; // Span all columns
  justify-self: center; // Horizontally center
  align-self: center; // Vertically center
  text-align: center; // Center the text itself
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
