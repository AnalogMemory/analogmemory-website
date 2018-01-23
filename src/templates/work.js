import React from "react"

const WorkTemplate = props => {
  const work = props.data.contentfulWorks
  return (
    <div>
      <h3>{work.title}</h3>
    </div>
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
`
