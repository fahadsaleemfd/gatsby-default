import styled from 'styled-components'

export const FormGroup = styled.div`
  &:not(:last-child) {
    margin-bottom: 2rem;
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

  @media only screen and (max-width: 56.25em) {
    width: 100%;
  }

  &:focus {
    outline: none;
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.1);
    border-bottom: 3px solid #55c57a;
  }

  &:focus:invalid {
    border-bottom: 3px solid #ff7730;
  }

  &::-webkit-input-placeholder {
    color: #999;
  }
`

export const FormLabel = styled.label`
  font-size: 1.2rem;
  font-weight: 700;
  margin-left: 2rem;
  margin-top: 0.7rem;
  display: block;
  transition: all 0.3s;

  ${FormInput}:placeholder-shown + & {
    opacity: 0;
    visibility: hidden;
    transform: translateY(-4rem);
  }
`

export const FormRadioGroup = styled.div`
  width: 49%;
  display: inline-block;
  padding: 1rem;

  @media only screen and (max-width: 56.25em) {
    width: 100%;
    margin-bottom: 2rem;
  }
`

export const FormRadioInput = styled.input`
  display: none;
`

export const FormRadioLabel = styled.label`
  font-size: 1.6rem;
  cursor: pointer;
  position: relative;
  padding-left: 4.5rem;

  ${FormRadioInput}:checked ~ & .form__radio-button::after {
    opacity: 1;
  }
`

export const FormRadioButton = styled.span`
  height: 3rem;
  width: 3rem;
  border: 5px solid #55c57a;
  border-radius: 50%;
  display: inline-block;
  position: absolute;
  left: 0;
  top: -0.4rem;

  &::after {
    content: '';
    display: block;
    height: 1.3rem;
    width: 1.3rem;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #55c57a;
    opacity: 0;
    transition: opacity 0.2s;
  }
`

export const FormHeading = styled.div`
  h2 {
    color: #777;
  }
`
