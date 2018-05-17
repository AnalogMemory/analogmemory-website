import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Title = ({ text, size, align, margin, transform, color }) => {
  const Component = size || `h2`
  const StyledTitle = styled(Component)`
    position: relative;
    z-index: 2;
    font-weight: 700;

    ${size === `h1` && `font-size: 3.5rem;`}
    ${size === `h2` && `font-size: 2.5rem;`}
    ${size === `h3` && `font-size: 2rem;`}
    ${align && `text-align: ${align};`}
    ${margin && `margin: ${margin};`}
    ${transform && `text-transform: ${transform};`}
    ${color && `color: ${color};`}
  `
  return (
    <StyledTitle dangerouslySetInnerHTML={{ __html: text }} />
  )
}

Title.propTypes = {
  text: PropTypes.string.isRequired,
  size: PropTypes.string,
  align: PropTypes.string,
  margin: PropTypes.string,
  transform: PropTypes.string,
  color: PropTypes.string
}

export default Title
