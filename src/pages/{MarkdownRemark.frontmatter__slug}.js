import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <>
      <Layout>
        <div>
          <div>
            <h1>{frontmatter.title}</h1>
            <h2>Date: {frontmatter.date}</h2>
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </div>
          <a href="/blog">Back to blog list</a>
        </div>
      </Layout>
    </>
  )
}

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "DD MMMM YYYY", locale: "th")
        slug
        title
      }
    }
  }
`
