import React from "react";
import { Element } from "react-scroll";
import Head from "next/head";
import Prismic from "prismic-javascript";
import { client } from "../config/prismic";

import MainBanner from "../components/MainBanner";
import IconBoxArea from "../components/IconBoxArea";
import PartnersArea from "../components/PartnersArea";
import ProjectArea from "../components/ProjectArea";
import AboutArea from "../components/AboutArea";
import ServiceArea from "../components/ServiceArea";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactArea from "../components/ContactArea";
import CtaArea from "../components/CtaArea";
import PostArea from "../components/PostArea";

const Index = ({ posts }) => {
  return (
    <>
      <Head>
        <title>web and mobile app development company</title>
        <meta
          name="description"
          content="custom software and app development company."
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="static/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="static/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="static/favicon-16x16.png"
        />
        <link rel="manifest" href="static/site.webmanifest" />
      </Head>
      <Navbar />
      <MainBanner />
      <IconBoxArea />
      <PartnersArea />
      <Element name="projects">
        <ProjectArea />
      </Element>
      <Element name="about">
        <AboutArea />
      </Element>
      <Element name="services">
        <ServiceArea />
      </Element>
      <Element name="posts">
        <PostArea posts={posts} />
      </Element>
      <Element name="contact">
        <ContactArea />
      </Element>
      <CtaArea />
      <Footer />
    </>
  );
};

Index.getInitialProps = async context => {
  const posts = await client.query(
    Prismic.Predicates.at("document.type", "image-post"),
    { pageSize: 3, page: 1, orderings: "[my.image-post.date desc]" }
  );

  return { posts };
};

export default Index;
