import Head from "next/head";
import Image from "next/image";
import styles from "/styles/Home.module.css";
import Link from "next/link";

export default function ChalHome() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Challenges</title>
        <meta name="description" content="Not sponsored (yet)" />
        <link rel="icon" href="/o.ico" />
      </Head>

      <main className={styles.main}>
        <header>
          <h1 className={styles.title}>Challenges</h1>
        </header>
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
            <Link href="/challenges">
              <a>Challenges</a>
            </Link>
          </div>
        </nav>
        <h2 className={styles.subtitle}>How To Do Challenges</h2>
        <p className={styles.body}>In these challenges, the goal is usually to find a flag. The flag can be obfuscated, hidden, or might
        even need to be recreated. However, the flag will always be a string. </p>
        <p className={styles.important}>IMPORTANT NOTE: The flag is always wrapped with <code className={styles.code}>ccw{'{}'}</code> </p>
        <p className={styles.body}>
        Usually, the text is in the flag is leetspeak, and should be humanly-readable. Don't be afraid to reach out
        if you are unable to solve a challenge or need hints!
        </p>
        <h2 className={styles.subtitle}>Challenge List</h2>
        <div className={styles.clist}>
          <ul>
            <li>
              <Link href="/challenges/chal1">
                Challenge 1: Dots and Dashes
              </Link>
            </li>
          </ul>
        </div>
      </main>
      <footer>
        <a href="mailto:alexzhang05@gmail.com">Contact</a>
      </footer>
    </div>
  );
}
