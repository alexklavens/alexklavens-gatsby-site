import React from "react"
import Layout from "../components/layout"
import { graphql } from 'gatsby'
import styles from "../styles/homepage.module.css"



const HomePage = ({data}) => {
  return (
    <div>
      <Layout>
          <p className={styles.mainText}> I’m a recent graduate of Connecticut College with a degree in Computer Science and Government.</p>
          <p className={styles.mainText}>I have experience in radio and print <a className={styles.jLink} href="/journalism">journalism</a>, political research, data analysis, and <a className={styles.softwareLink} href="/projects">software development</a>.</p>
          <p className={styles.mainText}>Now I’m looking for software development opportunities at the intersection of technology, journalism, and politics.</p>

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
//
// export default () => (
//   <Layout>
//     {/* <Header text="" /> */}
//
//     <div class='frontPage' style={{}}>
//         I’m a recent graduate of Connecticut College with a degree in Computer Science and Government.
//         <br /><br />
//         I have experience in radio and print journalism, political research, data analysis, and software development
//         <br /><br />
//         Now I’m looking for software development opportunities at the intersection of technology, journalism, and politics.
//
//     </div>
//   </Layout>
// )
