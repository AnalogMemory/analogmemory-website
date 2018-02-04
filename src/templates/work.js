import React from "react"
import styled from 'styled-components'
import Title from '../components/TitleEl'

const Section = styled.section`
  width: 100%;
  margin: 100px 0 0;
  background: #fff;
`
const WorkView = styled.div`
  width: 100%;
  max-width: 75rem;
  margin: 0 auto;
`

const WorkTemplate = props => {
  const work = props.data.contentfulWorks

  return (
    <Section>
      <WorkView key={work.id}>
        <figure>
          <img src={work.featuredImage.sizes.src} alt="" title={work.title}/>
        </figure>
        <Title text={work.title} size={`h3`} />
        <p>
          {work.description.description}
        </p>
      </WorkView>
    </Section>
  )
}

export default WorkTemplate

export const workQuery = graphql`
  query currentWorkQuery($id: String!) {
    contentfulWorks(id: {eq: $id})  {
      id
      title
      slug
      featuredImage {
        sizes(maxWidth: 1600) {
          sizes
          src
          srcSet
        }
      }
      description {
        description
      }
    }
  }
`
