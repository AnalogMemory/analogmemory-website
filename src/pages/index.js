import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import media from 'styled-media-query'

const Intro = styled.article`
  background: #fff;
  position: relative;
  width: auto;
  max-width: 84%;
  margin: 1rem auto 1rem;
  bottom: auto;
  left: auto;
  padding: 2rem;

  ${media.greaterThan('medium')`
    position: absolute;
    max-width: 60%;
    margin: 0 auto;
    bottom: 2rem;
    left: 2rem;
    padding: 3rem;
    z-index: 10;
  `}

  p:last-child {
    margin-bottom: 0px;
  }
`

const IndexPage = props => {
  const page = props.data.contentfulPage
  return (
    <Intro dangerouslySetInnerHTML={{ __html: page.copy.childMarkdownRemark.html }} />
  )
}

export default IndexPage

export const indexQuery = graphql`
  query IndexPageQuery {
    contentfulPage(slug: {eq: "index"}) {
      id
      title
      slug
      copy {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
