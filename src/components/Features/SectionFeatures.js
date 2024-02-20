import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import {
  MainContainer,
  Card,
  CardHeading,
  CardContent,
  UCenterText,
  CardsContainer,
} from './SectionFeaturesStyles'
import { HeadingTertiary, HeadingSecondary } from '../styles/HeadingStyles'
import { UMarginBottomSmall, UMarginBottomBig } from '../styles/UMarginsStyles'
import ButtonStyles from '../styles/ButtonStyles'

const SectionFeatures = ({ setSelectedTitle }) => {
  const data = useStaticQuery(graphql`
    query {
      allStrapiService {
        edges {
          node {
            title
            sub_title
            content {
              data {
                childMarkdownRemark {
                  html
                }
              }
            }
          }
        }
      }
      strapiServiceimage {
        image {
          localFile {
            publicURL
          }
        }
      }
    }
  `)

  const FeatureHeadingTertiary = styled(HeadingTertiary)`
    text-align: center;
  `
  const FeatureHeadingSecondary = styled(HeadingSecondary)`
    color: #ffffff;
    background-color: rgba(255, 255, 255, 0.1);

    &:hover {
      transform: none; // cancels any transformation on hover
      text-shadow: none;
    }
  `
  const featureBoxes = data.allStrapiService.edges.map(({ node }) => (
    <Card key={node.title}>
      <FeatureHeadingTertiary>
        <UMarginBottomSmall>{node.title}</UMarginBottomSmall>
      </FeatureHeadingTertiary>
      <CardHeading>{node.sub_title}</CardHeading>
      <CardContent
        dangerouslySetInnerHTML={{
          __html: node.content.data.childMarkdownRemark.html,
        }}
      />

      {/* Pass the title to SectionBook */}
      {/* <SectionBook selectedTitle={node.title} /> */}
      <ButtonStyles
        href='#section-book'
        onClick={() => setSelectedTitle(node.title)}
      >
        Beställ
      </ButtonStyles>
    </Card>
  ))

  return (
    <MainContainer id='section-services'>
      <img
      className='hidden md:block'
        src={data.strapiServiceimage.image.localFile.publicURL}
        alt='Background Image'
        style={{
          position: 'absolute',
          width: '200%',
          height: '200%',
          top: 0,
          left: 0,
          zIndex: -1,
          objectFit: 'cover',
          objectPosition: 'center',
        }}
      />

      <UCenterText>
        <div style={{transform: "skewY(7deg)"}}>
        <UMarginBottomBig>
          <FeatureHeadingSecondary>VÅRA Tjänster</FeatureHeadingSecondary>
        </UMarginBottomBig>
        </div>
      
      </UCenterText>
      <CardsContainer >{featureBoxes}</CardsContainer>
    </MainContainer>
  )
}

export default SectionFeatures
