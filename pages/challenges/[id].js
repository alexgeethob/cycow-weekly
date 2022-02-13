import Head from "next/head";
import styles from "/styles/Chal.module.css";
import { FlagForm } from "/components/chal_components";
import { Nav, Footer } from "/components/main_components";
import { getInfo, getFlag } from "/firebase/retrieve";
import { setCookies } from "cookies-next";
import InterweaveWrapper from "/components/interweave_wrapper";
import { useState, useEffect } from "react";

const totalChallenges = 8;
export async function getStaticProps(context) {
  const params = { context }.context.params;
  const id = parseInt(params.id);
  if (id < 1 || id > totalChallenges) {
    return { props: { error: true, msg: "Invalid Challenge ID" } };
  }
  let props = await getInfo(id);
  if (props.error) return { props: { error: true } };
  props.data.id = id;
  if (id === 4) {
    const flag = await getFlag(id);
    props.data.flag = flag.flag;
  }
  return { props: props.data };
}
export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: "1" } },
      { params: { id: "2" } },
      { params: { id: "3" } },
      { params: { id: "4" } },
      { params: { id: "5" } },
      { params: { id: "6" } },
      { params: { id: "7" } },
      { params: { id: "8" } },
    ],
    fallback: true,
  };
}

export default function ChalPage(props) {
  const [id, setID] = useState(props.id);
  useEffect(() => {
    setID(props.id);
  }, [props.id]);

  if (props.error) {
    return (
      <div className={styles.container}>
        <Head>
          <title>Invalid Request</title>
          <meta name="description" content="Not sponsored (yet)" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
          <Nav></Nav>
          <h1 className={styles.category}>
            An error occurred during your request.
          </h1>
          <p className={styles.code}>
            {props.msg ?? "Contact an administrator"}
          </p>
        </main>
        <Footer></Footer>
      </div>
    );
  }
  if (id === 4) {
    setCookies("Secret", props.flag, {
      path: "/challenges/4",
      encode: function (a) {
        return a;
      },
    });
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>
          Challenge {id}: {props.title}
        </title>
        <meta name="description" content="Not sponsored (yet)" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Nav></Nav>
        <h1 className={styles.title}>
          Challenge {id}: {props.title}
        </h1>
        <h2 className={styles.category}>{props.category}</h2>
        <p className={styles.body}>
          <InterweaveWrapper content={props.body} />
        </p>
        <code className={styles.code}>
          <InterweaveWrapper content={props.code} />
        </code>
        <FlagForm id={id}></FlagForm>
      </main>
      <Footer></Footer>
    </div>
  );
}
