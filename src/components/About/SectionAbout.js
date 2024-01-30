import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import {
  StyledAboutSection,
  UCenterText,
  ContentWrapper,
  Composition,
  AboutGrid,
  AboutH2,
  Image,
} from './SectionAboutStyles'
import { UMarginBottomBig, UMarginBottomSmall } from '../styles/UMarginsStyles'
import ButtonStyles from '../styles/ButtonStyles'
import { StaticImage } from 'gatsby-plugin-image'
import styled from 'styled-components'

const SectionAbout = () => {
  const data = useStaticQuery(graphql`
    query {
      strapiAbout {
        title
        content {
          data {
            childMarkdownRemark {
              html
            }
          }
        }
        images {
          localFile {
            publicURL
          }
        }
      }
    }
  `)

  // console.log('GraphQL Data:', data) // Logging the entire GraphQL query result

  const { title, content, images } = data.strapiAbout
  // const aboutImages = images && images[0] ? images[0].localFile.publicURL : ''
  const aboutImages =
    images && images.length ? images.map((img) => img.localFile.publicURL) : []
  // console.log('Processed Image URLs:', aboutImages)

  const htmlContent = content.data.childMarkdownRemark.html

  const SectionAboutButton = styled(ButtonStyles)`
    margin-left: 8rem;
  `

  return (
    <StyledAboutSection id='section-about'>
      <UMarginBottomBig>
        <UCenterText>
          <AboutH2>{title}</AboutH2>
        </UCenterText>
      </UMarginBottomBig>
      <AboutGrid>
        <ContentWrapper>
          <ContentWrapper dangerouslySetInnerHTML={{ __html: htmlContent }} />
          <UMarginBottomSmall />
          <SectionAboutButton href='#section-book'>
            Kontakta oss
          </SectionAboutButton>
        </ContentWrapper>
        <Composition>
          <Image>
            <img
              as={StaticImage}
              src={aboutImages[0] || '../../images/skitrent-1-large.png'}
              alt=''
            />
          </Image>
          <Image>
            <img
              as={StaticImage}
              src={aboutImages[2] || '../../images/skitrent-1-large.png'}
              alt=''
            />
          </Image>
          <Image>
            <img
              as={StaticImage}
              src={aboutImages[1] || '../../images/skitrent-1-large.png'}
              alt=''
            />
          </Image>
        </Composition>
      </AboutGrid>
    </StyledAboutSection>
  )
}

export default SectionAbout
