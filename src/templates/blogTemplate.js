import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styles from "../styles/article.module.css"

// modified example code from gatsby website

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <div>

        <div className={styles.allIntroHeader}>
          <h2 className={styles.headline}>{frontmatter.title}</h2>
          <p className={styles.byLine}>{frontmatter.byline}</p>
            &nbsp;•&nbsp;
          <p className={styles.date}>{frontmatter.date}</p>
          <p className={styles.articleLink}>This page is the full text of an article that appeared in <a href={frontmatter.link} target="_blank">The College Voice.</a></p>
          <p className={styles.linesplit}>_______________________________________</p>

        </div>
        <div
          className={styles.introFirst}
          dangerouslySetInnerHTML={{ __html: html }}
        />

        </div>
      </Layout>

  )
}
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        byline
        link
        title
      }
    }
  }
`
