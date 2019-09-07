import React from "react"
import Layout from "../components/layout"
import ResumeEntry from "../components/resumeEntry"
import { StaticQuery, graphql } from 'gatsby'

import Education from "../components/education"
// import ResumeEntry from "../components/resumeEntry"

import styles from "../styles/resumeMain.module.css"

function arrayToListItems(inList) {
  if (inList) {
    const itemsArray = [];
    inList.forEach (
      item =>
        itemsArray.push(
          <li className={styles.listItem}>{item}</li>
        )
    )
    return itemsArray;
  } else {
    return ""
  }
}


const Resume = ({ children }) => (
  <StaticQuery
    query={graphql`
      query ResumeQuery {
        allResumeJson {
          edges {
            node {
              companyName
              location
              jobTitle
              dates
              description
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <ul style={{
          listStyle: `none`,
          paddingLeft: `0px`
        }}>{getResume(data)}</ul>
      </>
    )}
  />
);


const SkillItem = props => (
  <div>
    <h2 className={styles.skillItemTitle}>{props.skillItemTitle}</h2>
    <ul className={styles.skillList}>{arrayToListItems(props.thisList)}</ul>

  </div>
);


const Skills = props => (
  <div className={styles.skillsMain}>
    <div className={styles.skillsSub}>
    <SkillItem
      skillItemTitle="Programming Languages:"
      thisList = {props.programmingLanguages}
    />

    <SkillItem
      skillItemTitle="Web Development:"
      thisList = {props.webDevelopment}
    />

    <SkillItem
      skillItemTitle="Tools:"
      thisList = {props.tools}
    />
  </div>

  </div>
);


function getResume(data) {
  const resumeItemsArray = [];
  data.allResumeJson.edges.forEach(
    item =>
      resumeItemsArray.push(
        <li key={item.node.companyName}>
          <ResumeEntry
            companyName = {item.node.companyName}
            location = {item.node.location}
            jobTitle = {item.node.jobTitle}
            dates = {item.node.dates}
            description={item.node.description}
          />
        </li>
      )
  );
  return resumeItemsArray;
}


export default () => (
  <Layout>
    <h1 className={styles.resumeSectionHeader} style={{textAlign: `center`}}>Education</h1>

    <Education />
    <h1 className={styles.resumeSectionHeader} style={{textAlign: `center`}}>Work Experience</h1>
    <Resume />
    <h1 className={styles.resumeSectionHeader} style={{textAlign: `center`}}>Skills</h1>

    <Skills
      programmingLanguages= {["Python",
                            "Java",
                            "PHP",
                            "SQL",
                            "HTML",
                            'CSS',
                            "JavaSript",
                            "C#"
                            ]}
      webDevelopment = {["React","Gatsby","Node","GraphQL","D3","Flask","Jinja"]}
      tools = {["Git","Bash","Netlify","Heroku", "Jira","Trello"]}
      apiUsed = {["Google Sheets API (Python)","Contentful API (Python)"]}
    />

    <h1 className={styles.resumeSectionHeader} style={{textAlign: `center`}}>Conference Attendence</h1>

    <ResumeEntry
      companyName = "Investigative Reporters and Editors"
      jobTitle = "Attendee, Organization Member"
      dates = "Orlando, FL • Summer 2018"
    />

    <ResumeEntry
      companyName = "SRCCON"
      jobTitle = "Attendee"
      dates = "Minneapolis, MN • Summer 2018"
    />



  </Layout>
)
