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
        <Section title="Intro"
          text="This site was meant to be an introduction to cybersecurity through CTF style challenges. It is not sponsored by any organization,
        and was created by me individually in my free time. Currently, the available challenges can be found ">
          <Link href="/challenges">here.</Link>
        </Section>
        <Section title="About"
          text="This site was my first experience into web dev, and I started work on it when I wasn't even too confident in my own cybersecurity skills.
          However, it was still a really good learning experience. Of course, I do have some regrets starting with a fullstack JS framework before I even 
          had a basic understanding of web apps as a whole, but I'm glad I got to experience blindly learning not only React, but also about SSR, DBs, and more."
        ></Section>
        <Section title=""
          text="Making these challenges also improved my cybersecurity foundations, though I don't really believe that they are too 'beginner friendly'. If you are really
          looking for somewhere to start learning, PicoCTF/Primer is a great place to start. Still, these challenges are based on a lot of concepts that I learned
          through my own cybersecurity experiences, and I hope that at least someone learns something new or refreshes their already learned concepts through these challenges."
        ></Section>
        <Section
          title="Hiatus"
          text="However, I don't plan on adding any more challenges for the time being. While I may return to this site, for now, it will remain as is.
          In fact, the site itself contains some serious security issues, but I'm willing to leave them for anyone else to find. Maybe in the future, when I feel more invested
          in the project, I'll add more challenges. (Most likely, I will just create an entirely new site though.)"
        >
        </Section>
        <Section
          title="More"
          text="If you're interested in any of my other projects, you can find them on my Github "
        >
          <ExtLink href="https://github.com/flocto">here.</ExtLink>
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
