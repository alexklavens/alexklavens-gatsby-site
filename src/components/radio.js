import React from "react"
import styles from "../styles/radioPiece.module.css"

export default props => (
  <div className={styles.radioPiece}>
    <div className={styles.nonIframeRadioContent}>
      <p className={styles.airedPiece}>{props.date}</p>
      <div dangerouslySetInnerHTML={{__html: props.description}} className={styles.description}></div>
    </div>

    <iframe className={styles.radioIframe} scrolling="no" frameborder="no" src={props.iframe_link}></iframe>
  </div>
)
