import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

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
  font-family: 'Gilroy', sans-serif;
  text-transform: uppercase;
  font-weight: 800;
  padding: 0.25rem 0.9rem;
  color: #f2f3f4;
  position: relative;

  &:after {
    content: '';
    display: block;
    width: 100%;
    position: absolute;
    top: 50%;
    height: 0;
    z-index: -1;
    background-color: rgba(0, 0, 0, 0.35);
    transition: height 300ms ease;
    transform: translateY(-50%) skewY(-1.5deg);
    transform-origin: center;
  }

  &:hover, &:active, &:focus, &.active {
    color: #f2f3f4;

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
