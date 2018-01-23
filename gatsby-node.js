const _ = require(`lodash`)
const Promise = require(`bluebird`)
const path = require(`path`)
const slash = require(`slash`)

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    graphql(
      `
      {
        allContentfulWorks {
          edges {
            node {
              id
              slug
            }
          }
        }
      }
      `
    )
    .then(result => {
      if (result.error) {
        reject(result.error)
      }
      const workTemplate = path.resolve(`./src/templates/work.js`)
      _.each(result.data.allContentfulWorks.edges, edge => {
        createPage({
          path: `works/${edge.node.slug}/`,
          component: slash(workTemplate),
          context: {
            id: edge.node.id
          }
        })
      })
      resolve()
    })
  })
}
