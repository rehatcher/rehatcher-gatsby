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
      <div className="flex justify-center">
        <div className="flex flex-col md:flex-row md:max-w-7xl">
          <div className="order-2 md:order-1 flex flex-col justify-start">
            <h2 className="not-italic font-bold text-2xl mb-2 no-underline">
              {title}
            </h2>
            <p className="not-italic font-normal text-lg mt-2 tracking-tight">
              {blurb}
            </p>
            <p className="not-italic font-normal text-lg mt-2 tracking-tight">
              {date}
            </p>
            <button className="text-[#f5862e] hover:text-[#fff] rounded-md border border-[#f5862e] hover:bg-[#f5862e] mt-5 w-20 md:w-40 h-10 md:h-12">
              <a href={slug}>Read more</a>
            </button>
          </div>
          {featuredImage && (
            <div className="w-full h-96 md:h-auto object-cover md:w-48">
              <GatsbyImage
                image={featuredImage.childImageSharp.gatsbyImageData}
                alt={title}
                objectFit={"contain"}
                style={{ height: "500px", width: "500px" }}
              />
            </div>
          )}
        </div>
      </div>
    )
  })

  return (
    <>
      <Layout>
        <div class="flex justify-center flex-col md:p-[50px]" id="blog">
          <h1 className="text-5xl p-[50px] not-italic font-normal text-center">
            Blogs
          </h1>
          <div className="grid grid-cols-1 justify-center">{all}</div>
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
