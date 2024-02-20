import React, { useState } from 'react'
import Layout from '../components/Layout'
import Navigation from '../components/Navigation/Navigation'
import Header from '../components/Header/Header'
import SectionCampaign from '../components/Campaign/SectionCampaign'
import SectionFeatures from '../components/Features/SectionFeatures'
import SectionAbout from '../components/About/SectionAbout'
import SectionBook from '../components/Book/SectionBook'
import SectionStories from '../components/Story/SectionStories'
import Footer from '../components/Footer/Footer'
import { ModalProvider } from 'styled-react-modal'

const IndexPage = () => {
  const [selectedTitle, setSelectedTitle] = useState(null)

  return (
    <ModalProvider>
      <Layout>
     
        <Navigation />
        <Header />
      
          <SectionCampaign setSelectedTitle={setSelectedTitle} />
          <SectionFeatures setSelectedTitle={setSelectedTitle} />
          <SectionAbout /> 
          
          <SectionStories /> 
        
        <SectionBook selectedTitle={selectedTitle} />
        <Footer />
      
      </Layout>
    </ModalProvider>
  )
}

export default IndexPage
