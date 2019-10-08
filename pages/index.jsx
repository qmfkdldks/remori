import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import MainBanner from "../components/MainBanner";
import BoxArea from "../components/BoxArea";
import RecentWork from "../components/RecentWork";
import AboutArea from "../components/AboutArea";
import ServiceArea from "../components/ServiceArea";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Contact from "../components/Contact"
// const Contact = dynamic(
//   () => import("../components/Contact"),
//   { ssr: false }
// );

const Index = () => {
  return (
    <>
      <Head>
        <title>Remori Data Driven Startup Argentina</title>
        <meta
          name="description"
          content="Platform to meet startup partners, projects and passions in Buenos Aires."
        />
      </Head>
      <Navbar />
      <MainBanner />
      <BoxArea />
      <RecentWork />
      <AboutArea />
      <ServiceArea />
      <Contact />
      <Footer />
    </>
  );
};

export default Index;
