import Head from "next/head";
import styles from "/styles/Chal.module.css";
import { FlagForm } from "/components/chal_components";
import { Nav, Footer } from "/components/main_components";

export default function Chal1(props) {
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
        <h2 className={styles.category}>Cryptography</h2>
        <p className={styles.body}>
          Even back before computers existed, information was still being
          encrypted and decrypted.
          <br />
          Encryption involves taking information and transfiguring it in such a
          way so that it appears unreadable, while decryption is the opposite,
          taking the encrypted message and turning it back into a readable
          message.
          <br />
          See if you can decode the message from this famous form of message
          encoding.
        </p>
        <code className={styles.code}>
          -.-. --- .-- --- .--. . -. -... .-. .- -.-. . .-- . .-.. -.-. --- -- .
          ..--- -.-. -.-- -.-. --- .-- -....- .-- . . -.- .-.. -.-- -.-. .-..
          --- ... . -... .-. .- -.-. .
        </code>
        <FlagForm id={1}></FlagForm>
      </main>
      <Footer></Footer>
    </div>
  );
}
