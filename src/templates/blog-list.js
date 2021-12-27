import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import {
  BlogCard,
  BlogCardContent,
  BlogTitle,
  BlogP,
  BlogDate,
  BlogButton,
  BlogContainer,
  BlogWrapper,
} from "../components/styles/BlogStyles"
import Img from "gatsby-image"

export default function BlogList({ data, pageContext }) {
  const posts = data.allMarkdownRemark.edges.map(edge => edge.node)
  console.log(posts)
  const { currentPage, numPages } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage =
    currentPage - 1 === 1 ? "/blog/" : "/blog/" + (currentPage - 1).toString()
  const nextPage = "/blog/" + (currentPage + 1).toString()

  const all = posts.map(markdownRemark => {
    const { date, slug, title, blurb, featuredImage } =
      markdownRemark.frontmatter

    return (
      <BlogCard>
        <BlogCardContent>
          <BlogTitle>{title}</BlogTitle>
          <BlogP>{blurb}</BlogP>
          <BlogDate>{date}</BlogDate>
          <BlogButton to={slug}>Read More</BlogButton>
        </BlogCardContent>
        <BlogCardContent>
          <Img fluid={featuredImage.childImageSharp.fluid} />
        </BlogCardContent>
      </BlogCard>
    )
  })

  return (
    <>
      <Layout>
        <BlogContainer id="blog">
          <h1
            style={{
              fontSize: "48px",
              fontStyle: "normal",
              fontWeight: "normal",
              padding: "50px",
              textAlign: "center",
            }}
          >
            Our Blogs
          </h1>
          <BlogWrapper>{all}</BlogWrapper>
        </BlogContainer>
        <div style={{alignItems: "center"}}>
          <Link to={prevPage} rel="prev">
            Previous Page
          </Link>
          <Link to={nextPage} rel="next">
            Next Page
          </Link>
        </div>
      </Layout>
    </>
  )
}

export const pageQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
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
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
