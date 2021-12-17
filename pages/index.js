import Head from "next/head";
import Image from "next/image";
import styles from "/styles/Home.module.css";
import Link from "next/link";

export function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.navList}>
        <Link href="/">
          <a>
            Home
            <Image alt="" src="/home-icon.svg" width={20} height={20} />
          </a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/guide">
          <a>Guide</a>
        </Link>
        <div className={styles.dropDown}>
          <Link href="/challenges">
            <a className={styles.dropDownBtn}>Challenges</a>
          </Link>
          <div className={styles.dropDownBox}>
            <Link href="/challenges/chal1">
              <a>Challenge 1: Dots and Dashes</a>
            </Link>
            <Link href="/challenges/chal2">
              <a>Challenge 2: Ten Plus Six</a>
            </Link>
            <Link href="/challenges">
              <a>More</a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export function Footer() {
  return (
    <footer>
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

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>CyCow Weekly</title>
        <meta name="description" content="Not sponsored (yet)" />
        <link rel="icon" href="/o.ico" />
      </Head>

      <main className={styles.main}>
        <Title
          title="Cyber Cow Weekly"
          subtitle="Weekly beginner-friendly cybersecurity challenges!"
        >
          {" "}
        </Title>
        <Nav></Nav>
        <Grid>
          <LinkCard
            name="About This Site &rarr;"
            message="Find out more about this site and how it was created"
            link="/about"
          ></LinkCard>
          <LinkCard
            name="Quick Guide &rarr;"
            message="Get a quick guide into cybersecurity"
            link="/guide"
          ></LinkCard>
          <LinkCard
            name="Get Started &rarr;"
            message="Try out a challenge now!"
            link="/challenges"
          ></LinkCard>
          <Card
            name="Source Code &rarr;"
            message="This website is fully uploaded online"
            link="https://github.com/alexgeethob/cycow-weekly"
          ></Card>
          <Card
            name="Other Projects &rarr;"
            message="Some of my other projects"
            link="https://github.com/alexgeethob"
          ></Card>
        </Grid>
      </main>
      <Footer></Footer>
    </div>
  );
}
