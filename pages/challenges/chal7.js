import Head from "next/head";
import styles from "/styles/Chal.module.css";
import { FlagForm } from "/components/chal_components";
import { Nav, Footer, ExtLink } from "/components/main_components";

export default function Chal7(props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Challenge 7: Slithering Snake</title>
        <meta name="description" content="Not sponsored (yet)" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Nav></Nav>
        <h1 className={styles.title}>Challenge 7: Slithering Snake</h1>
        <h2 className={styles.category}>Reverse Engineering</h2>
        <p className={styles.body}>
          Python is a interpreted programming language that has a very beginner
          friendly syntax and is easy to learn. It is commonly used as a
          scripting language or for machine learning and AI.
          <br /> 
          If you aren&apos;t too familiar with it, you can learn more about it{" "}
          <ExtLink href="https://en.wikipedia.org/wiki/Python_(programming_language)">
            here.
          </ExtLink>
          <br />
          In this challenge, a python script, which is given below, has
          scrambled the flag to be unreadable, and output it below.
          <br />
          The flag given in the script IS NOT the flag you are meant to find.
          <br />
          See if you can unscramble the text below and find the actual flag.
        </p>
        <code className={styles.code}>
          s1ng{"}"}ev3ras1c_cod3_rcow{"{"}b
          <br />
          Download the python script{" "}
          <a
            href="/chal/slitheringsnakes.py"
            className={styles.download}
            download="slitheringsnakes.py"
          >
            here.
          </a>
        </code>
        <FlagForm id={7}></FlagForm>
      </main>
      <Footer></Footer>
    </div>
  );
}
