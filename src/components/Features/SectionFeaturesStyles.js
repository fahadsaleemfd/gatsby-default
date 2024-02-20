import styled from 'styled-components'

export const MainContainer = styled.div`
margin-top:30px;
  transform: skewY(-7deg);
   padding: 5rem;
  position: relative;
   background-image: linear-gradient(to right, #96c3e8, #002f5f); 
  border-top: 1px solid white;
  overflow: hidden;
  border-bottom: 1px solid white;
   padding-bottom: 20rem;
  // & > * {
  //   transform: skewY(7deg); // Counteract the main container's skew
  // }
  @media (max-width: 56.25em) {
    border-top: 0px;
    border-bottom:0px;
    padding-bottom: 2rem;
  }

`

export const Heading = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
`

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); // Define 4 columns
  gap: 2rem; // Spacing between cards
  transform: skewY(7deg);
  @media (max-width: 56.25em) {
    grid-template-columns: 1fr; // On mobile, one card per row
  }
`

export const Card = styled.div`
  background: white;
  border-radius: 10px;
  overflow: hidden;
  max-width: 350px;
  padding: 25px 30px;
  transition: transform 0.3s;
  display: grid; /* Added */
  place-items: center; /* Added */

  &:hover {
    transform: translateY(-1.5rem) scale(1.03);
  }
`

export const CardHeading = styled.h2`
  padding-top: 1rem;
  text-align: center;
  text-transform: uppercase;
  font-size: 1.6rem;
  font-weight: 700;
`

export const CardContent = styled.p`
  padding: 1rem;
  text-align: center;
  font-size: 1.5rem;

  h5 {
    font-weight: bold;
  }

  ul {
    list-style-type: none;
    padding-left: 0;

    li {
      position: relative;
      padding-left: 1.5em;

      &::before {
        content: '-';
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
      }
    }
  }
`

export const UCenterText = styled.div`
  text-align: center !important; // Be cautious with using !important. It can make future CSS changes challenging.
`
