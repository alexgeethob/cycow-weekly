import Head from 'next/head'
import Image from 'next/image'
import styles from '/styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>CyCow Weekly</title>
        <meta name="description" content="Not sponsored (yet)" />
        <link rel="icon" href="/logo.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
            Cyber Cow Weekly
        </h1>
        <p className={styles.description}>
          Weekly beginner-friendly cybersecurity challenges!
        </p>
        <nav className={styles.nav}>
        <div className={styles.navList}>
          <Link href="/">
          <a>Home<span><Image alt="" src="/home-icon.svg" width={20} height={20}/></span></a>
          </Link>
          <Link href="/about">
          <a>About</a>
          </Link>
        </div>
      </nav>
        <div className={styles.grid}>
          <Link href="/about">
            <a className={styles.card}>
              <h2 className={styles.card.h2}>About This Site &rarr;</h2>
              <p>Find out more about this site and how it was created</p>
            </a>
          </Link>
          <Link href="/guide">
            <a className={styles.card}>
              <h2 className={styles.card.h2}>Quick Guide &rarr;</h2>
              <p>Get a quick guide into cyber security and a few basics</p>
            </a>
          </Link>
          <Link href="/challenges/chal1">
            <a className={styles.card}>
              <h2 className={styles.card.h2}>Get Started &rarr;</h2>
              <p>Try out a beginner-friendly cryptography challenge</p>
            </a>
          </Link>
            <a href="https://github.com/alexgeethob/cycow-weekly" className={styles.card}>
              <h2 className={styles.card.h2}>Source Code &rarr;</h2>
              <p>This website is fully uploaded online!</p>
            </a>
        </div>
      </main> 
      <footer>
        <a href="mailto:alexzhang05@gmail.com">
            Contact
        </a>
      </footer>
    </div>
  )
}

function e(){
  var s = process.env.FLAG_1;
  console.log(s);
}