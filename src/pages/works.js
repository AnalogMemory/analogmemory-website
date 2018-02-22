import React from "react"
import Link from 'gatsby-link'
import styled from 'styled-components'
import Title from '../components/TitleEl'

const Section = styled.section`
  width: 100%;
  min-height: 100%;
  margin: 0;
  padding: 2em;
`
const WorkCardWrap = styled.div`
  width: 100%;
  background: #fff;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  border: 2em solid #fff;
  border-top: none;
`
const WorkCard = styled.div`
  max-width: 50%;
  width: 100%;
  flex-basis: 50%;
  position: relative;
  overflow: hidden;

  &:hover {
    figure {
      transform: scale(1.08);
    }
  }

  figure {
    margin: 0;
    width: 100%;
    height: 0;
    padding-bottom: 56.25%;
    overflow: hidden;
    transition: transform 400ms ease;

    img {
      width: 100%;
      height: auto;
      display: block;
      object-fit: cover;
      position: absolute;
      top: 0;
    }
  }

  .copy {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    padding: 2em;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-content: flex-end;
    background: linear-gradient(to bottom, rgba(0,0,0,0) 40%, rgba(0,0,0,0.85) 90%);

    h3, p, a {
      color: #fff;
      margin-bottom: 0;
    }

    h3 {
      margin-bottom: 0.25em;
    }

    p {
      color: #a5a5a5;
    }
  }
`
const TitleHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50%;
  position: relative;
  z-index: 3;
  border: 2em solid #fff;
`

const Works = props => {
  const works_data = props.data.allContentfulWorks.edges
  return (
    <Section>
      <TitleHeader>
        <Title text={`Works`} size={`h1`} color={`#fff`} margin={`auto`} />
      </TitleHeader>
      <WorkCardWrap>
        {works_data.map(({ node: work }) => (
          <WorkCard key={work.id}>
            <figure>
              <img src={work.featuredImage.sizes.src} alt="" title={work.title}/>
            </figure>
            <Link className="copy" to={`/works/${work.slug}/`}>
              <h3>{work.title}</h3>
              <p>{work.description.description}</p>
            </Link>
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
            sizes(maxWidth: 1000, quality: 60) {
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
