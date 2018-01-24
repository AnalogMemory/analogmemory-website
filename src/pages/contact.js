import React from 'react'

const ContactPage = props => {
  const page = props.data.contentfulPage
  return (
    <div>
      <h1>{page.title}</h1>
      <form action="/contact/?success=true" 
            name="contact"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field">
        <input type="hidden" name="form-name" value="contact" />
        <p>
          <label>Your Name: <input type="text" name="name" /></label>
        </p>
        <p>
          <label>Your Email: <input type="email" name="email" /></label>
        </p>
        <p>
          <label>Message: <textarea name="message"></textarea></label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
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
