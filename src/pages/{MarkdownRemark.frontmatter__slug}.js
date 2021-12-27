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
        <div style={{ padding: "60px" }}>
          <div style={{ padding: "0 50px" }}>
            <h1 style={{ textAlign: "center" }}>{frontmatter.title}</h1>
            <p style={{ paddingTop: "20px" }}>Date: {frontmatter.date}</p>
            <div
              style={{ lineHeight: "30px", paddingTop: "20px", listStylePosition: "inside"}}
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
          <div style={{ padding: "20px 50px" }}>
            <a href="/blog">Back to blog list</a>
          </div>
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
