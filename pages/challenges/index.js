import Head from "next/head";
import styles from "/styles/Home.module.css";
import Link from "next/link";
import { Nav, Footer, Title, Section } from "/components/main_components";

export function Important(props) {
  return <p className={styles.important}>{props.children}</p>;
}

export default function ChalHome() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Challenges</title>
        <meta name="description" content="Not sponsored (yet)" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Title title="Challenges"></Title>
        <Nav></Nav>
        <Section title="How To Do Challenges">
          In these challenges, the goal is usually to find a flag. The flag can
          be obfuscated, hidden, or might even need to be recreated. However,
          the flag will always be a string. For now, the flag is not
          case-sensitive, but this may change in the future
          <Important>
            IMPORTANT NOTE: The flag is always wrapped with
            <code className={styles.code}>cow{"{}"}</code>
          </Important>
          Usually, the text is in the flag is leetspeak, and should be
          humanly-readable. Don&apos;t be afraid to reach out if you are unable
          to solve a challenge or need hints! Also feel free to utilize any tool
          on the internet to help you!
        </Section>
        <h2 className={styles.subtitle}>Challenge List</h2>
        <ul className={styles.clist}>
          <li>
            <Link href="/challenges/chal1">Challenge 1: Dots and Dashes</Link>
          </li>
          <li>
            <Link href="/challenges/chal2">Challenge 2: Ten Plus Six</Link>
          </li>
          <li>
            <Link href="/challenges/chal3">Challenge 3: Stripped Suffix</Link>
          </li>
        </ul>
      </main>
      <Footer></Footer>
    </div>
  );
}
