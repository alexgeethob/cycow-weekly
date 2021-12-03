import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>CyCow Weekly</title>
        <meta name="description" content="Not sponsored (yet)" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className={styles.nav}>
        <div className={styles.navList}>
          <Link href="/">
          <a>Home<span><Image src="/home-icon.svg" width={20} height={20}/></span></a>
          </Link>
          <Link>
          <a>asdasdsaasdas</a>
          </Link>
        </div>
      </nav>
      <main className={styles.main}>
        <h1 className={styles.title}>
            idk title yet 
        </h1>

        <p className={styles.description}>
          Weekly beginner-friendly cybersecurity challenges!
        </p>

        <div className={styles.grid}>
          <a href="/about" className={styles.card}>
            <h2 className={styles.card.h2}>Learn More &rarr;</h2>
            <p> yes</p>
          </a>
        </div>
      </main> 
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

function e(){
  var s = process.env.FLAG_1;
  console.log(s);
}