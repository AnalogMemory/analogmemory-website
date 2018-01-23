import React from 'react'
import Link from 'gatsby-link'

const IndexPage = props => {
  const page = props.data.contentfulPage
  return (
    <div>
      <h1>{page.title}</h1>
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
        copy
      }
    }
  }
`
