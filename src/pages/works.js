import React from "react"
import Link from 'gatsby-link'
import styled from 'styled-components'
import Title from '../components/TitleEl'

const Section = styled.section`
  width: 100%;
  margin: 0;
  padding: 2em;
`
const WorkCardWrap = styled.div`
  width: 100%;
  background: #f6faf9;
  margin: 0 auto 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  border-top: none;
  position: relative;
  padding: 0;
  z-index: 5;
`
const WorkCard = styled.div`
  max-width: 33.33%;
  width: 100%;
  margin: 0 -0.75rem;

  figure {
    margin: 0;
    width: 100%;
    height: 0;
    padding-bottom: 56.25%;
    overflow: hidden;

    img {
      width: 100%;
      height: auto;
      display: block;
      object-fit: cover;
    }
  }

  .copy {
    position: relative;
    width: 100%;
    padding: 1em 0;

    p {
      margin-bottom: 0.25rem;
    }

    .project-type {
      color: #707C80;
    }

    .project-tech {
      font-size: 0.875rem;
      color: #b0bec5;
    }
  }
`
const WorkCardInner = styled.div`
  position: relative;
  margin: 2rem 0.75rem 0;
  overflow: hidden;
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

const Works = props => {
  const works_data = props.data.allContentfulWorks.edges
  return (
    <Section>
      <TitleHeader>
        <Title text={`Works`} size={`h1`} color={`#1de9b6`} margin={`auto`} transform={`uppercase`} />
      </TitleHeader>
      <WorkCardWrap>
        {works_data.map(({ node: work }) => (
          <WorkCard key={work.id} offset={work.role && work.role.length > 0}>
            <WorkCardInner>
              <figure>
                <Link to={`/works/${work.slug}/`}>
                  <img src={work.featuredImage.sizes.src} alt="" title={work.title}/>
                </Link>
              </figure>
              <div className="copy">
                <h3>
                  <Link to={`/works/${work.slug}/`}>
                    {work.title}
                  </Link>
                </h3>
                {work.projectType &&
                  <p
                    className="project-type"
                    dangerouslySetInnerHTML={{ __html: work.projectType.join(', ') }} />
                }
                {work.projectTech &&
                  <p
                    className="project-tech"
                    dangerouslySetInnerHTML={{ __html: work.projectTech.join(', ') }} />
                }
              </div>
            </WorkCardInner>
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
            sizes(maxWidth: 1600, quality: 60) {
              sizes
              src
              srcSet
            }
          }
          projectType
          projectTech
        }
      }
    }
  }
`
