import Head from "next/head";
import styles from "/styles/Chal.module.css";
import { FlagForm } from "/components/chal_components";
import { getData } from "/firebase/retrieve";
import { Nav, Footer, ExtLink } from "/components/main_components";

export async function getServerSideProps(context) {
  const props = await getData(5);
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
        <title>Challenge 5: (Ten Plus Six) Times Four</title>
        <meta name="description" content="Not sponsored (yet)" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Nav></Nav>
        <h1 className={styles.title}>Challenge 5: (Ten Plus Six) Times Four</h1>
        <h2 className={styles.category}>Cryptography</h2>
        <p className={styles.body}>
          Remember the second challenge?
          <br />
          Well, this time the data is hidden another layer. See if you can find
          the flag.
          <br />
          This{" "}
          <ExtLink href="https://www.dcode.fr/cipher-identifier">
            site
          </ExtLink>{" "}
          might help you if you get stuck.
        </p>
        <code className={styles.code}>
          59 32 39 33 65 32 46 75 5A 46 39 68 58 32 68 68 63 48 42 35 58 32 34
          7A 64 31 39 35 4D 32 46 79 49 56 38 79 4D 44 49 79 66 51 3D 3D
        </code>
        <FlagForm correct={flag}></FlagForm>
      </main>
      <Footer />
    </div>
  );
}
