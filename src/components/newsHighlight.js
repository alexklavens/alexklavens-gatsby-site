import React from "react"
import styles from "../styles/tcvAll.module.css"


function ifDate(props){
  if (props.dates) {
    return (<p className={styles.tcvDates}>{props.dates} &#8212;
</p>)
  }
  else {
    return null;
  }
}


export default props => (
  <div className={styles.newsHighlightDiv}>
    <a className={styles.titleLink} href={props.link1}><h2 className={styles.tcvHeadline}>{props.headline}</h2></a>
    {ifDate(props)}
    <p className={styles.tcvDescription}>{props.description}</p>
  <p>
    <a className={styles.tcvLink} href={props.link1}>Read more</a>
</p>


  </div>
)
