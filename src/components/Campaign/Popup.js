import React from 'react'
import {
  StyledModal,
  ModalBackground,
  PopupContainer,
  LeftColumn,
  RightColumn,
  ImageContainer,
  Heading,
  SubHeading,
  ContentContainer,
  CloseButton,
  GridButton,
} from './PopupStyles'

const Popup = ({
  isActive,
  onClose,
  title,
  conditionsHtml,
  contentImages,
  onSelectTitle,
}) => {
  // console.log('Content Images:', contentImages)
  const image1 =
    contentImages?.[0]?.publicURL || 'https://via.placeholder.com/150'
  const image2 =
    contentImages?.[1]?.publicURL || 'https://via.placeholder.com/150'

  return (
    <>
      <ModalBackground
        className={isActive ? 'active' : ''}
        onClick={onClose}
      />
      <StyledModal
        isOpen={isActive}
        onBackgroundClick={onClose}
        onEscapeKeydown={onClose}
        className={isActive ? 'active' : ''}
      >
        <PopupContainer>
          <LeftColumn>
            <ImageContainer
              src={image1}
              alt='Content Image 1'
            />
            <ImageContainer
              src={image2}
              alt='Content Image 2'
            />
          </LeftColumn>
          <RightColumn>
            <CloseButton onClick={onClose}>&times;</CloseButton>
            <Heading>{title}</Heading>
            <SubHeading>
              OBS! LÄS NOGA VILKOREN SOM GÄLLER FÖR DENNA PAKET
            </SubHeading>
            <ContentContainer
              dangerouslySetInnerHTML={{ __html: conditionsHtml || '' }}
            />
            <GridButton
              href='#section-book'
              onClick={() => {
                onSelectTitle(title)
                onClose()
              }}
            >
              Boka nu
            </GridButton>
          </RightColumn>
        </PopupContainer>
      </StyledModal>
    </>
  )
}

export default Popup
