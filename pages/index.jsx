import React from "react";
import Head from "next/head";
import MainBanner from "../components/MainBanner";
import BoxArea from "../components/BoxArea";
import RecentWork from "../components/RecentWork";
import AboutArea from "../components/AboutArea";
import ServiceArea from "../components/ServiceArea";
// import ContactArea from "../components/Contact";
// import ServicesArea from '../components/home-one/ServicesArea';

const Index = () => {
  return (
    <>
      <Head>
        <title>Remori Startup Argentina</title>
        <meta
          name="description"
          content="Platform to meet startup partners, projects and passions in Buenos Aires."
        />
      </Head>
      <MainBanner />
      <BoxArea />
      <RecentWork />
      <AboutArea />
      <ServiceArea />
    </>
  );
};

export default Index;
