import React from "react"
import Layout from "../components/layout"
import { graphql } from 'gatsby'
import styles from "../styles/homepage.module.css"



const HomePage = ({data}) => {
  return (
    <div>
      <Layout>
          <p className={styles.mainText}> I'm a software engineer at <a className={styles.jLink} href="https://vigilant.cc" target="_blank">Vigilant</a> building public data access tools for political organizations, financial institutions, and journalists.</p>
          <p className={styles.mainText}> I graduated from Connecticut College in May 2019 with a degree in Computer Science and Government.</p>
          <p className={styles.mainText}>I have experience in radio and print <a className={styles.jLink} href="/journalism">journalism</a>, political research, data analysis, and <a className={styles.softwareLink} href="/projects">software development</a>.</p>

      </Layout>
    </div>
  )
}

export const query = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        description
      }
    }

  }
`
export default HomePage
