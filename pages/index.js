import Head from "next/head";
import styles from "/styles/Home.module.css";
import {
  Nav,
  Footer,
  Title,
  Card,
  LinkCard,
  Grid,
} from "/components/main_components";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>CyCow Weekly</title>
        <meta name="description" content="Not sponsored (yet)" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Title
          title="Cyber Cow Weekly"
          subtitle="Weekly beginner-friendly cybersecurity challenges!"
        >
          {" "}
        </Title>
        <Nav></Nav>
        <Grid>
          <LinkCard
            name="About This Site &rarr;"
            message="Find out more about this site and how it was created"
            link="/about"
          ></LinkCard>
          <LinkCard
            name="Quick Guide &rarr;"
            message="Get a quick guide into cybersecurity"
            link="/guide"
          ></LinkCard>
          <LinkCard
            name="Get Started &rarr;"
            message="Try out a challenge now!"
            link="/challenges"
          ></LinkCard>
          <Card
            name="Source Code &rarr;"
            message="This website is fully uploaded online"
            link="https://github.com/alexgeethob/cycow-weekly"
          ></Card>
          <Card
            name="Other Projects &rarr;"
            message="Some of my other projects"
            link="https://github.com/alexgeethob"
          ></Card>
        </Grid>
      </main>
      <Footer></Footer>
    </div>
  );
}
