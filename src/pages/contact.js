import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import media from 'styled-media-query'
import Layout from '../components/Layout'
import Title from '../components/TitleEl'
import ContactForm from '../components/ContactForm'

const Section = styled.section`
  width: 100%;
  margin: 0;
  padding: 2em;
`
const TitleHeader = styled.div`
  border-left: 8px solid #1de9b6;
  padding: 1.5rem;
  margin: 0 auto;
  z-index: 1;
  background-color: #ffffff;
  display: inline-block;
  transform: translateX(-8px);

  ${media.greaterThan('medium')`
    transform: translateX(-16px);
    border-left: 16px solid #1de9b6;
    padding: 2rem 3rem;
  `}
`
const Content = styled.div`
  width: 100%;
  margin: 3rem auto 0;
  display: flex;
  flex-wrap: wrap;
  border-top: none;
  position: relative;
  z-index: 2;

  ${media.greaterThan('medium')`
    margin: 4rem auto 0;
  `}
`
const Col = styled.div`
  width: 100%;
  margin: 0 0 2rem 0;
  background-color: #ffffff;
  padding: 2rem;

  ${media.greaterThan('medium')`
    max-width: 35%;
    flex-basis: 35%;
    margin: 0 2rem 0 0;
  `}
`

const ContactPage = props => {
  const page = props.data.contentfulPage
  return (
    <Layout>
      <Section>
        <TitleHeader>
          <Title text={page.title} size={`h1`} margin={`0`} transform={`uppercase`} />
        </TitleHeader>
        <Content>
          <Col>
            <article dangerouslySetInnerHTML={{ __html: page.copy.childMarkdownRemark.html }} />
          </Col>
          <Col>
            <ContactForm />
          </Col>
        </Content>
      </Section>
    </Layout>
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
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
