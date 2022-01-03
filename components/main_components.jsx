import styles from "/styles/Home.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

export function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.navList}>
        <Link href="/">
          <a className={styles.navItem}>
            Home{" "}
            <FontAwesomeIcon
              icon={faHouse}
              style={{ margin: "auto", marginLeft: "0.3rem" }}
            />
          </a>
        </Link>
        <Link href="/about">
          <a className={styles.navItem}> About</a>
        </Link>
        <Link href="/guide">
          <a className={styles.navItem}>Guide</a>
        </Link>
        <div className={styles.dropDown}>
          <Link href="/challenges">
            <a className={styles.dropDownBtn}>Challenges &#11167;</a>
          </Link>
          <div className={styles.dropDownBox}>
            <Link href="/challenges/chal1">
              <a>Challenge 1: Dots and Dashes</a>
            </Link>
            <Link href="/challenges/chal2">
              <a>Challenge 2: Ten Plus Six</a>
            </Link>
            <Link href="/challenges/chal3">
              <a>Challenge 3: Stripped Suffix</a>
            </Link>
            <Link href="/challenges">
              <a>More...</a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className={styles.footer}>
      <a href="mailto:alexzhang05@gmail.com">Contact</a>
    </footer>
  );
}

export function Title(props) {
  return (
    <header>
      <h1 className={styles.title}>{props.title}</h1>
      <p className={styles.description}>{props.subtitle}</p>
    </header>
  );
}

export function Card(props) {
  return (
    <a
      href={props.link}
      className={styles.card}
      target="_blank"
      rel="noopener noreferrer"
    >
      <h2>{props.name}</h2>
      <p>{props.message}</p>
    </a>
  );
}

export function LinkCard(props) {
  return (
    <Link href={props.link}>
      <a className={styles.card}>
        <h2>{props.name}</h2>
        <p>{props.message}</p>
      </a>
    </Link>
  );
}

export function Grid(props) {
  return <div className={styles.grid}>{props.children}</div>;
}

export function Section(props) {
  return (
    <>
      <SectionTitle title={props.title}></SectionTitle>
      <SectionText text={props.text}>{props.children}</SectionText>
    </>
  );
}

export function SectionTitle(props) {
  return <h2 className={styles.subtitle}>{props.title}</h2>;
}

export function SectionText(props) {
  return (
    <span className={styles.body}>
      {props.text}
      {props.children}
    </span>
  );
}

export function ExtLink(props) {
  return (
    <a
      className={styles.link}
      rel="noreferrer"
      target="_blank"
      href={props.href}
    >
      {props.children}
    </a>
  );
}
