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
  margin: 0 auto;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;

  @media (max-width: 768px) {
    position: relative;
    margin: 2rem auto;
  }
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
  height: 112px;
  margin: 0 auto;

  a {
    display: block;
    cursor: default;
  }

  svg {
    width: auto;
    height: 100%;
    fill: #fff;
  }
`

const Header = ({ data }) => {
  return (
    <HeaderContainer>
      <HeaderInner>
        <Masthead>
          <SVG src={logoFile} />
        </Masthead>
      </HeaderInner>
    </HeaderContainer>
  )
}

export default Header
