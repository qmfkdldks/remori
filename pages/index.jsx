import React from "react";
import { Element } from "react-scroll";
import Head from "next/head";
import Link from "next/link";

import Prismic from "prismic-javascript";
import { RichText, Date } from "prismic-reactjs";
import { client, linkResolver, hrefResolver } from "../config/prismic";

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

const Index = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Remori Data Driven Startup Argentina</title>
        <meta
          name="description"
          content="Platform to meet startup partners, projects and passions in Buenos Aires."
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
      {posts.results.map(post => (
        <li key={post.uid}>
          {RichText.render(post.data.head)}
          <Link
            href={hrefResolver(post)}
            as={linkResolver(post)}
            passHref
            prefetch
          >
            <a>{RichText.render(post.data.head)}</a>
          </Link>
          <span>{Date(post.data.date).toString()}</span>
        </li>
      ))}

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
    Prismic.Predicates.at("document.type", "image-post")
  );

  return { posts };
};

export default Index;
