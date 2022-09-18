import Head from "next/head";
import Image from "next/image";
import Container from "../components/Container/Container";
import Header from "../components/Header/Header";
import styles from "../styles/Home.module.scss";
import Card from "../components/Card/Card";
import Gradient from "../components/Gradient/Gradient";
import InsightBanner from "../components/InsightBanner/InsightBanner";
import Footer from "../components/Footer/Footer";
import FeatureCard from "../components/FeatureCard/FeatureCard";

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
          <section className={styles.feature__section}>
            <h2>Solutions for every need</h2>
            <p>
              Join thousands of marketers and entrepreneurs for a 2-day event at
              the forefront of social commerce.
            </p>

            <FeatureCard
              tag="Influencer"
              title="Influencer marketing"
              description="Create infinite pieces of content with our influencer product. Build,streamline,manage large-scale influencer programs"
              image="/assets/feature-card-1.png"
            />

            <FeatureCard
              tag="Community"
              title="Community marketing"
              description="Bring your relationships to new heights with our community product. Discover your biggest enthusiasts "
              image="/assets/feature-card-2.png"
              rowReverse
            />

            <FeatureCard
              tag="services"
              title="Managed services"
              description="Our full-service solution lets our experts do the heavy lifting to optimize your community for brand building and storytelling"
              image="/assets/feature-card-3.png"
            />
          </section>
        </Container>

        <InsightBanner
          title="Search through more than 11 million social media profiles"
          desc="Heepsy’s search filters help you find exactly what you’re looking for, and our influencer reports provide you with the metrics"
          insights={insights}
        />

        <Container size="xs">
          <section className={styles.service__section}>
            <h2>Solutions for every need</h2>

            <p>
              Join thousands of marketers and entrepreneurs for a 2-day event at
              the forefront of social commerce.
            </p>

            <div className={styles.service__cards}>
              ----- Service cards here -----
            </div>
          </section>

          <section className={styles.testimonial__section}>
            <h2>Happy Clients</h2>

            <p>
              The Marketing Accountability Standards Board (MASB) endorses the
              definitions, purposes, and constructs of classes
            </p>

            <div className={styles.testimonial__card}>
              ----- testimonial card here -----
            </div>
          </section>
        </Container>

        <Container style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
          <Card padding="0">
            <Gradient
              borderRadius="1.25em"
              height="auto"
              title="Subscribe our newsletter"
              description="Join thousands of marketers and entrepreneurs for a 2-day event at the forefront of social commerce."
              buttonText="Subscribe"
            />
          </Card>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
