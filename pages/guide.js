import Head from "next/head";
import Image from "next/image";
import styles from "/styles/Home.module.css";
import Link from "next/link";

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Guide</title>
        <meta name="description" content="Not sponsored (yet)" />
        <link rel="icon" href="/logo.ico" />
      </Head>

      <main className={styles.main}>
        <header>
        <h1 className={styles.title}>Quick Guide</h1>
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
            <Link href="/challeges/index">
              <a>Challenges</a>
            </Link>
          </div>
        </nav>
    </main>
    </div>
  );
  }