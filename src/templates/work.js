import React from "react"
import styled from 'styled-components'
import media from 'styled-media-query'
import Title from '../components/TitleEl'
import ButtonLink from '../components/ButtonLink'

const WorkTemplate = props => {
  const work = props.data.contentfulWorks

  return (
    <Section>
      <WorkView key={work.id}>
        <WorkVisualsCol>
          {work.extraImages && work.extraImages.map(image => (
            <WorkVisuals key={image.id}>
              <img src={image.sizes.src} alt="" />
            </WorkVisuals>
          ))}
        </WorkVisualsCol>
        <WorkDescriptionCol>
          <Title text={work.title} size={`h3`} />
          {work.description &&
            <p>
              {work.description.description}
            </p>
          }
          {work.projectType &&
            <WorkInfo>
              <strong>Project Type</strong>
              <span dangerouslySetInnerHTML={{ __html: work.projectType.join(', ') }} />
            </WorkInfo>
          }
          {work.projectTech &&
            <WorkInfo>
              <strong>Tech</strong>
              <span dangerouslySetInnerHTML={{ __html: work.projectTech.join(', ') }} />
            </WorkInfo>
          }
          {work.projectLinks && work.projectLinks.map(link => (
            <ButtonLink key={link.id} link={link} />
          ))}
        </WorkDescriptionCol>
      </WorkView>
    </Section>
  )
}


const Section = styled.section`
  width: 100%;
  margin: 0;
  padding: 2em;
`
const WorkView = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
`
const WorkVisualsCol = styled.div`
  width: 100%;
  padding: 0 0 2em 0;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;

  ${media.greaterThan('medium')`
    width: 40%;
  `}
`
const WorkVisuals = styled.figure`
  width: 100%;
  margin: 0 0 3em;
  box-shadow: 0 6px 30px 5px rgba(0,0,0,0.2),
              0 8px 10px -5px rgba(0,0,0,0.4);

  &:last-child {
    margin-bottom: 0;
  }

  img { display: block; }
`
const WorkDescriptionCol = styled.article`
  padding: 1.5em;
  background-color: #ffffff;
  border-left: 8px solid #1de9b6;

  ${media.greaterThan('medium')`
    border-left: 16px solid #1de9b6;
    padding: 3em;
    height: 100%;
    width: 40%;
  `}
`
const WorkInfo = styled.p`
  font-size: 0.9375em;
  color: #7E8485;

  strong {
    display: block;
    text-transform: uppercase;
  }
`

export default WorkTemplate

export const workQuery = graphql`
  query currentWorkQuery($id: String!) {
    contentfulWorks(id: {eq: $id})  {
      id
      title
      slug
      extraImages {
        id
        sizes(maxWidth: 1600, quality: 60) {
          sizes
          src
          srcSet
        }
      }
      description {
        description
      }
      projectType
      projectTech
      projectLinks {
        id
        label
        url
        target
      }
    }
  }
`
