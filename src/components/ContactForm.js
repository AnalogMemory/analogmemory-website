import React, { Component } from 'react'

const encode = (data) => {
  return Object.keys(data)
               .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
               .join('&')
}

class ContactForm extends Component {
  handleChange = e => this.setState({
    [e.target.name]: e.target.value
  })

  handleForm = e => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...this.state })
    })
    .then(() => {
      console.log('form submitted');
    })
    .catch(error => {
      console.log(error)
    })
    e.preventDefault()
  }

  render() {
    return (
      <form action="/contact/"
            name="contact"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={this.handleForm}>

        <input type="hidden" name="bot-field" />
        <p>
          <label>Your Name:</label>
          <input type="text" name="name" onChange={this.handleChange} />
        </p>
        <p>
          <label>Your Email:</label>
          <input type="email" name="email" onChange={this.handleChange} />
        </p>
        <p>
          <label>Message:</label>
          <textarea name="message" onChange={this.handleChange}></textarea>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    )
  }
}

export default ContactForm
