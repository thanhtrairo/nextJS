import styles from "../styles/Home.module.css";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>abc | home</title>
        <meta name="keywords" content="about" />
      </Head>
      <div className={styles.container}>
        <h1>hello my friend</h1>
      </div>
    </>
  );
}
