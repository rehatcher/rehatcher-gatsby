import React from "react"
import { graphql } from "gatsby"
import Navbar from "../../components/Navbar"

export default function IndexPage({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { allMarkdownRemark } = data
  console.log(allMarkdownRemark)
  const all = allMarkdownRemark.nodes.map(markdownRemark => {
    const { date, slug, title } = markdownRemark.frontmatter
    return (
      <li>
        <a href={slug}>
          {title} {date}
        </a>
      </li>
    )
  })

  return (
    <>
      <Navbar />
      <div className="blog-post-container">
        <ul>{all}</ul>
      </div>
    </>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark {
      nodes {
        frontmatter {
          date
          slug
          title
        }
      }
    }
  }
`
