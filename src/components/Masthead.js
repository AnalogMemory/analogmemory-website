import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import media from 'styled-media-query'
import SVG from 'react-inlinesvg'
import Title from './TitleEl'
import logoFile from '../images/logo-analogmemory.svg'

const MastheadStyled = styled.figure`
  display: block;
  margin: 0;
`
const MastheadLink = styled(Link)`
  display: flex;
  align-items: center;
  color: #f2f3f4;
`
const MastheadLogo = styled(SVG)`
  display: block;
  width: 2rem;
  margin-right: 0.375rem;

  svg {
    display: block;
    fill: #f2f3f4;
  }
`
const LogoType = styled.h1`
  text-transform: uppercase;
  font-size: 1rem;
  margin: 0;
  color: #f2f3f4;
`

const Masthead = props => {
  return (
    <MastheadStyled>
      <MastheadLink to={`/`}>
        <MastheadLogo src={logoFile} />
        <LogoType>Analog Memory</LogoType>
      </MastheadLink>
    </MastheadStyled>
  )
}

export default Masthead
