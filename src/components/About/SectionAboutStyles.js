import styled from 'styled-components'

export const StyledAboutSection = styled.section`
  background-color: #f7f7f7;
  // padding: 10rem 0;
  padding-top::10rem;
  background-image: linear-gradient(to right, #96c3e8, #002f5f);
  /* border-top: 1px solid white; */
  color: white;
  margin-top:90px;

  @media only screen and (max-width: 56.25em) {
  margin-top:30px;
  }
`

// Master Grid encompassing both columns
export const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8rem;

  background-color: #f7f7f7;
  padding: 10rem 0;
  margin-top: -10vh;
  background-image: linear-gradient(to right, #96c3e8, #002f5f);

  @media only screen and (max-width: 56.25em) {
    grid-template-columns: 1fr;
    padding: 20rem 0;
    display:flex;
    flex-direction:column;
    padding:20px;
  }
`

// Content Wrapper for Text Elements on the Left
export const ContentWrapper = styled.div`
  grid-column: 1;
   padding-left: 8rem;

  h3 {
    font-size: 1.6rem;
    font-weight: 700;
    text-transform: uppercase;
    border-bottom: 1px solid red;
  }

  p {
    font-size: 1.6rem;

    &:not(:last-child) {
      margin-bottom: 3rem;
    }
  }
  @media only screen and (max-width: 56.25em) {
    padding-left: 0rem;
    text-align:center;
    p{
      text-align:center;
    }
  }

`
// Base image styles for photos
export const Image = styled.div`
  width: 100%;
  height: auto;
  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.4);
  border-radius: 2px;
  position: relative;
  z-index: 10;
  transition: all 0.2s;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.scrumhrBlue};
    box-shadow: 0 0 0 1.5rem ${({ theme }) => theme.colors.scrumhrBlue},
      0 0 0 1.65rem white, 0 2.5rem 4rem rgba(0, 0, 0, 0.5); /* Combined shadows */

    transform: scale(1.05) translateY(-0.5rem);
    z-index: 20;
  }

  &:nth-child(1) {
    grid-row: 1 / 3;
    grid-column: 1 / 2;
    z-index: 10;
  }

  &:nth-child(2) {
    grid-row: 1 / 3;
    grid-column: 2 / 3;
    z-index: 20;
    transform: translate(-10%, 10%);
  }

  &:nth-child(3) {
    grid-row: 2 / 4;
    grid-column: 1 / 2;
    z-index: 30;
    transform: translate(10%, 10%);
  }

  @media only screen and (max-width: 56.25em) {
    width: 100%;
    box-shadow: 0 1.5rem 3rem rgba(0, 0, 0, 0.2);

    &:nth-child(1),
    &:nth-child(2),
    &:nth-child(3) {
      grid-row: auto;
      grid-column: auto;
    }
  }
`

// Image composition on the Right
export const Composition = styled.div`
  grid-column: 2 / span 2;
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, auto);
  place-content: center;
  padding-right: 8rem;

  &:hover ${Image}:not(:hover) {
    transform: scale(0.95);
  }

  @media only screen and (max-width: 56.25em) {
   display:flex;
   flex-direction:column;

  }
`

export const AboutH2 = styled.h2`
  font-size: 3.5rem;
  padding: 1rem;
  text-transform: uppercase;
  font-weight: 700;
  display: inline-block;
  color: #ffffff; // White font color

  ); // Semi-transparent white background

  padding: 0.2rem 0.5rem;
  border-radius: 5px;
  // Adding the blur effect
  border: 1px solid rgba(255, 255, 255, 0.2); // Subtle border for reflective edge
  text-shadow: 2px 2px 3px ${(props) => props.theme.colors.scrumhrBlue}; // Text shadow using scrumhrBlue
`
export const UCenterText = styled.div`
  text-align: center !important;
`
