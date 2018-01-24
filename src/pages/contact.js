import React from 'react'
import ContactForm from '../components/ContactForm'

const ContactPage = props => {
  const page = props.data.contentfulPage
  return (
    <div>
      <h1>{page.title}</h1>
      <ContactForm thankYouMessage={`Thanks for your message, We’ll get back to you soon!`} />
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
