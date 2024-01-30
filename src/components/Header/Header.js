import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import {
  ParallaxContainer,
  ParallaxBackground,
  ParallaxLayerForest,
  ParallaxLayerRock,
  HeaderLogoBox,
  HeaderTextBox,
  HeadingPrimaryMain,
  HeadingPrimarySub,
  ButtonStyles,
} from './HeaderStyles' // Update the import paths as necessary

import forestImage from '../../images/forest_transparent.png'
import rockImage from '../../images/rock-mountaineern-right.png'
import defaultBgImage from '../../images/bg.jpg' // Default background image

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      strapiHero {
        title
        subTitle {
          data {
            childMarkdownRemark {
              html
            }
          }
        }
        image {
          localFile {
            publicURL
          }
        }
      }
    }
  `)

  // Destructure the necessary data from the GraphQL query
  const { title, subTitle, image } = data.strapiHero
  const bgImage =
    image && image.localFile ? image.localFile.publicURL : defaultBgImage
  const htmlContent = subTitle.data.childMarkdownRemark.html
  const bgStyle = bgImage
    ? `linear-gradient(to right bottom, rgba(126, 213, 111, 0.1), rgba(40, 112, 200, 0.8)), url("${bgImage}")`
    : 'none'

  return (
    <ParallaxContainer id='section-hero'>
      <HeaderLogoBox>
        <span className='icon-scrumhr_icon header__logo'>
          <span className='path1'></span>
          <span className='path2'></span>
          <span className='path3'></span>
          <span className='path4'></span>
          <span className='path5'></span>
          <span className='path6'></span>
          <span className='path7'></span>
          <span className='path8'></span>
          <span className='path9'></span>
          <span className='path10'></span>
        </span>
      </HeaderLogoBox>

      <ParallaxBackground bgImage={bgImage} />

      <ParallaxLayerForest
        src={forestImage}
        alt='Forest'
      />
      <ParallaxLayerRock
        src={rockImage}
        alt='Rock'
      />

      <HeaderTextBox>
        <HeadingPrimaryMain>{title}</HeadingPrimaryMain>
        <HeadingPrimarySub dangerouslySetInnerHTML={{ __html: htmlContent }} />
      </HeaderTextBox>

      <ButtonStyles href='#section-services'>Våra tjänster</ButtonStyles>
    </ParallaxContainer>
  )
}

export default Header
