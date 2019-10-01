import React from "react";
import Head from "next/head";
import MainBanner from "../components/molecular/MainBanner";
import BoxArea from "../components/molecular/BoxArea";
import RecentWork from "../components/container/RecentWork";
import AboutArea from "../components/molecular/AboutArea";
import ContactArea from "../components/molecular/Contact";
// import ServicesArea from '../components/home-one/ServicesArea';
import ServiceArea from "../components/molecular/ServiceArea";
import Worker from "../components/animations/Service";

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
