import Head from "next/head";
import styles from "/styles/Home.module.css";
import Link from "next/link";
import { Nav, Footer, Title, Section } from "/components/main_components";

export default function Guide() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Quick Guide</title>
        <meta name="description" content="Not sponsored (yet)" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Title title="Quick Guide to Cybersecurity"> </Title>
        <Nav></Nav>
        <Section
          title="Overview"
          text="Computer security, cybersecurity, or information technology security
         (IT security) is the protection of computer systems and networks from information disclosure, 
         theft of or damage to their hardware, software, or electronic data, as well as from the disruption
          or misdirection of the services they provide. It is becoming increasingly significant due
           to the continuously expanding reliance on computer systems and the growth of smart devices, including smartphones,
             televisions, and the various devices that constitute the Internet."
        ></Section>
        <Section
          title="Challenges"
          text="Find out more about the challenges hosted on this site "
        >
          <Link href="/challenges">
            <a>here.</a>
          </Link>
        </Section>
        <Section
          title="Different Subtopics"
          text="Though cybersecurity is a vast and varied field, it can mostly be split up into
        a few main topics. Of course, these topics are not solely defining of a challenge or idea, and often times, especially in
        the wild, these topics will intermingle and be connected in such a way that knowing some of every topic is necessary.
        Some main topics that will be focused on on this site will be cryptography, forensics, and reconnaissance, but of course challenges
        fitting the other types may also be released."
        ></Section>
        <Section
          title="Cryptography"
          text="Cryptography refers to the study of techniques for secure communication
         in the presence of adversarial behavior. More generally, cryptography is about constructing and analyzing
        protocols that prevent third parties or the public from reading private messages. Various aspects in information
           security such as data confidentiality, data integrity, authentication, and non-repudiation are central to modern cryptography. 
           In challenges, cryptography will often show up in one of two ways, modern and classic cryptography. Modern refers to information
           obfuscation now possible in the computer age, such as hashes or encodings, while classic refers to more reknown ideas such as basic ciphers."
        ></Section>
        <Section
          title="Forensics"
          text="Forensics is a branch of digital forensic science pertaining to evidence found in computers
         and digital storage media. The goal of computer forensics is to examine digital media in a forensically sound manner with
        the aim of identifying, preserving, recovering, analyzing and presenting facts and opinions about the digital information.
        In forensics challenges, the goal is usually discovering or piecing together the wanted information from a given file."
        ></Section>
        <Section
          title="Reconnaissance"
          text="Though not an often appearing topic, reconnaissance merely means to gain information via research
        and analysis. However this field can go very far, as shown by various OSINT (open-source intelligence) projects like StackOverflow. 
        Challenges will mostly consist of finding some information given a clue or context (Warning, this topic can go very very far!)."
        ></Section>
        <Section
          title="Web"
          text="Web usually refers to vulnerablities in created websites and web apps. Unfortunately, it is currently not 
        possible at the time to create any web challenges, but maybe in the future :)"
        ></Section>
        <Section
          title="Reverse Engineering and Binary Exploitation"
          text="Reverse Engineering and Binary Exploitation, or pwning, both deal with actively restructuring programs or inputs
        to find sensitive data or remotely execute commands. These two categorys are often hand-in-hand, but unfortunately only Reverse Engineering
        challenges can be posted at this time, as it is not possible to host a virtual box to run commands for Binary Exploitation"
        ></Section>
        <Section
          title="Other"
          text="Cybersecurity is still a very wide and vast field, and there are defintely more topics than those listed head,
        such as networking. Many miscellaneous challenges will be listed under this category. "
        ></Section>
      </main>
      <Footer></Footer>
    </div>
  );
}
