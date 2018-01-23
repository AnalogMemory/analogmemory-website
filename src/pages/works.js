import React from "react"
import Link from 'gatsby-link'

const Works = props => {
  const works_data = props.data.allContentfulWorks.edges
  return (
    <div>
      {works_data && works_data.map(({ node: work }) => (
        <div key={work.id}>
          <Link to={work.slug}>
            <h3>{work.title}</h3>
          </Link>
        </div>
      ))}
    </div>
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
            id
            sizes(maxWidth: 1600) {
              sizes
              src
              srcSet
            }
          }
        	description {
            id
            description
          }
        }
      }
    }
  }
`
