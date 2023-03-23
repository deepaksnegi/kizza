import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import Services from "@/components/Services";
import Head from "next/head";
import style from "../styles/Home.module.css";

const Home = () => {
  return (
    <Layout>
      <div className={style.home}>
        <Head>
          <title>Kizza: Your Happy Place</title>
        </Head>
        <main>
          <Hero />
          <Services />
        </main>
      </div>
    </Layout>
  );
};

export default Home;
