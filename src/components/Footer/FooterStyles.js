import styled from 'styled-components'

export const FooterStyles = styled.footer`
  background-color: #333;
  padding: 10rem 0;
  font-size: 1.4rem;
  color: #f7f7f7;
  padding: 0rem 3rem;

  @media only screen and (max-width: 56.25em) {
    padding: 8rem 0;
  }
`

export const FooterLogoBox = styled.div`
  text-align: center;
  margin-bottom: 8rem;

  @media only screen and (max-width: 56.25em) {
    margin-bottom: 6rem;
  }
`

export const FooterNavigation = styled.div`
  border-top: 1px solid #777;
  padding-top: 2rem;
  display: inline-block;

  @media only screen and (max-width: 56.25em) {
    width: 100%;
    text-align: center;
  }
`

export const FooterList = styled.ul`
  list-style: none;
`

export const FooterItem = styled.li`
  display: inline-block;

  &:not(:last-child) {
    margin-right: 1.5rem;
  }
`

export const FooterLink = styled.a`
  color: #f7f7f7;
  background-color: #333;
  text-decoration: none;
  text-transform: uppercase;
  display: inline-block;
  transition: all 0.2s;

  &:hover,
  &:active {
    color: #55c57a;
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.4);
    /*transform: rotate(5deg) scale(1.3);*/
  }
`

export const FooterCopyright = styled.div`
  border-top: 1px solid #777;
  padding-top: 2rem;
  width: 80%;
  float: right;

  @media only screen and (max-width: 56.25em) {
    width: 100%;
    float: none;
  }
`
