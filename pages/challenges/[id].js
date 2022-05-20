import React, { useState, useEffect } from "react";
import Head from "next/head";
import styles from "/styles/Chal.module.css";
import { FlagForm, Incorrect, Correct, Unanswered } from "/components/chal_components";
import { Nav, Footer } from "/components/main_components";
import { getInfo, getFlag } from "/firebase/retrieve";
import { setCookies } from "cookies-next";
import InterweaveWrapper from "/components/interweave_wrapper";

const totalChallenges = 11;
export async function getStaticProps(context) {
  const params = { context }.context.params;
  const id = parseInt(params.id);
  if (id < 1 || id > totalChallenges) {
    return { props: { error: true, msg: "Invalid Challenge ID" } };
  }
  const props = await getInfo(id);
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
      { params: { id: "9" } },
      { params: { id: "10" } },
      { params: { id: "11" } },
    ],
    fallback: true,
  };
}

export default function ChalPage(props) {

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
  if (props.id === 4) {
    setCookies("Secret", props.flag, {
      path: "/challenges/4",
      encode: function (a) {
        return a;
      },
    });
  }
  const [result, setResult] = useState(0);
  const form = (<FlagForm id={props.id} setResult={setResult}></FlagForm>);
  var resultBox;
  if (result == 1) {
    resultBox = (<Correct></Correct>);
  }
  else if (result == -1) {
    resultBox = (<Incorrect></Incorrect>);
  }
  else {
    resultBox = (<Unanswered></Unanswered>);
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>
          Challenge {props.id}: {props.title}
        </title>
        <meta name="description" content="Not sponsored (yet)" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Nav></Nav>
        {resultBox}
        <h1 className={styles.title}>
          Challenge {props.id}: {props.title}
        </h1>
        <h2 className={styles.category}>{props.category}</h2>
        <p className={styles.body}>
          <InterweaveWrapper content={props.body} />
        </p>
        <code className={styles.code}>
          <InterweaveWrapper content={props.code} />
        </code>
        {form}
      </main>
      <Footer></Footer>
    </div>
  );
}
