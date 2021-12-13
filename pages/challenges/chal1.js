import Head from "next/head";
import Image from "next/image";
import styles from "/styles/Chal.module.css";
import Link from "next/link";
import { FlagForm } from "/components/chal_components";
import { getData } from "/firebase/retrieve";

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
        <link rel="icon" href="/o.ico" />
      </Head>

      <main className={styles.main}>
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
        <h1 className={styles.title}>Challenge 1: Dots and Dashes</h1>
        <p className={styles.body}>
          Even back before computers existed, information was still being
          encrypted and decrypted.
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
      <footer>
        <a href="mailto:alexzhang05@gmail.com">Contact</a>
      </footer>
    </div>
  );
}
