import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const NavStyled = styled.nav`
  display: block;
  margin: 0;
`

const Nav = props => {
  const navData = [
    { "title": "Works", "path": "/works/" },
    { "title": "Contact", "path": "/contact/" }
  ]
  return (
    <NavStyled>
      <ul>
      {navData.map(nav => (
        <li>
          <Link to={nav.path}>
            {nav.title}
          </Link>
        </li>
      ))}
      </ul>
    </NavStyled>
  )
}

export default Nav
