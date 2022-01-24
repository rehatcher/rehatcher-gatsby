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
        <div className="p-[100px] w-full">
          <div className="px-[50px]">
            <h1 className="text-center text-2xl md:text-4xl font-bold">
              {frontmatter.title}
            </h1>
            <p className="pt-5">Date: {frontmatter.date}</p>
            <div></div>
            <div
              className="pt-5 leading-8 list-inside"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
          <div className="py-5 px-[50px]">
            <button className="text-[#f5862e] hover:text-[#fff] border border-[#f5862e] hover:bg-[#f5862e] rounded-md w-20 md:w-40 h-10 md:h-12 text-xs md:text-base">
              <a href="/blog">Back to blog list</a>
            </button>
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
