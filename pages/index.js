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
        <link rel="icon" href="/wo.ico" />
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
        <div className={styles.grid}>
          <Link href="/about">
            <a className={styles.card}>
              <h2>About This Site</h2>
              <p>Find out more about this site and how it was created</p>
            </a>
          </Link>
          <Link href="/guide">
            <a className={styles.card}>
              <h2>Quick Guide &rarr;</h2>
              <p>Get a quick guide into cybersecurity and a few other basics</p>
            </a>
          </Link>
          <Link href="/challenges">
            <a className={styles.card}>
              <h2 >Get Started &rarr;</h2>
              <p>Try out a challenge now!</p>
            </a>
          </Link>
            <a href="https://github.com/alexgeethob/cycow-weekly" className={styles.card}>
              <h2>Source Code &rarr;</h2>
              <p>This website is fully uploaded online</p>
            </a>
            <a href="https://github.com/alexgeethob" className={styles.card}>
              <h2>Other Projects &rarr;</h2>
              <p>Shameless plug :P</p>
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