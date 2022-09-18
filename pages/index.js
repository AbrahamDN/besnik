import Head from "next/head";
import Image from "next/image";
import Container from "../components/Container/Container";
import Header from "../components/Header/Header";
import styles from "../styles/Home.module.scss";
import Card from "../components/Card/Card";
import Gradient from "../components/Gradient/Gradient";
import InsightBanner from "../components/InsightBanner/InsightBanner";
import Footer from "../components/Footer/Footer";

export default function Home() {
  const insights = [
    { number: 2260, label: "Satisfied Brands" },
    { number: 1324, label: "Satisfied Clients" },
    { number: 3453, label: "Sponsored" },
    { number: 9786, label: "Completed" },
  ];

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

        <InsightBanner
          title="Search through more than 11 million social media profiles"
          desc="Heepsy’s search filters help you find exactly what you’re looking for, and our influencer reports provide you with the metrics"
          insights={insights}
        />
      </main>

      <Footer />
    </div>
  );
}
