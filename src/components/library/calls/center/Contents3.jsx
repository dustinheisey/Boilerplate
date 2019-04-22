import React from 'react'
import styled from 'styled-components'
import BtnPrimary from '../../../elements/buttons/Primary'

const StyledContainer = styled.section``
const StyledTagline = styled.h4``
const StyledHeading = styled.h1``
const StyledText = styled.p``

const Contents3 = ({
  tagline,
  heading,
  text,
  link,
  btnText
}) => (
  <StyledContainer>
    <StyledTagline>{tagline}</StyledTagline>
    <StyledHeading>{heading}</StyledHeading>
    <StyledText>{text}</StyledText>
    <BtnPrimary link={link} text={btnText} />
  </StyledContainer>
)

export default Contents3