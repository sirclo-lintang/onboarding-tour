import type { NextPage } from "next";
import Head from "next/head";

import Menu from "../components/Menu";
import Dashboard from "../components/Dashboard";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Onboarding Tour</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Menu>
        <Dashboard />
      </Menu>
    </div>
  );
};

export default Home;
