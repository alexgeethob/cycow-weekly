import Head from "next/head";
import styles from "/styles/Chal.module.css";
import { FlagForm } from "/components/chal_components";
import { getData } from "/firebase/retrieve";
import { Nav, Footer } from "/components/main_components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmileWink } from "@fortawesome/free-regular-svg-icons";

export async function getServerSideProps(context) {
  const props = await getData(6);
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
        <title>Challenge 6: Logging Lookup </title>
        <meta name="description" content="Not sponsored (yet)" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Nav></Nav>
        <h1 className={styles.title}>Challenge 6: Logging Lookup </h1>
        <h2 className={styles.category}>Reconnaissance</h2>
        <p className={styles.body}>
          This isn&apos;t going to be a hard challenge, but it will be
          interesting.
          <br />
          Sometimes the best way to learn about something is to go out and
          research for yourself. So for this challenge, you're going to have to
          look for yourself.
          <br />
          Good Luck! <FontAwesomeIcon icon={faSmileWink} />
        </p>
        <code className={styles.code}>
          What's the CVE for the recent widespread vulnerability that was
          reported in a Java framework in December of 2021? Remember to wrap
          your answer in cow{"{}"}
        </code>
        <FlagForm correct={flag}></FlagForm>
      </main>
      <Footer />
    </div>
  );
}
