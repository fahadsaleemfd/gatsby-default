import React, { useEffect, useState } from 'react'
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
  const [radioButtonTitle,setRadioButtonTitle] = useState(null)
  const setRadioTitleOption = (value) => {   
        setRadioButtonTitle(value)
  }

  return (
    <ModalProvider>
      <Layout>
     
        <Navigation />
        <Header />
      
          <SectionCampaign setSelectedTitle={setSelectedTitle} />
          <SectionFeatures setRadioTitleOption={setRadioTitleOption} />
          <SectionAbout /> 
          <div className='flex flex-col lg:gap-40 gap-0'>
          <SectionStories /> 
      
        <SectionBook selectedTitle={selectedTitle} radioButtonTitle={radioButtonTitle} />
       
       
        <Footer /> </div>
      
      </Layout>
    </ModalProvider>
  )
}

export default IndexPage
