const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const resultCourses = await graphql(
    `
      {
        allMarkdownRemark(
          filter: { frontmatter: { contentType: { eq: "course" } } }
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `
  )

  const resultBlogs = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `
  )

  if (resultBlogs.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  // Create course-list pages
  const courses = resultCourses.data.allMarkdownRemark.edges
  const coursePerPage = 3
  const courseNumPages = Math.ceil(courses.length / coursePerPage)
  Array.from({ length: courseNumPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/courses` : `/courses/${i + 1}`,
      component: path.resolve("./src/templates/course-list.js"),
      context: {
        limit: coursePerPage,
        skip: i * coursePerPage,
        courseNumPages,
        currentPage: i + 1,
      },
    })
  })

  // Create blog-list pages
  const posts = resultBlogs.data.allMarkdownRemark.edges
  const postsPerPage = 3
  const numPages = Math.ceil(posts.length / postsPerPage)
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog` : `/blog/${i + 1}`,
      component: path.resolve("./src/templates/blog-list.js"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })
}
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
