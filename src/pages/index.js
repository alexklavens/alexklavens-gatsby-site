// import React from "react"
import { Link } from "gatsby"
//
// export default () => (
//   <div style={{ color: `purple` }}>
//     <Link to="/about/">About</Link>
//     <p>What a world.</p>
//   </div>
// )


import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import { graphql } from 'gatsby'
import styles from "../styles/homepage.module.css"


const ListLink = props => (
  <li>
    <Link to={props.to}
      style={{
        // color: `rgb(128,128,128)`,
        textDecoration: `none`
      }}>{props.children}</Link>
  </li>
)

const LayoutSorta = ({ children }) => (
  <div id="header"
    style= {{ margin: `2rem auto`, maxWidth: 850, padding: `0 1rem` }}>
    {children}
  </div>
)


const HomePage = ({data}) => {
  return (
    <div>
      {/* <Main /> */}
      <Layout>
      {/* <LayoutSorta> */}
          {/* <p className={styles.mainText}>Hi there, I'm Alex.</p> */}
          <p className={styles.mainText}> I’m a recent graduate of Connecticut College with a degree in Computer Science and Government.</p>
          <p className={styles.mainText}>I have experience in radio and print <a className={styles.jLink} href="/journalism">journalism</a>, political research, data analysis, and <a className={styles.softwareLink} href="/projects">software development</a>.</p>
          <p className={styles.mainText}>Now I’m looking for software development opportunities at the intersection of technology, journalism, and politics.</p>
        {/* </LayoutSorta> */}

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
