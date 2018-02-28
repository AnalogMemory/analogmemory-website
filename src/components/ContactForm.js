import React, { Component } from 'react'
import styled from 'styled-components'
import Title from '../components/TitleEl'

const Form = styled.form`
  position: relative;
`
const FieldGroup = styled.div`
  position: relative;
  width: 100%;
  margin: 2rem 0;
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
`
const Input = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: 3px solid #dddddd;
  box-shadow: none;
  color: #131516;
  height: 3rem;
  outline: none;
  font-size: 1.125rem;
  margin-bottom: 0.25rem;
  line-height: normal;
  padding: 0;
  transition: box-shadow 300ms linear;
  width: 100%;
`
const Textarea = Input.withComponent(`textarea`)

class ContactForm extends Component {
  render () {
    return (
      <Form>
        <Title text={`Let’s Talk`} size={`h4`} />
        <FieldGroup>
          <Label>Name</Label>
          <Input type="text" />
        </FieldGroup>
        <FieldGroup>
          <Label>Email</Label>
          <Input type="email" />
        </FieldGroup>
        <FieldGroup>
          <Label>Message</Label>
          <Textarea></Textarea>
        </FieldGroup>
      </Form>
    )
  }
}

export default ContactForm
