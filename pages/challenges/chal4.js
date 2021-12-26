import Head from "next/head";
import styles from "/styles/Chal.module.css";
import { FlagForm } from "/components/chal_components";
import { getData } from "/firebase/retrieve";
import { Nav, Footer } from "/components/main_components";
import { setCookies } from 'cookies-next';

export async function getServerSideProps(context) {
  const props = await getData(4);
  return { props: props };
}

export default function Chal1(props) {
  if (props.error === true) {
    return <h1>Loading...</h1>;
  }

  const flag = props.flag;
  setCookies("Secret",flag,{path: "/challenges/chal4", encode:function(a){return a;}});

  return (
    <div className={styles.container}>
      <Head>
        <title>Challenge 4: Milk and Cookies</title>
        <meta name="description" content="Not sponsored (yet)" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Nav></Nav>
        <h1 className={styles.title}>Challenge 4: Milk and Cookies</h1>
        <h2 className={styles.category}>Web</h2>
        <p className={styles.body}>
          When a client requests anything from server,
          cookies are usually included in that request.
          <br />
          They are mostly stored client-side, and they help store information that might not be too important or should be temporary,
          such as storing user preferences/keeping a user logged in.
          <br />
          There are several ways to access cookies, such as through Browser Developer Tools,
          but a good Chrome extension can be found {" "}
          <a
            className={styles.link}
            rel="noreferrer"
            target="_blank"
            href="https://chrome.google.com/webstore/detail/editthiscookie/fngmhnnpilhplaeedifhccceomclgfbg"
          >
            here.
          </a>
          <br />
          Of course, this topic was chosen as Santa always enjoys his milk and cookies ;)
        </p>
        <code className={styles.code}>
        Have a merry Christmas (or other holiday) and a Happy New Year!
        </code>
        <FlagForm correct={flag}></FlagForm>
      </main>
      <Footer></Footer>
    </div>
  );
}
