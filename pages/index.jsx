import React from "react";
import { Element } from "react-scroll";
import Head from "next/head";
import MainBanner from "../components/MainBanner";
import BoxArea from "../components/BoxArea";
import RecentWork from "../components/RecentWork";
import AboutArea from "../components/AboutArea";
import ServiceArea from "../components/ServiceArea";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

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
      <Element name="projects">
        <RecentWork />
      </Element>
      <Element name="about">
        <AboutArea />
      </Element>
      <Element name="services">
        <ServiceArea />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
      <Footer />
    </>
  );
};

export default Index;
