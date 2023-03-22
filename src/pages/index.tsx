import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
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
        </main>
      </div>
    </Layout>
  );
};

export default Home;
