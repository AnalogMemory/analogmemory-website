import React from 'react'
import styled from 'styled-components'

const ButtonLink = ({ link }) => (
  <Link href={link.url} target={link.target}>
    {link.label}
  </Link>
)

const Link = styled.a`
  display: inline-block;
  padding: 0.625em 0;
  transition: border 300ms ease, color 300ms ease;
  transform: translateY(0);
  border-bottom: 4px solid #1de9b6;
  color: #373D3F;

  &:hover, &:focus, &:active {
    color: #00b585;
  }

  &:hover {
    border-bottom: 8px solid #1de9b6;
  }
`
export default ButtonLink