import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Besnik</title>
        <meta
          name="description"
          content="Automate the way you search through hashtags and suggested profiles to find results 100x faster."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>Header</header>

      <main>
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
        <h6>Heading 6</h6>
        <p>Body</p>
      </main>

      <footer>Footer</footer>
    </div>
  );
}
