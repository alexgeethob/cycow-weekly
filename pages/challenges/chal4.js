import Head from "next/head";
import styles from "/styles/Chal.module.css";
import { FlagForm } from "/components/chal_components";
import { getData } from "/firebase/retrieve";
import { Nav, Footer, ExtLink } from "/components/main_components";
import { setCookies } from "cookies-next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmileWink } from "@fortawesome/free-regular-svg-icons";

export async function getStaticProps(context) {
  const props = await getData(4);
  return { props: props };
}

export default function Chal4(props) {
  if (props.error === true) {
    return <h1>Loading...</h1>;
  }

  const flag = props.flag;
  setCookies("Secret", flag, {
    path: "/challenges/chal4",
    encode: function (a) {
      return a;
    },
  });

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
          When a client requests anything from a webserver, cookies are usually
          included in that request.
          <br />
          Cookies are mostly stored client-side, and they help store information
          that might not be too important or should be temporary, such as
          storing user preferences/keeping a user logged in.
          <br />
          There are several ways to access cookies, such as through Browser
          Developer Tools, but a good Chrome extension can be found{" "}
          <ExtLink href="https://chrome.google.com/webstore/detail/editthiscookie/fngmhnnpilhplaeedifhccceomclgfbg">
            here.
          </ExtLink>
          <br />
          Of course, this topic was chosen as Santa always enjoys his milk and
          cookies <FontAwesomeIcon icon={faSmileWink} />
        </p>
        <code className={styles.code}>
          Have a merry Christmas (or other holiday) and a Happy New Year!
        </code>
        <FlagForm id={4}></FlagForm>
      </main>
      <Footer />
    </div>
  );
}
