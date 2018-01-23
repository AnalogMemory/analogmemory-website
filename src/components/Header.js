import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import SVG from 'react-inlinesvg'
import logoFile from '../images/logo-analogmemory.svg'

const HeaderContainer = styled.header`
  width: 100%;
  text-align: center;
  background-color: transparent;
  display: flex;
  margin: 0;
  align-items: center;
  position: fixed;
  z-index: 100;
`
const HeaderInner = styled.div`
  max-width: 90rem;
  width: 100%;
  padding: 1rem 2rem;
  display: flex;
  margin: auto;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`
const Masthead = styled.figure`
  display: block;
  width: 100%;
  max-width: 192px;
  margin: 0;

  svg {
    fill: #000;
  }
`

const Header = ({ data }) => {
  return (
    <HeaderContainer>
      <HeaderInner>
        <Masthead>
          <Link to="/">
            <SVG src={logoFile} />
          </Link>
        </Masthead>
      </HeaderInner>
    </HeaderContainer>
  )
}

export default Header
