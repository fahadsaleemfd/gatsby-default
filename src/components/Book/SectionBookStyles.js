import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  max-width: 100%;
  height: 782px; /* Adjusted height for additional content */

  background-size: cover;
`

export const FormContainer = styled.div`
  flex: 0 0 50%;
  padding: 18rem;
  background-color: rgba(255, 255, 255, 0.8);
  clip-path: polygon(0 0, 100% 0, 80% 100%, 0% 100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  color: #fff;
  
  @media only screen and (max-width: 56.25em) {
    padding:0px;
    flex:0 0 100%
  }

`

export const FormElement = styled.div`
  margin-bottom: 15px; /* Spacing between form elements */
`

export const BookH2 = styled.h2`
  font-size: 3.5rem;
  text-align: center;
  text-transform: uppercase;
  font-weight: 350;
  display: inline-block;
  color: #ffffff;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 0.2rem 0.5rem;
  border-radius: 5px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  text-shadow: 2px 2px 3px ${(props) => props.theme.colors.scrumhrBlue};
  margin-bottom: 10rem;
`

export const SectionBookContainer = styled.section`
  position: relative;
  height: 100%;

  @media only screen and (max-width: 56.25em) {
    padding: 10rem 0;
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
`
export const RadioButtonLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 20px;
  padding-bottom: 2rem;
  font-size: 2rem;
`

export const RadioButtonInput = styled.input`
  appearance: none;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.scrumhrBlue}; // Blue outer ring for both checked and unchecked states
  border-radius: 50%;
  cursor: pointer;
  height: 20px;
  width: 20px;
  margin-right: 10px;
  position: relative; // Needed to position the inner circle

  // Remove box-shadow if it's causing an extra ring in unchecked state

  &:checked {
    &:after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 10px; // Inner circle width
      height: 10px; // Inner circle height
      border-radius: 50%;
      background-color: white; // White inner circle
    }
  }

  // Add focus styles for accessibility
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(53, 152, 219, 0.5); // Example focus style
  }
`

export const FormInput = styled.input`
  font-size: 1.5rem;
  font-family: inherit;
  color: inherit;
  padding: 1.5rem 2rem;
  border-radius: 2px;
  background-color: rgba(255, 255, 255, 0.5);
  border: none;
  border-bottom: 3px solid transparent;
  width: 90%;
  display: block;
  transition: all 0.3s;
  margin-bottom: 1rem;

  &:focus {
    outline: none;
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.1);
    border-bottom: 3px solid #55c57a;
    background-color: white;
    color: black;
  }

  &:focus:invalid {
    border-bottom: 3px solid #ff7730;
  }

  &::-webkit-input-placeholder {
    color: #999;
  }

  @media only screen and (max-width: 56.25em) {
    width: 100%;
  }
`

export const FormTextArea = styled.textarea`
  font-size: 1.5rem;
  font-family: inherit;
  color: inherit;
  padding: 1.5rem 2rem;
  border-radius: 2px;
  background-color: rgba(255, 255, 255, 0.5);
  border: none;
  border-bottom: 3px solid transparent;
  width: 90%;
  display: block;
  transition: all 0.3s;

  &:focus,
  &:not(:placeholder-shown) {
    outline: none;
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.1);
    border-bottom: 3px solid #55c57a;
    background-color: white; // Background turns white when field is in focus or has content
    color: black; // Text color turns black when field is in focus or has content
  }

  &:focus:invalid {
    border-bottom: 3px solid #ff7730;
  }

  &::-webkit-input-placeholder {
    color: #999;
  }

  @media only screen and (max-width: 56.25em) {
    width: 100%;
  }
`
