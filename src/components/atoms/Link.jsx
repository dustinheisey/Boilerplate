import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const StyledInternal = styled(Link)`
  text-decoration: none;
  color: var(--link);
  transition: all 0.5s;
  margin: var(--sm);

  &:hover {
    color: var(--link-hover);
  }
`
const StyledExternal = styled.a`
  text-decoration: none;
  color: var(--link);
  transition: all 0.5s;

  &:hover {
    color: var(--link-hover);
  }
`

const Links = ({ link, children, external }) => {
  if (external) {
    return (
      <StyledExternal
        href={link}
        target='_blank'
        rel='noreferrer noopener'
      >
        {children}
      </StyledExternal>
    )
  }
  return (
    <StyledInternal to={link}>{children}</StyledInternal>
  )
}

export default Links