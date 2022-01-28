import Interweave, { Node } from "interweave";
import styles from "/styles/Home.module.css";

function transform(node, children) {
  if (node.tagName === "A") {
    if (node.getAttribute("download") !== null) {
      return (
        <a className={styles.link} href={node.getAttribute("href")}>
          {children}
        </a>
      );
    }
    return (
      <a
        className={styles.link}
        rel="noreferrer"
        target="_blank"
        href={node.getAttribute("href")}
      >
        {children}
      </a>
    );
  }
}

export default function InterweaveWrapper(props) {
  return <Interweave transform={transform} content={props.content} />;
}
