import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import Menu from "@/components/Menu";
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
          <Menu />
        </main>
      </div>
    </Layout>
  );
};

export default Home;
