import Head from "next/head";
import Image from "next/image";
import styles from "/styles/Home.module.css";
import Link from "next/link";
import Next from "/public/sample/next.png";
import Node from "/public/sample/node.png";
import Code1 from "/public/sample/card.PNG";
import Code2 from "/public/sample/underline.PNG";
import {
  Nav,
  Footer,
  Title,
  Section,
  ExtLink,
} from "/components/main_components";

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About Us</title>
        <meta name="description" content="Not sponsored (yet)" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Title title="About"> </Title>
        <Nav></Nav>
        <Section title="Overall Goal">
          <Link href="/" className="link">
            Cyber Cow Weekly
          </Link>{" "}
          was created to help teach and guide newer students to cybersecurity.
          Every week, new cybersecurity challenges are released for students to
          solve. These challenges may include topics such as cryptography,
          forensics, reverse engineering, website vulnerablities, and so on.{" "}
          <br />
          Click{" "}
          <Link href="/challenges" className="link">
            here
          </Link>{" "}
          to find out more about the challenges <br />
          Originally, CCW was planned to be a one-time CTF, but both design and
          infrastructure were a huge problem. There was nowhere to host the
          challenges, and online services like CTFd cost too much for me.
        </Section>
        <Section title="Current Compromises">
          <div className={styles.picGroup}>
            <Image
              src={Next}
              alt="NextJS logo"
              className={styles.pic}
              height={120}
              width={200}
            ></Image>
            <Image
              src={Node}
              alt="NodeJS logo"
              height={120}
              width={200}
              className={styles.pic}
            ></Image>
          </div>
          I learned about{" "}
          <ExtLink href="https://vercel.com/home">Vercel&apos;s </ExtLink>
          NextJS, which runs on NodeJS and React,{" "}
          <span style={{ fontSize: "1px" }}>thanks Akaash</span>
          and managed to use that to create this site that you are currently
          viewing.
          <br />
          <div className={styles.picGroup}>
            <Image
              src={Code1}
              alt="CSS code snippet"
              height={270}
              width={400}
              className={styles.pic}
            ></Image>
            <Image
              src={Code2}
              alt="CSS code snippet"
              height={240}
              width={390}
              className={styles.pic}
            ></Image>
          </div>
          <br />
          Also, do note that this website is currently only built for
          Chrome/Chromium browsers and ideally a 16:9 resolution. For now, flag
          submission has been added, but it is still a bit buggy.
        </Section>
        <Section
          title="Future Goals"
          text="In the future, I plan to eventually convert everything to typescript
          (currently on js), add user input and verification, add api
          accessibility to get challenges, and maybe eventually add an account
          system using Firebase. Find out more "
        >
          <ExtLink href="https://github.com/alexgeethob/cycow-weekly">
            here
          </ExtLink>
        </Section>
        <Image
          alt="Picture of cow"
          src="/cow.ico"
          height={20}
          width={30}
        ></Image>
      </main>
      <Footer></Footer>
    </div>
  );
}
