import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import media from 'styled-media-query'
import Masthead from './Masthead'
import Nav from './Nav'

const HeaderContainer = styled.header`
  width: 100%;
  text-align: center;
  background-color: transparent;
  display: flex;
  align-items: center;
  top: 0;
  left: 0;
  z-index: 100;
  position: relative;
  margin: 1rem auto;

  ${media.greaterThan('medium')`
    position: fixed;
    margin: 0 auto;
  `}
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

const Header = ({ data }) => {
  return (
    <HeaderContainer>
      <HeaderInner>
        <Masthead />
        <Nav />
      </HeaderInner>
    </HeaderContainer>
  )
}

export default Header
