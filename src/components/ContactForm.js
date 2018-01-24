import React, { Component } from 'react'
import Modal from 'react-modal'

const encode = (data) => {
  return Object.keys(data)
               .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
               .join('&')
}

const customStyles = {
  content : {
    top         : '50%',
    left        : '50%',
    right       : 'auto',
    bottom      : 'auto',
    marginRight : '-50%',
    transform   : 'translate(-50%, -50%)'
  }
}

class ContactForm extends Component {
  state = {
    name: '',
    email: '',
    message: '',
    modalIsOpen: false
  }
  baseState = this.state

  openModal = () => {
    this.setState({ modalIsOpen: true })
  }

  closeModal = () => {
    this.setState({ modalIsOpen: false })
  }

  handleChange = e => this.setState({
    [e.target.name]: e.target.value
  })

  handleSuccess = () => {
    this.setState(this.baseState)
    this.openModal()
  }

  handleForm = e => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...this.state })
    })
    .then(() => this.handleSuccess())
    .catch(error => {
      console.log(error)
    })
    e.preventDefault()
  }

  render() {
    Modal.setAppElement('#___gatsby')

    return (
      <div>
        <form action="/contact/"
              name="contact"
              method="post"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={this.handleForm}>

          <input type="hidden" name="bot-field" />
          <p>
          <label>Your Name:</label>
          <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
          </p>
          <p>
          <label>Your Email:</label>
          <input type="email" name="email" value={this.state.email} onChange={this.handleChange} />
          </p>
          <p>
          <label>Message:</label>
          <textarea name="message" value={this.state.message} onChange={this.handleChange}></textarea>
          </p>
          <p>
          <button type="submit">Send</button>
          </p>
        </form>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Thanks"
        > <a onClick={this.closeModal}>X</a>
          <p>{this.props.thankYouMessage}</p>
        </Modal>
      </div>
    )
  }
}

export default ContactForm
