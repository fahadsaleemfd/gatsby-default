import styled, { css } from 'styled-components'

const buttonBaseStyles = css`
  text-transform: uppercase;
  text-decoration: none;
  padding: 1.5rem 4rem;
  display: inline-block;
  border-radius: 10rem;
  transition: all 0.2s;
  position: relative;
  font-size: 1.6rem;
  border: none;
  cursor: pointer;
  margin-top: 4rem;
`

const ButtonStyles = styled.a`
  ${buttonBaseStyles}

  ${({ theme }) => {
    const themeColors = theme.colors || {}

    return css`
      background-color: ${themeColors.scrumhrBlue ||
      theme.colors.scrumhrBlue ||
      '#fff'};
      color: #fff;

      &:after {
        background-color: ${themeColors.scrumhrBlue ||
        theme.colors.scrumhrBlue ||
        '#fff'};
      }
    `
  }}

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);

    &::after {
      transform: scaleX(1.4) scaleY(1.6);
      opacity: 0;
    }
  }

  &:active,
  &:focus {
    outline: none;
    transform: translateY(-1px);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  }

  &.btn--white {
    background-color: #fff;
    color: #777;

    &::after {
      background-color: #fff;
    }
  }

  &.btn--green {
    background-color: #55c57a;
    color: #fff;

    &::after {
      background-color: #55c57a;
    }
  }

  &::after {
    content: '';
    display: inline-block;
    height: 100%;
    width: 100%;
    border-radius: 10rem;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transition: all 0.4s;
  }

  &.btn--animated {
    animation: moveInBottom 0.5s ease-out 0.75s;
    animation-fill-mode: backwards;
  }

  &.btn-text:link,
  &.btn-text:visited {
    font-size: 1.6rem;
    color: #55c57a;
    display: inline-block;
    text-decoration: none;
    border-bottom: 1px solid #55c57a;
    padding: 3px;
    transition: all 0.2s;

    &:hover {
      background-color: #55c57a;
      color: #fff;
      box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
      transform: translateY(-2px);
    }

    &:active {
      box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
      transform: translateY(0);
    }
  }
`

export default ButtonStyles
