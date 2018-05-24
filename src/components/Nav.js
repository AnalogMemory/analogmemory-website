import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import media from 'styled-media-query'

const NavStyled = styled.nav`
  display: block;
  margin: 0;
`
const NavUl = styled.ul`
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
`
const NavLi = styled.li`
  list-style: none;
  margin: 0 0 0 1rem;
`
const NavLink = styled(Link)`
  font-weight: 700;
  padding: 0.25rem 0.5rem;
  letter-spacing: 0.0625rem;
  text-transform: uppercase;
  position: relative;
  font-size: 1.125rem;
  outline: none;
  border: none;

  ${media.greaterThan('medium')`
    font-size: 1.25rem;
    padding: 0.25rem 0.9rem;
  `}

  &:after {
    content: '';
    display: block;
    width: 100%;
    position: absolute;
    top: 50%;
    height: 0;
    z-index: -1;
    background-color: #1de9b6;
    transition: height 300ms ease;
    transform: translateY(-50%) skewY(-1.5deg);
    transform-origin: center;
  }

  &:hover, &:active, &:focus, &.active {
    border: none;

    &:after {
      height: 100%;
    }
  }
`

const Nav = props => {
  const navData = [
    { "id": 1, "title": "Works", "path": "/works/" },
    { "id": 2, "title": "Contact", "path": "/contact/" }
  ]
  return (
    <NavStyled>
      <NavUl>
        {navData.map(nav => (
          <NavLi key={nav.id}>
            <NavLink to={nav.path} activeClassName="active">
              {nav.title}
            </NavLink>
          </NavLi>
        ))}
      </NavUl>
    </NavStyled>
  )
}

export default Nav
