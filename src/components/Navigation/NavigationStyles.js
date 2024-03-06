// NavigationStyles.js with refactored code for styled components

import styled from 'styled-components'

export const NavigationContainer = styled.div`
  position: fixed;
  top: 6rem;
  right: 6rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  z-index: 2000;
`

export const Checkbox = styled.input`
  display: none;
`

// Button styled component
export const Button = styled.label`
  background-color: #fff;
  height: 7rem;
  width: 7rem;
  position: fixed;
  top: 6rem;
  right: 6rem;
  border-radius: 50%;
  z-index: 2001; // Make sure this is above the Background z-index
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.1);
  text-align: center;
  cursor: pointer;
  htmlfor: 'navi-toggle'; // This should correspond to the id of the Checkbox component

  // Adjust button position for different screen sizes
  @media only screen and (max-width: 56.25em) {
    top: 4rem;
    right: 4rem;
  }

  @media only screen and (max-width: 37.5em) {
    top: 3rem;
    right: 3rem;
  }
`

// Icon styled component
export const Icon = styled.span`
  position: relative;
  display: block;
  width: 3rem; // Set a specific width for the icon
  height: 2px; // Set a specific height for the central bar
  background-color: ${(props) => props.theme.colors.scrumhrBlue};
  margin-top: 3.5rem;
  margin-left: 2rem; // Center the icon horizontally in the button
  transition: all 0.2s;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 3rem;
    height: 2px;
    background-color: ${(props) => props.theme.colors.scrumhrBlue};
    left: 0;
    transition: all 0.2s;
  }

  // Top bar
  &::before {
    top: -0.8rem;
    transform: ${(props) =>
      props.isChecked ? 'translateY(0.8rem) rotate(135deg)' : 'none'};
  }

  // Middle bar disappears when menu is open
  background-color: ${(props) =>
    props.isChecked ? 'transparent' : props.theme.colors.scrumhrBlue};

  // Bottom bar
  &::after {
    top: 0.8rem;
    transform: ${(props) =>
      props.isChecked ? 'translateY(-0.8rem) rotate(-135deg)' : 'none'};
  }
`

export const Background = styled.div`
  height: 6rem;
  width: 6rem;
  border-radius: 50%;
  position: fixed;
  top: 6.5rem; // Half rem more than Button to be centered behind it
  right: 6.5rem; // Same here
  background-image: radial-gradient(#96c3e8, #002f5f);
  z-index: 1000; // Ensure this is below the Button z-index
  transition: transform 0.8s cubic-bezier(0.86, 0, 0.07, 1);
  transform: ${(props) => (props.isChecked ? 'scale(80)' : 'scale(1)')};

  // Add media queries to adjust position on smaller screens
  @media only screen and (max-width: 56.25em) {
    top: 4.5rem;
    right: 4.5rem;
  }

  @media only screen and (max-width: 37.5em) {
    top: 3.5rem;
    right: 3.5rem;
  }
`

export const Nav = styled.nav`
  height: ${(props) => (props.isChecked ? '100vh' : '0')};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1500;
  opacity: ${(props) => (props.isChecked ? '1' : '0')};
  overflow: hidden;
  width: 100%;
  transition: opacity 0.8s, height 0.8s;

  // Add conditional rendering
  ${(props) => !props.isChecked && 'pointer-events: none;'}
`;

export const List = styled.ul`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  list-style: none;
  text-align: center;
  width: 100%;
`

export const Item = styled.li`
  margin: 1rem;
`

export const StyledLink = styled.a`
  display: inline-block;
  font-size: 3rem;
  font-weight: 300;
  padding: 1rem 2rem;
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  background-image: linear-gradient(
    120deg,
    transparent 0%,
    transparent 50%,
    #fff 50%
  );
  background-size: 220%;
  transition: all 0.4s;
  &:hover,
  &:active {
    background-position: 100%;
    color: ${(props) => props.theme.colors.scrumhrBlue}; // Use theme color
    transform: translateX(1rem);
  }
  span {
    margin-right: 1.5rem;
    display: inline-block;
  }
`

// Add any additional necessary styles for transitions or positioning