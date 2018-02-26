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
  max-width: 33.33%;
  width: 100%;
  flex-basis: 33.33%;
  position: relative;
  overflow: hidden;

  &:hover {
    .copy {

      h3 {
        transform: translateY(0);
        ${props => props.offset && `margin-bottom: 0.25em;`}
      }
      p {
        opacity: 1;
        transform: translateY(0);
      }
      span {
        opacity: 0.8;
        transform: translateY(0%) skewY(2deg);
      }
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
    height: auto;
    z-index: 2;
    padding: 2em;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-content: flex-end;
    background: linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 90%);

    h3, p, a {
      color: #fff;
      margin-bottom: 0;
      position: relative;
      z-index: 5;
    }

    h3 {
      ${props => props.offset == true && `
        margin-bottom: 0;
        transform: translateY(78%);
        transition: transform 300ms ease-out, margin 300ms ease-out;
      `}
    }

    p {
      color: #a5a5a5;
      opacity: 0;
      font-size: 1em;
      transform: translateY(75%);
      transition: transform 300ms ease, opacity 300ms 100ms ease;
    }

    span {
      display: block;
      position: absolute;
      width: 100%;
      height: 200%;
      top: 0;
      left: 0;
      z-index: 1;
      background-color: #000000;
      opacity: 0;
      transform: translateY(10%);
      transition: transform 300ms ease-out, opacity 300ms ease-out;
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
          <WorkCard key={work.id} offset={work.role && work.role.length > 0}>
            <figure>
              <img src={work.featuredImage.sizes.src} alt="" title={work.title}/>
            </figure>
            <Link className="copy" to={`/works/${work.slug}/`}>
              <h3>{work.title}</h3>
              {work.role && (
                <p>Role: {work.role.join(`, `)}</p>
              )}
              <span></span>
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
          role
          tech
        }
      }
    }
  }
`
