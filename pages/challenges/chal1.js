import Head from 'next/head'
import Image from 'next/image'
import styles from '/styles/Chal.module.css'
import Link from 'next/link'

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About Us</title>
        <meta name="description" content="Not sponsored (yet)" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className={styles.nav}>
        <div className={styles.navList}>
          <Link href="/">
          <a>Home<span><Image src="/home-icon.svg" width={20} height={20}/></span></a>
          </Link>
          <Link href="/about">
          <a>asdasdsaasdas</a>
          </Link>
        </div>
      </nav>
      
      <main className={styles.main}>
        <h1 className={styles.title}>
            Dots and Dashes 
        </h1>

        <p className={styles.description}>
          Weekly beginner-friendly cybersecurity challenges!
        </p>

        <code>
          ..-.-.-.--.-.-.-.-..-...--.--..-
        </code>

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
