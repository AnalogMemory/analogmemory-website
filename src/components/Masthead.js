import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import SVG from 'react-inlinesvg'
import logoFile from '../images/logo-analogmemory.svg'

const MastheadStyled = styled.figure`
  display: block;
  margin: 0;
`
const MastheadLink = styled(Link)`
  display: flex;
  align-items: center;
  outline: none;
  border: none;

  &:hover {
    border: none;
  }
`
const MastheadLogo = styled(SVG)`
  display: block;
  width: 4.5rem;
  margin-right: 0.5rem;

  svg {
    display: block;
  }
`

const Masthead = () => {
  return (
    <MastheadStyled>
      <MastheadLink to={`/`}>
        <MastheadLogo src={logoFile} />
      </MastheadLink>
    </MastheadStyled>
  )
}

export default Masthead
