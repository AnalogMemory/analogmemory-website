import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import media from 'styled-media-query'
import SVG from 'react-inlinesvg'
import logoFile from '../images/logo-analogmemory.svg'

const MastheadStyled = styled.figure`
  display: block;
  width: 100px;
  height: auto;
  margin: 0 auto;

  svg {
    width: 100%;
    height: auto;
    fill: #fff;
  }
`

const Masthead = props => {
  return (
    <MastheadStyled>
      <Link to={`/`}>
        <SVG src={logoFile} />
      </Link>
    </MastheadStyled>
  )
}

export default Masthead
