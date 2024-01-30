import styled from 'styled-components'

// The GridContainer is a styled div element that serves as a grid container.
// It has a maximum width, centered margins, and uses the CSS grid layout.
// The gap property sets the space between grid cells both vertically and horizontally.
// At screen widths of 56.25em (approximately 900px) and below, the maximum width is set to 50rem (800px)
// and padding is added to the left and right of the grid.
// The 'two-columns', 'three-columns', and 'four-columns' classes are used to define the number of columns in the grid.
const GridContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  display: grid;
  gap: 6rem;

  @media only screen and (max-width: 56.25em) {
    max-width: 50rem;
    padding: 0 3rem;
    gap: 6rem;
  }

  &.two-columns {
    grid-template-columns: repeat(2, 1fr);
  }

  &.three-columns {
    grid-template-columns: repeat(3, 1fr);
  }

  &.four-columns {
    grid-template-columns: repeat(4, 1fr);
  }
`

// The Col is a styled div element that represents a column in the grid.
// The 'col-span-2', 'col-span-3', and 'col-span-4' classes are used to define the number of columns the column should span.
// At screen widths of 56.25em (approximately 900px) and below, a margin is added to the bottom of all columns except the last one.
const Col = styled.div`
  &.col-span-2 {
    grid-column: span 2;
  }

  &.col-span-3 {
    grid-column: span 3;
  }

  &.col-span-4 {
    grid-column: span 4;
  }

  @media only screen and (max-width: 56.25em) {
    &:not(:last-child) {
      margin-bottom: 6rem;
    }
  }
`
export { GridContainer, Col }
