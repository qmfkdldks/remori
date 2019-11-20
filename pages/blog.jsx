import React from "react";
import Router from "next/router";
import Head from "next/head";
import Prismic from "prismic-javascript";
import { client } from "../config/prismic";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PostArea from "../components/PostArea";
import Pagination from "../components/Pagination";

const PERPAGE = 5;

const Index = ({ response: { total_results_size, results }, page }) => {
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
      <Navbar isBlog />
      <PostArea results={results} />
      <Pagination
        currentPage={page}
        perPage={PERPAGE}
        totalSize={total_results_size}
        onClick={page => () => Router.push(`/blog?page=${page}`)}
      />
      <Footer />
    </>
  );
};

Index.getInitialProps = async ({ query: { page = 1 } }) => {
  const response = await client.query(
    Prismic.Predicates.at("document.type", "image-post"),
    { pageSize: PERPAGE, page, orderings: "[my.image-post.date desc]" }
  );

  return { response, page };
};

export default Index;
