import React from 'react'

const ContactPage = props => {
  const page = props.data.contentfulPage
  return (
    <div>
      <h1>{page.title}</h1>
    </div>
  )
}

export default ContactPage

export const indexQuery = graphql`
  query currentPageQuery {
    contentfulPage(slug: {eq: "contact"}) {
      id
      title
      slug
      copy {
        copy
      }
    }
  }
`
