import Head from "next/head";
import Image from "next/image";
import Container from "../components/Container/Container";
import Header from "../components/Header/Header";
import styles from "../styles/Home.module.scss";
import Card from "../components/Card/Card";
import Gradient from "../components/Gradient/Gradient";

export default function Home() {
  return (
    <div className={styles.page}>
      <Head>
        <title>Besnik</title>
        <meta name="description" content="Automate the way you search through hashtags and suggested profiles to find results 100x faster." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <Container size="xs">
          <p>Main content</p>
        </Container>
      </main>

      <Container>
        <Card padding="0">
          <Gradient borderRadius="1.25em" height="auto" title="Subscribe our newsletter" description="Join thousands of marketers and entrepreneurs for a 2-day event at the forefront of social commerce." buttonText="Subscribe" />
        </Card>
      </Container>

      <footer>Footer</footer>
    </div>
  );
}
