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
        <link rel="icon" href="/o.ico" />
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
        <h2 className={styles.subtitle}>Overall Goal</h2>
        <p className={styles.body}>
          <Link href="/" className="link">
            Cyber Cow Weekly
          </Link>{" "}
          was created to help teach and guide newer students to cybersecurity.
          Every week, new cybersecurity challenges are released for students to
          solve. These challenges may include topics such as cryptography,
          forensics, reverse engineering, website vulnerablities, and so on.{" "}
          <br />
          Click{" "}
          <Link href="/challenges" className="link">
            here
          </Link>{" "}
          to find out more about the challenges <br />
          Originally, CCW was planned to be a one-time CTF, but both design and
          infrastructure were a huge problem. There was nowhere to host the
          challenges, and online services like CTFd cost too much for me.
        </p>
        <h2 className={styles.subtitle}> Current Compromise </h2>
        <p className={styles.body}>
          Thankfully, I learned about{" "}
          <a href="https://vercel.com/home?utm_source=next-site&utm_medium=banner&utm_campaign=next-website">
            Vercel&apos;s{" "}
          </a>
          free hosting option with NextJS repositories{" "}
          <span style={{ fontSize: "2px" }}>thanks Akaash</span>
          and managed to use that to create this site that you are currently
          viewing. However, for now, there is no dynamic content on the site.
          Everything on this site is loaded statically and there isn't much user
          interaction. Also, do note that this website is currently only built for Chrome/Chromium browsers
          and ideally a 16:9 resolution.
        </p>
        <h2 className={styles.subtitle}>Future Goals</h2>
        <p className={styles.body}>
          In the future, I plan to eventually convert everything to typescript
          (currently on js), add user input and verification, add api
          accessibility to get challenges, and maybe eventually add an account
          system using a backend like Firebase.
        </p>
        <Image
          alt="Picture of cow"
          src="/cow.ico"
          height={20}
          width={30}
        ></Image>
      </main>
      <footer>
        <a href="mailto:alexzhang05@gmail.com">Contact</a>
      </footer>
    </div>
  );
}
