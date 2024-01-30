import styled from 'styled-components'

export const HeadingSecondary = styled.h2`
  font-size: 3.5rem;
  text-transform: uppercase;
  font-weight: 700;
  display: inline-block;
  color: white;
  background-image: linear-gradient(to right, #7ed56f, #28b485);
  -webkit-background-clip: text;
  letter-spacing: 0.2rem;
  transition: all 0.2s;

  @media only screen and (max-width: 56.25em) {
    font-size: 3rem;
  }

  @media only screen and (max-width: 37.5em) {
    font-size: 2.5rem;
  }

  &:hover {
    transform: skewY(2deg) skewX(15deg) scale(1.1);
    text-shadow: 0.5rem 1rem 2rem rgba(0, 0, 0, 0.2);
  }
`

export const HeadingPrimaryMain = styled.div`
  display: block;
  font-size: 3rem;
  font-weight: 400;
  letter-spacing: 1.5rem;
  animation-name: moveInLeft;
  animation-duration: 1s;
  animation-timing-function: ease-out;
  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.5), 0 -1px 0 rgba(255, 255, 255, 0.2),
    2px 2px 2px rgba(0, 0, 0, 0.5);

  @media only screen and (max-width: 37.5em) {
    .heading-primary--main {
      letter-spacing: 1rem;
      font-family: 5rem;
    }
  }
`
export const HeadingPrimarySub = styled.div`
  display: block;
  font-size: 1.55rem;
  font-weight: 700;
  /* letter-spacing: 1.75rem; */
  animation: moveInRight 1s ease-out;
`
export const HeadingTertiary = styled.h3`
  font-size: 1.6rem;
  font-weight: 700;
  text-transform: uppercase;
  border-bottom: 1px solid red;
`

export const HeadingRef = styled.h3`
  font-size: 1.6rem;
  font-weight: 700;
  text-transform: uppercase;
`
