import React from 'react'
import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'

export const Typography = createGlobalStyle`
  /*ICOMOON-FONTS*/

  @font-face {
    font-family: 'icomoon';
    src: url('../fonts/icomoon.eot?bn57j4');
    src: url('../fonts/icomoon.eot?bn57j4#iefix') format('embedded-opentype'),
      url('../fonts/icomoon.ttf?bn57j4') format('truetype'),
      url('../fonts/icomoon.woff?bn57j4') format('woff'),
      url('../fonts/icomoon.svg?bn57j4#icomoon') format('svg');
    font-weight: normal;
    font-style: normal;
    font-display: block;
  }

  [class^="icon-"], [class*=" icon-"] {
    /* use !important to prevent issues with browser extensions that change fonts */
    font-family: 'icomoon' !important;
    speak: never;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;

    /* Better Font Rendering =========== */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`

export const IconScrumHRIcon = () => (
  <div>
    <ScrumHRIconWrapper>
      <i className='icon-scrumhr_icon' />
    </ScrumHRIconWrapper>
    <ScrumHRIconPath1 />
    <ScrumHRIconPath2 />
    <ScrumHRIconPath3 />
    <ScrumHRIconPath4 />
    <ScrumHRIconPath5 />
    <ScrumHRIconPath6 />
    <ScrumHRIconPath7 />
    <ScrumHRIconPath8 />
    <ScrumHRIconPath9 />
    <ScrumHRIconPath10 />
    {/* Add other paths here */}
  </div>
)

export const ScrumHRIconWrapper = styled.div`
  font-size: 10rem;
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.3), 0 -1px 0 rgba(0, 0, 0, 0.7);
`

export const ScrumHRIconPath1 = styled.i`
  &:before {
    content: '\e900';
    color: rgb(151, 153, 154);
    opacity: 0.974;
  }
`

export const ScrumHRIconPath2 = styled.i`
  &:before {
    content: '\e901';
    margin-left: -1.3837890625em;
    color: rgb(151, 153, 155);
    opacity: 0.994;
  }
  /* Add other paths here */
`
export const ScrumHRIconPath3 = styled.i`
  &:before {
    content: '\e902';
    margin-left: -1.3837890625em;
    color: rgb(151, 153, 155);
    opacity: 0.974;
  }
  /* Add other paths here */
`
export const ScrumHRIconPath4 = styled.i`
  &:before {
    content: '\e903';
    color: rgb(151, 153, 155);
    opacity: 0.98;
  }
  /* Add other paths here */
`
export const ScrumHRIconPath5 = styled.i`
  &:before {
    content: '\e904';
    margin-left: -1.6669921875em;
    color: rgb(151, 153, 155);
    opacity: 0.977;
  }
  /* Add other paths here */
`
export const ScrumHRIconPath6 = styled.i`
  &:before {
    content: '\e905';
    margin-left: -1.6669921875em;
    color: rgb(151, 153, 155);
    opacity: 0.984;
  }
  /* Add other paths here */
`
export const ScrumHRIconPath7 = styled.i`
  &:before {
    content: '\e906';
    margin-left: -1.6669921875em;
    color: rgb(151, 153, 155);
    opacity: 0.982;
  }
  /* Add other paths here */
`
export const ScrumHRIconPath8 = styled.i`
  &:before {
    content: '\e907';
    margin-left: -1.6669921875em;
    color: rgb(151, 153, 155);
    opacity: 0.98;
  }
  /* Add other paths here */
`
export const ScrumHRIconPath9 = styled.i`
  &:before {
    content: '\e908';
    margin-left: -1.6669921875em;
    color: rgb(254, 255, 254);
    opacity: 0.978;
  }
  /* Add other paths here */
`
export const ScrumHRIconPath10 = styled.i`
  &:before {
    content: '\e909';
    margin-left: -1.6669921875em;
    color: rgb(254, 255, 254);
    opacity: 0.976;
  }
  /* Add other paths here */
`
export const IconScrumHRMessage = () => (
  <div>
    <ScrumHRMessageWrapper>
      {' '}
      {/* Renamed to ScrumHRMessageWrapper */}
      <i className='icon-scrumhr-message' />
    </ScrumHRMessageWrapper>
    <ScrumHRMessagePath1 />
    <ScrumHRMessagePath2 />
    <ScrumHRMessagePath3 />
    <ScrumHRMessagePath4 />
    <ScrumHRMessagePath5 />
    <ScrumHRMessagePath6 />
    <ScrumHRMessagePath7 />
    <ScrumHRMessagePath8 />
    <ScrumHRMessagePath9 />
    <ScrumHRMessagePath10 />
    <ScrumHRMessagePath11 />
    <ScrumHRMessagePath12 />
    <ScrumHRMessagePath13 />
    <ScrumHRMessagePath14 />
    <ScrumHRMessagePath15 />
    <ScrumHRMessagePath16 />
    <ScrumHRMessagePath17 />
    <ScrumHRMessagePath18 />
    <ScrumHRMessagePath19 />
    <ScrumHRMessagePath20 />
    <ScrumHRMessagePath21 />
    <ScrumHRMessagePath22 />
    {/* Add other paths here */}
  </div>
)

export const ScrumHRMessageWrapper = styled.div`
  font-size: 18rem;
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.3), 0 -1px 0 rgba(0, 0, 0, 0.7);
`

export const ScrumHRMessagePath1 = styled.i`
  &:before {
    content: '\e90a';
    color: rgb(151, 153, 155);
    opacity: 0.979;
  }
  /* Add other paths here */
`

export const ScrumHRMessagePath2 = styled.i`
  &:before {
    content: '\e90b';
    margin-left: -1.6669921875em;
    color: rgb(151, 153, 155);
    opacity: 0.977;
  }
  /* Add other paths here */
`
export const ScrumHRMessagePath3 = styled.i`
  &:before {
    content: '\e90c';
    margin-left: -1.6669921875em;
    color: rgb(151, 153, 155);
    opacity: 0.984;
  }
  /* Add other paths here */
`
export const ScrumHRMessagePath4 = styled.i`
  &:before {
    content: '\e90d';
    margin-left: -1.6669921875em;
    color: rgb(150, 152, 155);
    opacity: 0.983;
  }
  /* Add other paths here */
`
export const ScrumHRMessagePath5 = styled.i`
  &:before {
    content: '\e90e';
    margin-left: -1.6669921875em;
    color: rgb(151, 153, 155);
    opacity: 0.981;
  }
  /* Add other paths here */
`
export const ScrumHRMessagePath6 = styled.i`
  &:before {
    content: '\e90f';
    margin-left: -1.6669921875em;
    color: rgb(254, 255, 254);
    opacity: 0.978;
  }
  /* Add other paths here */
`
export const ScrumHRMessagePath7 = styled.i`
  &:before {
    content: '\e910';
    margin-left: -1.6669921875em;
    color: rgb(254, 255, 254);
    opacity: 0.976;
  }
  /* Add other paths here */
`
export const ScrumHRMessagePath8 = styled.i`
  &:before {
    content: '\e911';
    margin-left: -1.6669921875em;
    color: rgb(151, 153, 154);
    opacity: 0.84;
  }
  /* Add other paths here */
`
export const ScrumHRMessagePath9 = styled.i`
  &:before {
    content: '\e912';
    margin-left: -1.6669921875em;
    color: rgb(151, 153, 154);
    opacity: 0.928;
  }
  /* Add other paths here */
`
export const ScrumHRMessagePath10 = styled.i`
  &:before {
    content: '\e913';
    margin-left: -1.6669921875em;
    color: rgb(151, 153, 155);
    opacity: 0.934;
  }
  /* Add other paths here */
`
export const ScrumHRMessagePath11 = styled.i`
  &:before {
    content: '\e914';
    margin-left: -1.6669921875em;
    color: rgb(151, 153, 155);
    opacity: 0.937;
  }
  /* Add other paths here */
`
export const ScrumHRMessagePath12 = styled.i`
  &:before {
    content: '\e915';
    margin-left: -1.6669921875em;
    color: rgb(151, 153, 155);
    opacity: 0.948;
  }
  /* Add other paths here */
`
export const ScrumHRMessagePath13 = styled.i`
  &:before {
    content: '\e916';
    margin-left: -1.6669921875em;
    color: rgb(151, 153, 155);
    opacity: 0.929;
  }
  /* Add other paths here */
`
export const ScrumHRMessagePath14 = styled.i`
  &:before {
    content: '\e917';
    margin-left: -1.6669921875em;
    color: rgb(151, 153, 155);
    opacity: 0.95;
  }
  /* Add other paths here */
`
export const ScrumHRMessagePath15 = styled.i`
  &:before {
    content: '\e918';
    margin-left: -1.6669921875em;
    color: rgb(150, 153, 154);
    opacity: 0.96;
  }
  /* Add other paths here */
`
export const ScrumHRMessagePath16 = styled.i`
  &:before {
    content: '\e919';
    margin-left: -1.6669921875em;
    color: rgb(151, 152, 155);
    opacity: 0.931;
  }
  /* Add other paths here */
`
export const ScrumHRMessagePath17 = styled.i`
  &:before {
    content: '\e91a';
    margin-left: -1.6669921875em;
    color: rgb(150, 152, 154);
    opacity: 0.902;
  }
  /* Add other paths here */
`
export const ScrumHRMessagePath18 = styled.i`
  &:before {
    content: '\e91b';
    margin-left: -1.6669921875em;
    color: rgb(150, 152, 154);
    opacity: 0.961;
  }
  /* Add other paths here */
`
export const ScrumHRMessagePath19 = styled.i`
  &:before {
    content: '\e91c';
    margin-left: -1.6669921875em;
    color: rgb(150, 152, 154);
    opacity: 0.947;
  }
  /* Add other paths here */
`
export const ScrumHRMessagePath20 = styled.i`
  &:before {
    content: '\e91d';
    margin-left: -1.6669921875em;
    color: rgb(150, 152, 154);
    opacity: 0.956;
  }
  /* Add other paths here */
`
export const ScrumHRMessagePath21 = styled.i`
  &:before {
    content: '\e91e';
    margin-left: -1.6669921875em;
    color: rgb(151, 153, 155);
    opacity: 0.935;
  }
  /* Add other paths here */
`
export const ScrumHRMessagePath22 = styled.i`
  &:before {
    content: '\e91f';
    margin-left: -1.6669921875em;
    color: rgb(151, 153, 155);
    opacity: 0.931;
  }
  /* Add other paths here */
`
