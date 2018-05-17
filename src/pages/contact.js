import React from 'react'
import styled from 'styled-components'
import Title from '../components/TitleEl'
import ContactForm from '../components/ContactForm'

const Section = styled.section`
  width: 100%;
  margin: 0;
  padding: 2em;
`
const TitleHeader = styled.div`
  border-left: 16px solid #1de9b6;
  padding: 2rem 3rem;
  margin: 0 auto;
  z-index: 1;
  transform: translateX(-16px);
  background-color: #ffffff;
  display: inline-block;
`
const Content = styled.div`
  width: 100%;
  margin: 4rem auto 0;
  display: flex;
  flex-wrap: wrap;
  border-top: none;
  position: relative;
  z-index: 2;
`
const Col = styled.div`
  max-width: 35%;
  width: 100%;
  flex-basis: 35%;
  margin: 0 2rem 0 0;
  background-color: #ffffff;
  padding: 2rem;
`

const ContactPage = props => {
  const page = props.data.contentfulPage
  return (
    <Section>
      <TitleHeader>
        <Title text={page.title} size={`h1`} margin={`0`} transform={`uppercase`} />
      </TitleHeader>
      <Content>
        <Col>
          <article dangerouslySetInnerHTML={{ __html: page.copy.copy }} />
        </Col>
        <Col>
          <ContactForm />
        </Col>
      </Content>
    </Section>
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
