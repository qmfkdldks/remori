import React from "react";
import Head from "next/head";
import { RichText, Date } from "prismic-reactjs";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Article from "../components/Article";

import { client, linkResolver } from "../config/prismic";

const Post = props => (
  <>
    <Head>
      <title>{RichText.asText(props.post.data.head)}</title>
      <meta
        name="description"
        content="Remori is a custom software and app development company."
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
    <Article
      head={RichText.render(props.post.data.head)}
      date={Date(props.post.data.date).toString()}
      url={linkResolver(props.post)}
    >
      {RichText.render(props.post.data.content)}
    </Article>
    <Footer />
  </>
);

Post.getInitialProps = async context => {
  const { uid } = context.query;
  const post = await client.getByUID("image-post", uid);

  return { post };
};

export default Post;
