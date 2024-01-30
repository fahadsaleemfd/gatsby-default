import React, { useState, useEffect } from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import {
  SectionBookContainer,
  BgVideo,
  BgVideoContent,
  FormContainer,
  FormElement,
  BookH2,
  Container,
  RadioButtonLabel,
  RadioButtonInput,
  FormInput,
  FormTextArea,
} from './SectionBookStyles'

import ButtonStyles from '../styles/ButtonStyles'

const SectionBook = ({ selectedTitle }) => {
  const data = useStaticQuery(graphql`
    query {
      strapiFormimage {
        image {
          localFile {
            publicURL
          }
        }
        video {
          localFile {
            publicURL
          }
        }
      }
    }
  `)

  // Initialize a state variable to store the selected radio button value
  const [selectedOption, setSelectedOption] = useState(selectedTitle)

  // Use useEffect to update selectedOption when selectedTitle changes
  useEffect(() => {
    setSelectedOption(selectedTitle)
  }, [selectedTitle])

  const videoUrl = data?.strapiFormimage?.video?.localFile?.publicURL

  if (!videoUrl) {
    return <div>Error: Video URL not found!</div>
  }

  // Handler function for the radio button change event
  const handleRadioChange = (event) => {
    console.log(`Radio button clicked: ${event.target.value}`)
    setSelectedOption(event.target.value)
  }

  return (
    <SectionBookContainer id='section-book'>
      <BgVideo>
        <BgVideoContent
          autoPlay
          muted
          loop
          onLoadedData={() => console.log('Book Video Loaded')}
          onError={() => console.log('Book Video Failed to Load')}
        >
          <source
            src={videoUrl}
            type='video/mp4'
          />
          Your browser is not supported!
        </BgVideoContent>
      </BgVideo>
      <Container>
        <FormContainer>
          <BookH2>Kontakta oss</BookH2>
          <form
            method='post'
            action='http://www.skitrent.se/cgi-bin/FormMail.pl'
            acceptCharset='ISO-8859-1'
            onSubmit={(e) => {
              const originalCharset = document.charset
              document.charset = 'ISO-8859-1'
              window.onbeforeunload = function () {
                document.charset = originalCharset
              }
            }}
          >
            <div style={{ ...FormElement.style, display: 'flex', gap: '40px' }}>
              <RadioButtonLabel>
                <RadioButtonInput
                  type='radio'
                  name='option'
                  value='HR'
                  id='hr'
                  checked={selectedOption === 'HR'}
                  onChange={handleRadioChange}
                />
                <label htmlFor='hr'>HR</label>
              </RadioButtonLabel>
              <RadioButtonLabel>
                <RadioButtonInput
                  type='radio'
                  name='option'
                  value='Redovisning'
                  id='redovisning'
                  onChange={handleRadioChange}
                  checked={selectedOption === 'Redovisning'}
                />
                <label htmlFor='redovisning'>Redovisning</label>
              </RadioButtonLabel>
            </div>
            <div style={{ ...FormElement.style, display: 'flex', gap: '40px' }}>
              <RadioButtonLabel>
                <RadioButtonInput
                  type='radio'
                  name='option'
                  value='Lön'
                  id='lon'
                  onChange={handleRadioChange}
                  checked={selectedOption === 'Lön'}
                />
                <label htmlFor='lon'>Lön</label>
              </RadioButtonLabel>
              <RadioButtonLabel>
                <RadioButtonInput
                  type='radio'
                  name='option'
                  value='Rekrytering'
                  id='rekrytering'
                  onChange={handleRadioChange}
                  checked={selectedOption === 'Rekrytering'}
                />
                <label htmlFor='rekrytering'>Rekrytering</label>
              </RadioButtonLabel>
            </div>
            <div style={FormElement.style}>
              <FormInput
                type='text'
                name='name'
                id='name'
                required
                placeholder='För och efternamn'
              />
            </div>
            <div style={FormElement.style}>
              <FormInput
                type='email'
                name='email'
                id='email'
                required
                placeholder='Epost-adress'
              />
            </div>
            <div style={FormElement.style}>
              <FormTextArea
                name='message'
                id='message'
                required
                cols='30'
                rows='5'
                placeholder={`${
                  selectedTitle ? selectedTitle + '\n' : ''
                }Skriv ditt meddelande...`}
              />
            </div>
            <ButtonStyles>Sänd</ButtonStyles>

            {/* Hidden Inputs */}
            <input
              type='hidden'
              name='recipient'
              value='kontakt@skitrent.se'
            />
            <input
              type='hidden'
              name='subject'
              id='subject'
              value={selectedTitle ? selectedTitle : ''}
            />
            <input
              type='hidden'
              name='redirect'
              value='http://tahwil.se/sohail/skitrent/tack.html'
            />
            <input
              type='hidden'
              name='missing_fields_redirect'
              value='http://tahwil.se/sohail/skitrent/fel.html'
            />
            <input
              type='hidden'
              name='required'
              value='realname,email,Message,subject'
            />
          </form>
        </FormContainer>
      </Container>
    </SectionBookContainer>
  )
}

export default SectionBook
