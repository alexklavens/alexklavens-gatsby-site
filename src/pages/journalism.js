import React from "react"
import Layout from "../components/layout"
import Radio from "../components/radio"
import NewsHighlight from "../components/newsHighlight"
import JournalismSection from "../components/journalismSection"
import { StaticQuery, graphql } from 'gatsby'

import styles from "../styles/journalism.module.css"


const WBUR  = ({ children }) => (

  <StaticQuery
    query={graphql`
      query WBURQuery {
        allWburClipsJson {
          edges {
            node {
              date
              description
              iframe_link
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
        }}>{getWburClips(data)}</ul>
      </>
    )}
  />
);


function getWburClips(data) {
  const wburClipsArray = [];
  data.allWburClipsJson.edges.forEach(
    item =>
      wburClipsArray.push(
        <li key={item.node.date}>
          <Radio
            date = {item.node.date}
            description = {item.node.description}
            iframe_link = {item.node.iframe_link}
          />
        </li>
      )
  );
  return wburClipsArray;
}

// function showWbur () {
//   console.log("Entering showWBUR funncntion");
//   var show = "Show"
//   var hide = "Hide";
//   var thisText = document.getElementById("showInfoBox-button").innerHTML;
//   if (thisText == hide){ //is shown, click to hide
//     console.log("Hide");
//     document.getElementById("wburSection");
//     // document.getElementById("wburSection").style.visibility = "collapse";
//     document.getElementById("showInfoBox-button").innerHTML = show;
//   } else if (thisText == show) { //is hidden, click to show
//     // document.getElementById("wburSection").style.visibility = "visible";
//     document.getElementById("showInfoBox-button").innerHTML = hide;
//   }
// }

//
// function myFunction() {
//   var x = document.getElementById("radioWBURsection");
//   // var border = document.getElementById("siteHeader");
//   if (x.style.display === "block") {
//     x.style.display = "none";
//   } else {
//     x.style.display = "block";
//   }
// }


export default () => (
  <Layout>


  <JournalismSection>
    <h2 className={styles.journalismTitle}>WBUR 90.9 FM</h2>
    {/* <button id="showInfoBox-button" onClick={showWbur}>Hide</button> */}
    <p className={styles.jDescription}>I spent the Summer of 2017 working as a Newscast Intern at WBUR, one of the NPR stations in Boston. Here are a few recordings of aired pieces that I worked on and wrote. Pieces are labeled by when they aired.</p>


    <div id='radioWBURsection'>
    <WBUR id="wburSection"/>

    </div>


  </JournalismSection>

  <JournalismSection>
    <h2 className={styles.journalismTitle}>The College Voice</h2>

    <p className={styles.jDescription}>I was a editor and reporter for Connecticut College's newspaper<i>The College Voice</i>. As editor, I pitched stories, advised reporters and edited content. I reported on topics including voyeurism, Title IX, embezzlement, and student government. </p>


    <NewsHighlight
      headline = "Investigative Reporting: Voyeurism Incidents at Connecticut College"
      description = "I reported on the College's handling of a series of voyeurism incidents that occurred in campus dorms. My investigation found that an internal Title IX investigation into the matter was prolonged for months before appropriate data was used."
      link1 = "/investigation"
    />

    <NewsHighlight
      headline = "Utilizing Court Records: Embezzlement at Connecticut College"
      description = "In a series of articles, I reported on legal proceedings involving a former Connecticut College employee who pleaded guilty in November 2018 to embezzling nearly $200K from the College. I used federal court records and Freedom of Information Act requests in my reporting."
      link1 = "/tcv/2019-02-18/kmec"
      borderBottomm="none"
    />

    <div style={{
      textAlign: `center`,
      margin: `20px`
    }}>
      <a className={styles.tcvButton} href="/theCollegeVoice">More from <i>The College Voice</i></a>
    </div>



  </JournalismSection>

  </Layout>
)
