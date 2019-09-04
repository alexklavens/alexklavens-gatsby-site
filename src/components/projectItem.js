import React from "react"
import styles from "../styles/projectItem.module.css"


function getDescription(inString){
  if (inString) {
    const thisArray = inString.split("##");
    const descriptionItemsArray = [];

    thisArray.forEach (
      item =>
        descriptionItemsArray.push(
          <li className={styles.listItem}>{item}</li>
        )
    )

    return descriptionItemsArray;
  } else {
    return ""
  }

}

function hasLiveSite(props){
  if (props.project_link) {
    return (
      <p>See <a className={styles.projectLink} href={props.project_link} target="__blank">{props.title}</a> live, or check it out on <a target="__blank" className={styles.projectLink}href={props.github_link}> Github </a>.</p>
    );
  } else {
    return (
      <p>Learn more about {props.title} on <a className={styles.projectLink} href={props.github_link} target="__blank"> GitHub</a>.</p>

    )
  }
}

function ifNoImageDescription(props){
  if (props.img_url){
    return (<div dangerouslySetInnerHTML={{__html: props.details}} className={styles.details}></div>)
  } else {
    return (<div dangerouslySetInnerHTML={{__html: props.details}} className={styles.details_noImage}></div>)
  }
}

function ifImage(props){
  if (props.img_url) {
    return (
      <a className={styles.imageLink} href={chooseImageLink(props)} target="_blank">
        <img className={styles.image} src={props.img_url} alt={props.alt_text} />
      </a>
    )
  } else {
    return null;
  }
}

function chooseImageLink(props){
  if (props.project_link) {
    return props.project_link
  } else {
    return props.github_link
  }
}


export default props => (
  <div className={styles.wholeDamnThing}>
    <h2 className={styles.projectTitle}>{props.title}</h2>
    <p className={styles.description}>{props.description}</p>
    {ifImage(props)}

    {ifNoImageDescription(props)}



    {/* <div dangerouslySetInnerHTML={{__html: props.details}} className={styles.details}></div> */}


    <div className={styles.techUsed}>
      {/* <p className={styles.techUsedTitle}>Tech used: </p> */}
      <ul className={styles.items}>{getDescription(props.languages)}</ul>
    </div>
    <p>{hasLiveSite(props)}</p>

    {/* <p>See <a className={styles.projectLink} href={props.project_link} target="__blank">{props.title}</a> live, or check it out <a target="__blank" className={styles.projectLink}href={props.github_link}> on Github. </a></p> */}



  </div>
)

//
// export const query = graphql`
//   query {
//     file(relativePath: {eq: "tamag.jpg"}) {
//       childImageSharp {
//         fixed(width: 400) {
//           ...GatsbyImageSharpFixed
//         }
//       }
//     }
//   }
// `
