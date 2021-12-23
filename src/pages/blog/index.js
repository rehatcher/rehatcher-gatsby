import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import styled from "styled-components"
import { Link } from "gatsby"
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

export const BlogContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
  z-index: 1;
  padding: 50px;
`

export const BlogWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const BlogCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 16px;
  padding: 0 50px;
`

export const BlogCardContent = styled.div`
  display: flex;
  flex-direction: column;
  list-style: none;
  display: grid;
  text-decoration: none;
`

export const BlogImg = styled.img`
  width: 75vh;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

export const BlogTitle = styled.h2`
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  text-decoration: none;
`

export const BlogP = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 30px;

  letter-spacing: -0.015em;
`

export const BlogDate = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 30px;

  letter-spacing: -0.015em;
`

export const BlogButton = styled(Link)`
  width: 130px;
  height: 40px;
  border-radius: 6px;
  white-space: nowrap;
  color: #f5862e;
  border: 2px solid #f5862e;
  font-size: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  @media screen and (max-width: 768px) {
    width: 80px;
    height: 40px;
    font-size: 10px;
  }

  &:hover {
    text-decoration: none;
    cursor: pointer;
    transform: translate(-2px);
  }
`
