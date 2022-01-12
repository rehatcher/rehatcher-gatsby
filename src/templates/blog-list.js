import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { GatsbyImage } from "gatsby-plugin-image"

export default function BlogList({ data, pageContext }) {
  const posts = data.allMarkdownRemark.edges.map(edge => edge.node)
  console.log(posts)
  const { currentPage, numPages } = pageContext
  const prevPage =
    currentPage - 1 === 1 ? "/blog/" : "/blog/" + (currentPage - 1).toString()
  const nextPage = "/blog/" + (currentPage + 1).toString()

  const all = posts.map(markdownRemark => {
    const { date, slug, title, blurb, featuredImage } =
      markdownRemark.frontmatter

    return (
      <div className="flex flex-col justify-center md:flex-row w-full">
        <div className="order-2 md:order-1 w-full text-left space-y-2">
          <h2 className="not-italic font-bold text-2xl no-underline">
            {title}
          </h2>
          <p className="not-italic font-normal text-base tracking-tight">
            {blurb}
          </p>
          <p className="not-italic font-normal text-base tracking-tight">
            {date}
          </p>
          <button className="text-[#f5862e] hover:text-[#fff] border border-[#f5862e] hover:bg-[#f5862e] rounded-md w-20 md:w-40 h-10 md:h-12 text-xs md:text-base">
            <a href={slug}>Read more</a>
          </button>
        </div>
        {featuredImage && (
          <div className="w-full h-96 order-1 md:order-2">
            <GatsbyImage
              image={featuredImage.childImageSharp.gatsbyImageData}
              alt={title}
              objectFit={"contain"}
              style={{ height: "384px" }}
            />
          </div>
        )}
      </div>
    )
  })

  return (
    <>
      <Layout>
        <div
          class="flex justify-center flex-col md:p-[50px] max-w-7xl mx-auto"
          id="blog"
        >
          <h1 className="text-5xl p-[50px] not-italic font-normal text-center">
            Blogs
          </h1>
          <div className="grid grid-cols-1 gap-6 p-6 md:p-0">{all}</div>
          {/* <BlogWrapper>{all}</BlogWrapper> */}
        </div>
        <div className="text-center items-center">
          {currentPage > 1 && (
            <a href={prevPage} rel="prev">
              Previous Page
            </a>
          )}

          {currentPage < numPages && (
            <a href={nextPage} rel="next">
              Next Page
            </a>
          )}
        </div>
      </Layout>
    </>
  )
}

export const pageQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      filter: { frontmatter: { contentType: { ne: "course" } } }
      sort: { fields: frontmatter___date, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          frontmatter {
            date
            slug
            title
            blurb
            featuredImage {
              childImageSharp {
                gatsbyImageData(layout: FIXED)
              }
            }
          }
        }
      }
    }
  }
`
