const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")
const _ = require("lodash")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const courseTemplate = path.resolve("./src/templates/course-list.js")
  const blogTemplate = path.resolve("./src/templates/blog-list.js")
  const tagTemplate = path.resolve("./src/templates/tags.js")
 
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
          filter: { frontmatter: { contentType: { ne: "course" } } }
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

  const resultTags = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 2000
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              tags
            }
          }
        }
      }
      tagsGroup: allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `)

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
      component: courseTemplate,
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
      component: blogTemplate,
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })

  const tags = resultTags.data.tagsGroup.group
  // Make tag pages
  tags.forEach(tag => {
    createPage({
      path: `/blog/tags/${_.kebabCase(tag.fieldValue)}/`,
      component: tagTemplate,
      context: {
        tag: tag.fieldValue,
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
