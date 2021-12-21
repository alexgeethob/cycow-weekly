import Head from "next/head";
import styles from "/styles/Chal.module.css";
import { FlagForm } from "/components/chal_components";
import { getData } from "/firebase/retrieve";
import { Nav, Footer } from "/components/main_components";

export async function getServerSideProps(context) {
  const props = await getData(1);
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
        <title>Challenge 1: Dots and Dashes</title>
        <meta name="description" content="Not sponsored (yet)" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      <Nav></Nav>
        <h1 className={styles.title}>Challenge 1: Dots and Dashes</h1>
        <p className={styles.body}>
          Even back before computers existed, information was still being
          encrypted and decrypted.
          <br />
          Encryption involves taking information and transfiguring it in
          such a way so that it appears unreadable, while decryption is the opposite,
          taking the encrypted message and turning it back into a readable message.
          <br />
          See if you can decode the message from this famous form of message
          encoding.
        </p>
        <code className={styles.code}>
          -.-. --- .-- --- .--. . -. -... .-. .- -.-. . .-- . .-.. -.-. --- -- .
          ..--- -.-. -.-- -.-. --- .-- -....- .-- . . -.- .-.. -.-- -.-. .-..
          --- ... . -... .-. .- -.-. .
        </code>
        <FlagForm correct={flag}></FlagForm>
      </main>
      <Footer></Footer>
    </div>
  );
}
