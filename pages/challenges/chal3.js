import Head from "next/head";
import styles from "/styles/Chal.module.css";
import { FlagForm } from "/components/chal_components";
import { getData } from "/firebase/retrieve";
import { Nav, Footer } from "/components/main_components";

export async function getServerSideProps(context) {
  const props = await getData(3);
  return { props: props };
}

export default function Chal1(props) {
  if (props.error === true) {
    return <h1>Loading...</h1>;
  }

  const flag = props.flag;

  return (
    <div className={styles.container}>
      <Head>
        <title>Challenge 3: Stripped Suffix</title>
        <meta name="description" content="Not sponsored (yet)" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Nav></Nav>
        <h1 className={styles.title}>Challenge 3: Stripped Suffix</h1>
        <p className={styles.body}>
          Almost all of the time, data is stored on computers as files, which
          are seperated and maintained by the computer&apos;s operating system.
          <br />
          Files usually contain a small section of data at the beginning called{" "}
          <a
            className={styles.link}
            rel="noreferrer"
            target="_blank"
            href="https://en.wikipedia.org/wiki/List_of_file_signatures"
          >
            magic bytes.
          </a>
          <br />
          These bytes help tell the computer how to interpret and serve these
          files to the user, and are commonly shown to us in the form of file
          extensions.
          <br />
          In this challenge, the flag is part of the file, but the file itself
          has had its extension removed.
          <br />
          See if you can find the flag.
        </p>
        <code className={styles.code}>
          Download the file{" "}
          <a href="/chal/3" className={styles.download} download="3">
            here.
          </a>
        </code>
        <FlagForm correct={flag}></FlagForm>
      </main>
      <Footer></Footer>
    </div>
  );
}
