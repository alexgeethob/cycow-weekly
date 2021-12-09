import Head from "next/head";
import Image from "next/image";
import styles from "/styles/Home.module.css";
import Link from "next/link";
import {Nav, Footer} from "/pages/index";

export default function Guide() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Quick Guide</title>
        <meta name="description" content="Not sponsored (yet)" />
        <link rel="icon" href="/o.ico" />
      </Head>

      <main className={styles.main}>
        <header>
          <h1 className={styles.title}>Quick Guide to Cybersecurity</h1>
        </header>
        <Nav></Nav>
        <h2 className={styles.subtitle}>Overview</h2>
        <p className={styles.body}>Computer security, cybersecurity, or information technology security
         (IT security) is the protection of computer systems and networks from information disclosure, 
         theft of or damage to their hardware, software, or electronic data, as well as from the disruption
          or misdirection of the services they provide. It is becoming increasingly significant due
           to the continuously expanding reliance on computer systems and the growth of smart devices, including smartphones,
             televisions, and the various devices that constitute the Internet.</p>
        <h2 className={styles.subtitle}>Challenges</h2>
        <p className={styles.body}>Find out more about the challenges hosted on this site{' '}<Link href="/challenges">
              <a>here.</a>
            </Link></p>
        <h2 className={styles.subtitle}>Different Subtopics</h2>
        <p className={styles.body}>Though cybersecurity is a vast and varied field, it can mostly be split up into
        a few main topics. Of course, these topics are not solely defining of a challenge or idea, and often times, especially in
        the wild, these topics will intermingle and be connected in such a way that knowing some of every topic is necessary.
        Some main topics that will be focused on on this site will be cryptography, forensics, and reconnaissance, but of course challenges
        fitting the other types may also be released.</p>
        <h2 className={styles.subtitle}>Cryptography</h2>
        <p className={styles.body}>Cryptography refers to the study of techniques for secure communication
         in the presence of adversarial behavior. More generally, cryptography is about constructing and analyzing
        protocols that prevent third parties or the public from reading private messages. Various aspects in information
           security such as data confidentiality, data integrity, authentication, and non-repudiation are central to modern cryptography. 
           In challenges, cryptography will often show up in one of two ways, modern and classic cryptography. Modern refers to information
           obfuscation now possible in the computer age, such as hashes or encodings, while classic refers to more reknown ideas such as basic ciphers. </p>
        <h2 className={styles.subtitle}>Forensics</h2>
        <p className={styles.body}>Forensics is a branch of digital forensic science pertaining to evidence found in computers
         and digital storage media. The goal of computer forensics is to examine digital media in a forensically sound manner with
        the aim of identifying, preserving, recovering, analyzing and presenting facts and opinions about the digital information.
        In forensics challenges, the goal is usually discovering or piecing together the wanted information from a given file. </p>
        <h2 className={styles.subtitle}>Reconnaissance</h2>
        <p className={styles.body}>Though not an often appearing topic, reconnaissance merely means to gain information via research
        and analysis. However this field can go very far, as shown by various OSINT (open-source intelligence) projects like StackOverflow. 
        Challenges will mostly consist of finding some information given a clue or context (Warning, this can go very very far!).</p>
        <h2 className={styles.subtitle}>Web</h2>
        <p className={styles.body}>Web usually refers to vulnerablities in created websites and web apps. Unfortunately, it is currently not 
        possible at the time to create any web challenges, but maybe in the future :)</p>
        <h2 className={styles.subtitle}>Reverse Engineering and Binary Exploitation</h2>
        <p className={styles.body}>Reverse Engineering and Binary Exploitation, or pwning, both deal with actively restructuring programs or inputs
        to find sensitive data or remotely execute commands. These two categorys are often hand-in-hand, but unfortunately only Reverse Engineering
        challenges can be posted at this time, as it is not possible to host a virtual box to run commands for Binary Exploitation</p>
        <h2 className={styles.subtitle}>Other</h2>
        <p className={styles.body}>Cybersecurity is still a very wide and vast field, and there are defintely more topics than those listed head,
        such as networking. Many miscellaneous challenges will be listed under this category. </p>
      </main>
      <Footer></Footer>
    </div>
  );
}
