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
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 3rem 2rem;
  z-index: 1;

  &:after {
    content: '';
    display: block;
    z-index: 1;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.85);
    left: 0;
    top: 0;
    width: 100%;
    height: 150%;
    pointer-events: none;
    transform: skewY(-1deg);
  }
`
const Content = styled.div`
  width: 100%;
  background: #fff;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  border: 2em solid #fff;
  border-top: none;
  position: relative;
  z-index: 2;
`
const Col = styled.div`
  max-width: 35%;
  width: 100%;
  flex-basis: 35%;
  margin: 2rem 1rem;
`

const ContactPage = props => {
  const page = props.data.contentfulPage
  return (
    <Section>
      <TitleHeader>
        <Title text={page.title} size={`h1`} color={`#1de9b6`} margin={`auto`} transform={`uppercase`} />
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
