import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Intro = styled.article`
  width: 100%;
  max-width: 50%;
  margin: 0 auto;
  position: absolute;
  bottom: 2rem;
  left: 2rem;
  z-index: 10;
  padding: 3rem 3rem;
  background: #fff;

  @media (max-width: 768px) {
    position: relative;
    bottom: auto;
    left: auto;
    margin: 3rem auto;
    padding: 2rem;
    max-width: 80%;
  }

  h1 {
    margin-bottom: 0.5rem;
  }

  p:last-child {
    margin-bottom: 0px;
  }
`

const IndexPage = props => {
  const page = props.data.contentfulPage
  return (
    <div>
      <Intro dangerouslySetInnerHTML={{ __html: page.copy.childMarkdownRemark.html }} />
    </div>
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
