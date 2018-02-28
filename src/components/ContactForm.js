import React, { Component } from 'react'
import styled from 'styled-components'
import Title from '../components/TitleEl'

const Form = styled.form`
  position: relative;
`
const FieldGroup = styled.div`
  position: relative;
  width: 100%;
  margin: 2rem 0 2rem;
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
`
const Textarea = Input.withComponent(`textarea`)
const TextareaStyled = Textarea.extend`
  padding: 1em 0;
  height: auto;
  color: #131516;
`

class ContactForm extends Component {
  state = {
    activeInput: null
  }

  handleFocus = (inputName) => {
    this.setState({ activeInput: inputName })
  }

  handleBlur = () => {
    this.setState({ activeInput: null })
  }

  render () {
    const { activeInput } = this.state
    return (
      <Form>
        <Title text={`Let’s Talk`} size={`h4`} />
        <FieldGroup>
          <Label isActive={activeInput === `name`}>Name</Label>
          <Input type="text" name="name" isActive={activeInput === `name`} onFocus={() => this.handleFocus(`name`)} onBlur={this.handleBlur} />
        </FieldGroup>
        <FieldGroup>
          <Label isActive={activeInput === `email`}>Email</Label>
          <Input type="email" name="email" isActive={activeInput === `email`} onFocus={() => this.handleFocus(`email`)} onBlur={this.handleBlur} />
        </FieldGroup>
        <FieldGroup index={2}>
          <Label isActive={activeInput === `message`}>Message</Label>
          <TextareaStyled name="message" isActive={activeInput === `message`} onFocus={() => this.handleFocus(`message`)} onBlur={this.handleBlur}></TextareaStyled>
        </FieldGroup>
      </Form>
    )
  }
}

export default ContactForm
