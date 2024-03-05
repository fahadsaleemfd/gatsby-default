import React, { useState, useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";

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
} from "./SectionBookStyles";

import ButtonStyles from "../styles/ButtonStyles";
import axios from "axios";

const SectionBook = ({ selectedTitle, radioButtonTitle }) => {
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
  `);

  // Initialize a state variable to store the selected radio button value
  const [selectedOption, setSelectedOption] = useState(radioButtonTitle);
  const [sucessMessage, setSuccessMessage] = useState(
    "Your Request has been submitted"
  );
  const [isSent, setIsSent] = useState(false);
  const [formData, setFormData] = useState({
    selectOption: selectedTitle,
    name: "",
    email: "",
    message: selectedTitle,
  });
  // Use useEffect to update selectedOption when selectedTitle changes
  useEffect(() => {
    setSelectedOption(radioButtonTitle);
    setFormData({
      ...formData,
      selectOption: radioButtonTitle,
      message: selectedTitle,
    });
  }, [selectedTitle, radioButtonTitle]);
  const handlerInput = (e) => {
    console.log(e.target.value);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const videoUrl = data?.strapiFormimage?.video?.localFile?.publicURL;

  if (!videoUrl) {
    return <div>Error: Video URL not found!</div>;
  }

  // Handler function for the radio button change event
  const handleRadioChange = (event) => {
    console.log(`Radio button clicked: ${event.target.value}`);
    setSelectedOption(event.target.value);
    setFormData({ ...formData, selectOption: event.target.value });
  };

  const handleSubmit = () => {
    if (formData.selectOption == "" || formData.selectOption == null) {
      alert("Please select an option");
      return;
    } else if (formData.name == "") {
      alert("Please enter name");
      return;
    } else if (formData.email == "") {
      alert("Please enter your email");
      return;
    } else if (formData.message == "" || formData.message == null) {
      alert("Please enter your message");
      return;
    }

    axios
      .post("https://getform.io/f/nelzRjbK", formData, {
        headers: { Accept: "application/json" },
      })
      .then((response) => {
        setIsSent(true);
        alert("Your form is submitted");
        setFormData({
          selectOptions: "",
          name: "",
          email: "",
          message: "",
        });
        console.log(response);
      })
      .catch((error) => console.log(error));
  };

  return (
    <SectionBookContainer id="section-book">
      <BgVideo>
        <BgVideoContent
          autoPlay
          muted
          loop
          onLoadedData={() => console.log("Book Video Loaded")}
          onError={() => console.log("Book Video Failed to Load")}
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser is not supported!
        </BgVideoContent>
      </BgVideo>
      <Container>
        <FormContainer>
          <BookH2>Kontakta oss</BookH2>
          <form
            className="p-10"
            method="post"
            action="http://www.skitrent.se/cgi-bin/FormMail.pl"
            acceptCharset="ISO-8859-1"
            onSubmit={(e) => {
              const originalCharset = document.charset;
              document.charset = "ISO-8859-1";
              window.onbeforeunload = function () {
                document.charset = originalCharset;
              };
            }}
          >
            <div style={{ ...FormElement.style, display: "flex", gap: "40px" }}>
              <RadioButtonLabel>
                <RadioButtonInput
                  type="radio"
                  name="option"
                  value="HR"
                  id="hr"
                  checked={selectedOption === "HR"}
                  onChange={handleRadioChange}
                />
                <label htmlFor="hr">HR</label>
              </RadioButtonLabel>
              <RadioButtonLabel>
                <RadioButtonInput
                  type="radio"
                  name="option"
                  value="Redovisning"
                  id="redovisning"
                  onChange={handleRadioChange}
                  checked={selectedOption === "Redovisning"}
                />
                <label htmlFor="redovisning">Redovisning</label>
              </RadioButtonLabel>
            </div>
            <div style={{ ...FormElement.style, display: "flex", gap: "40px" }}>
              <RadioButtonLabel>
                <RadioButtonInput
                  type="radio"
                  name="option"
                  value="Lön"
                  id="lon"
                  onChange={handleRadioChange}
                  checked={selectedOption === "Lön"}
                />
                <label htmlFor="lon">Lön</label>
              </RadioButtonLabel>
              <RadioButtonLabel>
                <RadioButtonInput
                  type="radio"
                  name="option"
                  value="Rekrytering"
                  id="rekrytering"
                  onChange={handleRadioChange}
                  checked={selectedOption === "Rekrytering"}
                />
                <label htmlFor="rekrytering">Rekrytering</label>
              </RadioButtonLabel>
            </div>
            <div style={FormElement.style}>
              <FormInput
                type="text"
                name="name"
                id="name"
                required
                value={formData.name}
                placeholder="För och efternamn"
                onChange={(e) => handlerInput(e)}
              />
            </div>
            <div style={FormElement.style}>
              <FormInput
                type="email"
                name="email"
                id="email"
                value={formData.email}
                required
                placeholder="Epost-adress"
                onChange={(e) => handlerInput(e)}
              />
            </div>
            <div style={FormElement.style}>
              <FormTextArea
                name="message"
                id="message"
                required
                cols="30"
                value={formData.message}
                onChange={(e) => handlerInput(e)}
                rows="5"
                // value={`${
                //   selectedTitle ? selectedTitle + "\n" : ""
                // }Skriv ditt meddelande...`}
              />
            </div>
            <ButtonStyles onClick={() => handleSubmit()}>Sänd</ButtonStyles>
            {isSent ? <div>{sucessMessage}</div> : null}

            {/* Hidden Inputs */}
            <input type="hidden" name="recipient" value="kontakt@skitrent.se" />
            <input
              type="hidden"
              name="subject"
              id="subject"
              value={selectedTitle ? selectedTitle : ""}
            />
            <input
              type="hidden"
              name="redirect"
              value="http://tahwil.se/sohail/skitrent/tack.html"
            />
            <input
              type="hidden"
              name="missing_fields_redirect"
              value="http://tahwil.se/sohail/skitrent/fel.html"
            />
            <input
              type="hidden"
              name="required"
              value="realname,email,Message,subject"
            />
          </form>
        </FormContainer>
      </Container>
    </SectionBookContainer>
  );
};

export default SectionBook;
