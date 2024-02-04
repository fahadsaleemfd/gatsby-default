import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import {
  SectionStoriesContainer,
  Story,
  BgVideo,
  BgVideoContent,
  UCenterText,
  StoryH2,
  StoryShape,
  StoryCaption,
  StoryText,
} from './SectionStoriesStyles'
import { GridContainer } from '../styles/RowColumnStyles'
import { UMarginBottomBig, UMarginBottomSmall } from '../styles/UMarginsStyles'
import { HeadingRef } from '../styles/HeadingStyles'

const SectionStories = () => {
  const data = useStaticQuery(graphql`
    query {
      allStrapiStory {
        edges {
          node {
            company
            title
            content {
              data {
                childMarkdownRemark {
                  html
                }
              }
            }
            quote
            logo {
              localFile {
                publicURL
              }
            }
          }
        }
      }
      strapiStoryvideo {
        video {
          localFile {
            url
          }
        }
      }
    }
  `)

  const videoUrl = data.strapiStoryvideo.video.localFile.url

  return (
    <SectionStoriesContainer id='section-stories'>
      <BgVideo>
        <BgVideoContent
          autoPlay
          muted
          loop
          onLoadedData={() => console.log('Stories Video Loaded')}
          onError={() => console.log('Stories Video Failed to Load')}        >
          <source
            src={videoUrl}
            type='video/mp4'
          />
          Your browser is not supported!
        </BgVideoContent>
      </BgVideo>

      <UMarginBottomBig>
        <UCenterText>
          <StoryH2>Nöjda kunder</StoryH2>
        </UCenterText>
      </UMarginBottomBig>

      {data?.allStrapiStory.edges.map(({ node }) => (
        <GridContainer key={node.company}>
          <Story>
            <StoryShape>
              <img
                src={node.logo.localFile.publicURL}
                alt={node.title}
              />
              <StoryCaption>{node.company}</StoryCaption>
            </StoryShape>
            <StoryText>
              <HeadingRef>{node.title}</HeadingRef>
              <UMarginBottomSmall
                as='p'
                dangerouslySetInnerHTML={{
                  __html: node.content.data.childMarkdownRemark.html,
                }}
              ></UMarginBottomSmall>
              <p>{node.quote}</p>
            </StoryText>
          </Story>
        </GridContainer>
      ))}
    </SectionStoriesContainer>
  )
}

export default SectionStories
