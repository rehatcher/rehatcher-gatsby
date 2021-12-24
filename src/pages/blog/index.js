import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../../components/layout"
import {
  BlogCard,
  BlogCardContent,
  BlogTitle,
  BlogP,
  BlogDate,
  BlogButton,
  BlogImg,
  BlogContainer,
  BlogWrapper,
} from "../../../src/components/styles/BlogStyles"
import Img from "gatsby-image"

export default function IndexPage({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { allMarkdownRemark } = data
  console.log(allMarkdownRemark)

  const all = allMarkdownRemark.nodes.map(markdownRemark => {
    const { date, slug, title, blurb, thumb } = markdownRemark.frontmatter

    return (
      <BlogCard>
        <BlogCardContent>
          <BlogTitle>{title}</BlogTitle>
          <BlogP>{blurb}</BlogP>
          <BlogDate>{date}</BlogDate>
          <BlogButton to={slug}>Read More</BlogButton>
        </BlogCardContent>
        <BlogCardContent>
          <Img fluid={thumb.childImageSharp.fluid} />
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
      </Layout>
    </>
  )
}

export const pageQuery = graphql`
  query BlogPage {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date
          slug
          title
          blurb
          thumb {
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
`