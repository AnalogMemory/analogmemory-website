import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Title = ({ text, size, align }) => {
  const Component = size || `h2`
  const StyledTitle = styled(Component)`
    ${size === `h1` ? `font-size: 5rem;` : null}
    ${size === `h2` ? `font-size: 3rem;` : null}
    ${size === `h3` ? `font-size: 2rem;` : null}
    ${align ? `text-align: ${align};` : null}
  `
  return (
    <StyledTitle dangerouslySetInnerHTML={{ __html: text }} />
  )
}

Title.propTypes = {
  text: PropTypes.string.isRequired,
  size: PropTypes.string,
  align: PropTypes.string
}

export default Title
