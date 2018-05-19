import React, { Component } from 'react'
import styled from 'styled-components'
import TextareaAutosize from 'react-textarea-autosize'
import Title from '../components/TitleEl'

const Form = styled.form`
  position: relative;
`
const FieldGroup = styled.div`
  position: relative;
  width: 100%;
  margin: 2rem 0 2rem;

  &:last-of-type {
    margin-bottom: 0;
  }
`
const Label = styled.label`
  color: #5c5f60;
  font-size: 1.125rem;
  font-weight: 500;
  position: absolute;
  pointer-events: none;
  left: 0;
  top: 0.375rem;
  transition: all 300ms linear;

  &:hover {
    color: #114357;
  }

  ${props => props.isActive && `
    font-size: 0.875rem;
    transform: translateY(-115%);
    color: #bbbbbb;
  `}
`
const Input = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: 2px solid #dddddd;
  box-shadow: none;
  color: #131516;
  height: 3rem;
  outline: none;
  font-size: 1.125rem;
  line-height: normal;
  padding: 0;
  transition: border 300ms linear, box-shadow 300ms linear;
  width: 100%;

  ${props => props.isActive && `
    border-color: #114357;
    box-shadow: 0 2px 0 0 #114357;
    outline: none;
  `}

  ${props => props.type === 'submit' && `
    border-bottom: 4px solid #1de9b6;

    &:hover {
      border-bottom: 8px solid #1de9b6;
    }
  `}
`
const TextareaAutosizeStyled = styled(({isActive, ...props}) => <TextareaAutosize {...props}/>)`
  padding: 1em 0;
  height: auto;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid #dddddd;
  box-shadow: none;
  color: #131516;
  outline: none;
  font-size: 1.125rem;
  line-height: normal;
  transition: border 300ms linear, box-shadow 300ms linear;
  width: 100%;

  ${props => props.isActive && `
    border-color: #114357;
    box-shadow: 0 2px 0 0 #114357;
    outline: none;
  `}
`
const InputSubmit = styled(Input)`
  background-color: ${props => props.disabled ? `#eeeeee` : `#1de9b6`};
  color: #ffffff;
  color: ${props => props.disabled ? `#999999` : `#222222`};
  border: none !important;
`

class ContactForm extends Component {
  state = {
    activeInput: null,
    formValid: false,
    name: '',
    nameValid: false,
    email: '',
    emailValid: false,
    message: ''
  }

  handleInput = (event) => {
    const inputKey = this.state.activeInput
    this.setState({ [inputKey]: event.target.value})

    if (this.state.name) {
      this.setState({ nameValid: true })
    } else {
      this.setState({ nameValid: false })
    }
    if (inputKey === 'email' && this.isEmailValid(event.target.value)) {
      this.setState({ emailValid: true })
    } else {
      this.setState({ emailValid: false })
    }
    if (this.state.nameValid && this.state.emailValid) {
      this.setState({ formValid: true })
    } else {
      this.setState({ formValid: false })
    }
  }

  handleFocus = (inputName) => {
    this.setState({ activeInput: inputName })
  }

  handleBlur = () => {
    this.setState({ activeInput: null })
  }

  isEmailValid = (email) => {
    var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
  }

  render () {
    const { activeInput } = this.state
    return (
      <Form>
        <Title text={`Let’s Talk`} size={`h4`} />
        <FieldGroup>
          <Label isActive={activeInput === `name` || this.state.name != ''}>
            Name
          </Label>
          <Input
            type="text"
            name="name"
            value={this.state.name}
            isActive={activeInput === `name` || this.state.name != ''}
            onChange={this.handleInput}
            onFocus={() => this.handleFocus(`name`)}
            onBlur={this.handleBlur} />
        </FieldGroup>
        <FieldGroup>
          <Label isActive={activeInput === `email` || this.state.email != ''}>
            Email
          </Label>
          <Input
            type="email"
            name="email"
            value={this.state.email}
            isActive={activeInput === `email` || this.state.email != ''}
            onChange={this.handleInput}
            onFocus={() => this.handleFocus(`email`)}
            onBlur={this.handleBlur} />
        </FieldGroup>
        <FieldGroup>
          <Label isActive={activeInput === `message` || this.state.message != ''}>
            Message
          </Label>
          <TextareaAutosizeStyled
            minRows={3}
            onChange={this.handleInput}
            isActive={activeInput === `message` || this.state.message != ''}
            onFocus={() => this.handleFocus(`message`)}
            defaultValue={this.state.message} />
        </FieldGroup>
        <FieldGroup>
          <InputSubmit
            type="submit"
            name="submit"
            value="Send!"
            disabled={!this.state.formValid} />
        </FieldGroup>
      </Form>
    )
  }
}

export default ContactForm
