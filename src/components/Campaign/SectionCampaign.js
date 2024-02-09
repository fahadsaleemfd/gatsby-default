import React, { useState, useEffect } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import {
  GridContainer,
  SingleCardContainer,
  CardFront,
  CardHeading,
  CardBack,
  Dates,
  CardBackHeading,
  CardBackContent,
  GridButton,
  CardBackContentWrapper,
  HeadingSecondary,
} from './SectionCampaignStyles'
import Popup from './Popup'

const SectionCampaign = ({ setSelectedTitle }) => {
  const [isActive, setIsActive] = useState(false)
  const [popupContent, setPopupContent] = useState({})

  useEffect(() => {
    if (!isActive) {
      setPopupContent({}) // Reset popup content when popup is closed
    }
  }, [isActive])

  const togglePopup = (content = null) => {
    setIsActive(!isActive)
    if (content) {
      setPopupContent(content)
    }
  }

  // Inside SectionCampaign component
  const handleSelectTitle = (title) => {
    setSelectedTitle(title) // Assuming setSelectedTitle is passed from index.js
  }

  // Fetch data using GraphQL query
  const data = useStaticQuery(graphql`
    query {
      allStrapiCampaign {
        edges {
          node {
            id
            title
            image {
              localFile {
                publicURL
              }
            }
            StartDate
            EndDate
            list {
              list
            }
            Conditions {
              data {
                childMarkdownRemark {
                  html
                }
              }
            }
            ContentImage {
              localFile {
                publicURL
              }
            }
          }
        }
      }
    }
  `)

  // Get the current date
  const currentDate = new Date()

  // Calculate spans based on the number of cards and expired campaigns
  const calculateSpan = (index, totalCards) => {
    let remainingCards = totalCards - index

    // Iterate through campaigns to find the expired ones
    data.allStrapiCampaign.edges.forEach((edge, i) => {
      const { node } = edge
      const campaignEndDate = new Date(node.EndDate)

      // Check if the campaign has expired
      if (campaignEndDate < currentDate) {
        remainingCards--
      }
    })

    // Calculate span based on remaining cards
    if (remainingCards === 3 && index < 2) {
      return 2 // First two cards take up two columns each
    }

    if (remainingCards % 2 === 1 && index === totalCards - 1) {
      return 4 // Last card spans all 4 columns if the total number of cards is odd
    }

    if (remainingCards % 2 === 0 && remainingCards < 4) {
      return 4 / remainingCards // Even cards left but less than 4 should divide columns evenly
    }

    return 1 // By default, each card takes up one column
  }

  return (
    <GridContainer id='section-campaigns'>
      <HeadingSecondary>Våra kampanjer</HeadingSecondary>
      {data.allStrapiCampaign.edges.map((edge, index) => {
        const { node } = edge
        const { id, title, StartDate, EndDate, list, image } = node
        const popupData = {
          title,
          conditionsHtml: node.Conditions.data.childMarkdownRemark.html,
          contentImages: node.ContentImage.map((image) => ({
            publicURL: image.localFile.publicURL,
          })),
        }

        return (
          <SingleCardContainer
            key={id}
            span={calculateSpan(index, data.allStrapiCampaign.edges.length)}
          >
            <CardFront>
              <img
                src={image.localFile.publicURL}
                alt={title}
              />
              <CardHeading>{title}</CardHeading>
              <Dates>
                <span>Start Date: {StartDate}</span>
                <span>End Date: {EndDate}</span>
              </Dates>
              <ul>
                {list.map((item, itemIndex) => (
                  <li key={itemIndex}>{item.list}</li>
                ))}
              </ul>
            </CardFront>
            <CardBack>
              <CardBackHeading>OBS!</CardBackHeading>
              <CardBackContentWrapper>
                <CardBackContent>Läs</CardBackContent>
                <CardBackContent>vilkoren</CardBackContent>
              </CardBackContentWrapper>
              <GridButton onClick={() => togglePopup(popupData)}>
                Mer info
              </GridButton>
            </CardBack>
          </SingleCardContainer>
        )
      })}
      <Popup
        isActive={isActive}
        onClose={() => togglePopup()}
        {...popupContent}
        onSelectTitle={handleSelectTitle}
      />
    </GridContainer>
  )
}

export default SectionCampaign
