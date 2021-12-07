import Head from "next/head";
import Image from "next/image";
import styles from "/styles/Home.module.css";
import Link from "next/link";

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About Us</title>
        <meta name="description" content="Not sponsored (yet)" />
        <link rel="icon" href="/logo.ico" />
      </Head>

      <main className={styles.main}>
        <header>
        <h1 className={styles.title}>About</h1>
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
        <p className={styles.body}>
          <Link href="/" className="link">Cyber Cow Weekly</Link> was created to help teach and guide newer students to cybersecurity.
          Every week, new cybersecurity challenges are released for students to solve. 
          These challenges may include topics such as cryptography, forensics, reverse engineering,
          website vulnerablities, and so on. <br />
          Click <Link href="/challenges/info" className="link">here</Link> to find out more about the challenges <br />
          Originally, CCW was planned to be a one-time CTF, but both design and infrastructure were a huge problem.
          There was nowhere to host the challenges, and online services like CTFd cost too much for me. 
          <br /> <br />
          Thankfully, I learned about <a href="https://vercel.com/home?utm_source=next-site&utm_medium=banner&utm_campaign=next-website">
          Vercel's </a>
          free hosting option with NextJS repositories <span style={{fontSize: '2px'}}>thanks Akaash</span>
          and managed to use that to create this static site that you are currently viewing.
          However, that means for now, there is no dynamic content on the site. Everything on this site
          is loaded statically and there isn't much user interaction. 
          <br /> <br />
          In the future, I plan to eventually convert everything to typescript (currently on js), 
          add user input and verification, add api accessibility to get challenges, and maybe eventually
          add an account system.
        </p>
        <Image alt="Picture of cow" src="/cow.ico" height={20} width={30} ></Image>
      </main>
      <footer>
        <a href="mailto:alexzhang05@gmail.com">Contact</a>
      </footer>
    </div>
  );
}
