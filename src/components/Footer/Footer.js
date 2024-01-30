import React from 'react'
import {
  FooterStyles,
  FooterNavigation,
  FooterList,
  FooterItem,
  FooterLink,
  FooterLogoBox,
  FooterCopyright,
} from './FooterStyles'

import { GridContainer, Col } from '../styles/RowColumnStyles' // Adjusted the import
import { useStaticQuery, graphql } from 'gatsby'

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      strapiFooter {
        phone
        email
        adress
        info {
          data {
            info
          }
        }
      }
    }
  `)

  const currentYear = new Date().getFullYear()

  return (
    <FooterStyles id='section-contact-info'>
      <FooterLogoBox>
        <span className='icon-scrumhr-message'>
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
          <span className='path11'></span>
          <span className='path12'></span>
          <span className='path13'></span>
          <span className='path14'></span>
          <span className='path15'></span>
          <span className='path16'></span>
          <span className='path17'></span>
          <span className='path18'></span>
          <span className='path19'></span>
          <span className='path20'></span>
          <span className='path21'></span>
          <span className='path22'></span>
        </span>
      </FooterLogoBox>
      <GridContainer className='two-columns'>
        {' '}
        {/* Replaced Row with GridContainer and added a className */}
        <Col>
          {' '}
          {/* Removed col='1-of-2' as it's not needed in the new grid layout */}
          <FooterNavigation>
            <FooterList>
              <FooterItem>
                <FooterLink href={`tel:${data.strapiFooter.phone}`}>
                  Tel: {data.strapiFooter.phone}
                </FooterLink>
              </FooterItem>
              <FooterItem>
                <FooterLink href={`mailto:${data.strapiFooter.email}`}>
                  {data.strapiFooter.email}
                </FooterLink>
              </FooterItem>
              <FooterItem>
                <FooterLink href='#section-book'>
                  {data.strapiFooter.adress}
                </FooterLink>
              </FooterItem>
              <FooterItem>
                <FooterLink href='mailto:sohail.hasware@gmail.com'>
                  designed by Sohail Hasware
                </FooterLink>
              </FooterItem>
            </FooterList>
          </FooterNavigation>
        </Col>
        <Col>
          {' '}
          {/* Removed col='1-of-2' as it's not needed in the new grid layout */}
          <FooterCopyright>
            Copyright © {currentYear}. {data.strapiFooter.info.data.info}
            <span>
              {' '}
              <FooterLink href='#section-hero'>Åter till topp</FooterLink>{' '}
            </span>
          </FooterCopyright>
        </Col>
      </GridContainer>
    </FooterStyles>
  )
}

export default Footer
