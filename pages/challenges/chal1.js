import Head from "next/head";
import styles from "/styles/Chal.module.css";
import { FlagForm } from "/components/chal_components";
import { Nav, Footer } from "/components/main_components";
import { getInfo } from "/firebase/retrieve";
import Interweave from "interweave";

export async function getStaticProps(context) {
  const props = await getInfo(1);
  if (props.error) return { props: { error: true } };
  return { props: props.data };
}

export default function Chal1(props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Challenge 1: {props.title}</title>
        <meta name="description" content="Not sponsored (yet)" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Nav></Nav>
        <h1 className={styles.title}>Challenge 1: {props.title}</h1>
        <h2 className={styles.category}>{props.category}</h2>
        <p className={styles.body}>
          <Interweave content={props.body}/>
        </p>
        <code className={styles.code}>{props.code}</code>
        <FlagForm id={1}></FlagForm>
      </main>
      <Footer></Footer>
    </div>
  );
}
