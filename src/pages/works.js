import React from "react"
import Link from 'gatsby-link'
import styled from 'styled-components'
import Title from '../components/TitleEl'

const Section = styled.section`
  width: 100%;
  margin: 100px 0 0;
  background: #fff;
`
const WorkCardWrap = styled.div`
  width: 100%;
  max-width: 75rem;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`
const WorkCard = styled.div`
  max-width: 33.33%;
  width: 100%;
  flex-basis: 33.33%;
  border: 1px solid red;
`

const Works = props => {
  const works_data = props.data.allContentfulWorks.edges
  return (
    <Section>
      <Title text={`Works`} size={`h1`} />
      <WorkCardWrap>
        {works_data.map(({ node: work }) => (
          <WorkCard key={work.id}>
            <figure>
              <img src={work.featuredImage.sizes.src} alt="" title={work.title}/>
            </figure>
            <h3>
              <Link to={`/works/${work.slug}/`}>{work.title}</Link>
            </h3>
            <p>
              {work.description.description}
            </p>
          </WorkCard>
        ))}
      </WorkCardWrap>
    </Section>
  )
}

export default Works

export const worksQuery = graphql`
  query allWorksQuery {
    allContentfulWorks {
      edges {
        node {
          id
          title
          slug
          featuredImage {
            sizes(maxWidth: 600) {
              src
            }
          }
          description {
            description
          }
        }
      }
    }
  }
`
