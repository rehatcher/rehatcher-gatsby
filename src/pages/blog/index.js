import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
// import styled from "styled-components"
// import { Link } from "gatsby"
import demoImage from "../../images/coding-man.jpg"
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
// import * as BlogStyles from "../../../src/components/styles/BlogStyles"

export default function IndexPage({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { allMarkdownRemark } = data
  console.log(allMarkdownRemark)

  const all = allMarkdownRemark.nodes.map(markdownRemark => {
    const { date, slug, title } = markdownRemark.frontmatter
    return (
      <BlogCard>
        <BlogCardContent>
          <BlogTitle>{title}</BlogTitle>
          <BlogP>คำโปรย demo blog</BlogP>
          <BlogDate>{date}</BlogDate>
          <BlogButton to={slug}>Read More</BlogButton>
        </BlogCardContent>
        <BlogCardContent>
          <BlogImg src={demoImage} />
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
