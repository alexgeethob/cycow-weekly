import Head from "next/head";
import styles from "/styles/Chal.module.css";
import { FlagForm } from "/components/chal_components";
import {getData} from "/firebase/retrieve";
import { Nav, Footer } from "/pages/index";


export async function getServerSideProps(context) {
  const props = await getData(2);
  return {props: props};
}

export default function Chal1(props) {
  if (props.error === true) {
    return <h1>Loading...</h1>;
  }

  const flag = props.flag;

  return (
    <div className={styles.container}>
      <Head>
        <title>Challenge 2: Ten Plus Six</title>
        <meta name="description" content="Not sponsored (yet)" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      <Nav></Nav>
        <h1 className={styles.title}>Challenge 2: Ten Plus Six</h1>
        <p className={styles.body}>
          Of course, now that we are in the modern age, data is stored mostly as bits of 1&apos;s and 0&apos;s.
          <br />
          Often, a group of 8 bits will be compressed into one byte. This byte can be represented as a pure number,
          but more than often you will see it represented as a hexadecimal number with 2 digits, as 1 hexadecimal digit
          is 4 bits.
          <br />
          Also, a common way of storing English text is ASCII, which maps certain numbers in the range 0-255 to a
          specific character. See if you can decode the flag.
        </p>
        <code className={styles.code}>
          63 6f 77 7b 68 33 78 5f 69 73 5f 74 68 33 5f 62 65 73 74 21 7d
        </code>
        <FlagForm correct={flag}></FlagForm>
      </main>
      <Footer></Footer>
    </div>
  );
}
