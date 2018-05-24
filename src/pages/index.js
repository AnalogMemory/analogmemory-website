import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import media from 'styled-media-query'
import BgNoise from '../images/noise.svg'

const Intro = styled.article`
  position: relative;
  width: auto;
  max-width: 84%;
  margin: 4rem auto 1rem;
  bottom: auto;
  left: auto;
  padding: 1.5rem;
  border-left: 8px solid #1de9b6;
  background-color: #ffffff;

  ${media.greaterThan('medium')`
    border-left: 16px solid #1de9b6;
    position: absolute;
    max-width: 60%;
    margin: 0 auto;
    bottom: 12%;
    left: 2rem;
    padding: 3rem;
    z-index: 10;
    transform: translateX(-16px);
  `}

  p:last-child {
    margin-bottom: 0px;
  }
`
const BackgroundNoise = styled.div`
  position: absolute;
  z-index: -1;
  pointer-events: none;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(${BgNoise}) no-repeat center;
  background-size: cover;
`

const IndexPage = props => {
  const page = props.data.contentfulPage
  const workLink = `<a class="button" href="/works/">View Works</a>`
  return (
    <div>
      <Intro dangerouslySetInnerHTML={{ __html: page.copy.childMarkdownRemark.html + workLink }} />
      <BackgroundNoise />
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
