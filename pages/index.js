import Head from "next/head";
import Image from "next/image";
import Container from "../components/Container/Container";
import Header from "../components/Header/Header";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
      <Head>
        <title>Besnik</title>
        <meta
          name="description"
          content="Automate the way you search through hashtags and suggested profiles to find results 100x faster."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <Container size="xs">
          <p>Main content</p>
        </Container>
      </main>

      <footer>Footer</footer>
    </div>
  );
}
