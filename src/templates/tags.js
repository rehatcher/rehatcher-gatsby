import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

export default function Tags({ data, pageContext }) {
  const { currentPage, numPages, tag } = pageContext
    const prevPage =
      currentPage - 1 === 1 ? "/blog/tags/" + { tag } : "/blog/tags/" + {tag} + "/" + (currentPage - 1).toString()
    const nextPage = "/blog/tags/" +  + (currentPage + 1).toString()

  const posts = data.allMarkdownRemark.edges.map(edge => edge.node)
  const tags = data.allMarkdownRemark.group

  const allPosts = posts.map(markdownRemark => {
    const { date, slug, title, blurb, featuredImage } =
      markdownRemark.frontmatter

    return (
      <div className="w-full bg-white overflow-hidden flex flex-col md:flex-row">
        <div className="order-2 md:order-1 w-full md:w-3/5 text-left p-6 md:p-4 space-y-2">
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
          <div className="order-1 md:order-2 w-full md:w-2/5 h-80">
            <GatsbyImage
              image={featuredImage.childImageSharp.gatsbyImageData}
              alt={title}
              objectFit={"contain"}
              objectPosition={"center"}
              style={{ height: "100%", width: "100%" }}
            />
          </div>
        )}
      </div>
    )
  })

  const allTags = tags.map(markdownRemark => {
    return (
      <div>
        <ul className="cursor-pointer text-center">
          <li className="py-2">
            <a href={`/blog/tags/${markdownRemark.fieldValue}`}>
              {markdownRemark.fieldValue} [{markdownRemark.totalCount}]
            </a>
          </li>
        </ul>
      </div>
    )
  })

  return (
    <Layout>
      <div className="flex justify-center flex-col md:p-[50px] max-w-7xl mx-auto">
        <h1 className="text-5xl p-[50px] not-italic font-normal text-center">
          Blog / {tag}
        </h1>

        <div className="flex row-span-2">
          <div className="columns-7xl gap-6 p-6 md:p-0">{allPosts}</div>
          <div className="columns-3xs p-6">
            <h3 className="text-center font-bold text-xl">Tags</h3>
            {allTags}
          </div>
        </div>
      </div>
      {/* <div className="text-center items-center">
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
      </div> */}
    </Layout>
  )
}

export const pageQuery = graphql`
  query tagPostQuery($tag: String) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
      limit: 2000
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date
            slug
            title
            blurb
            tags
            featuredImage {
              childImageSharp {
                gatsbyImageData(layout: FIXED)
              }
            }
          }
        }
      }
      group(field: frontmatter___tags) {
        totalCount
        fieldValue
      }
    }
  }
`
