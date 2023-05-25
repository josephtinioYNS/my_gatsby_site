const path = require("path")

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // Query for markdown nodes to use in creating pages.
  const result = await graphql(
    `
    {
      allMicrocmsPosts {
        edges {
          node {
            title
            postsId
            body
            image {
              url
              height
              width
            }
          }
        }
      }
    }
    `
  )

  // Handle errors
  if (result.errors) {
    throw result.errors;
  }

  // Create pages for each markdown file.
  const articleTemplate = path.resolve(`./src/templates/article-detail.js`)
  result.data.allMicrocmsPosts.edges.forEach((edge) => {
    createPage({
      path: `/articles/${edge.node.postsId}`,
      component: articleTemplate,
      context: {
        postsId: edge.node.postsId,
        title: edge.node.title,
        body: edge.node.body,
        imageUrl: edge.node.image.url
      },
    })
  })
}