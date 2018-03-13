import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ButtonLink = ({ link }) => (
  <Link href={link.url} target={link.target}>
    {link.label}
  </Link>
)

const Link = styled.a`
  display: inline-block;
  padding: 0.625em 1.25em;
  background-color: #009688;
  color: #ffffff;
  transition: box-shadow 300ms ease, transform 300ms ease, color 300ms ease;
  border-radius: 2px;
  transform: translateY(0);
  box-shadow: 0 4px 6px rgba(50,50,93,0.11),
              0 1px 3px rgba(0,0,0,0.08);

  &:hover, &:focus, &:active {
    color: #ffffff;
  }

  &:hover {
    color: #ffffff;
    transform: translateY(-1px);
    box-shadow: 0 7px 14px rgba(50,50,93,0.17),
                0 3px 6px rgba(0,0,0,0.20);
  }
`
export default ButtonLink