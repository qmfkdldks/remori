import React from "react";
import Prismic from "prismic-javascript";
import { client, linkResolver } from "../config/prismic";

export default class extends React.Component {
  static async getInitialProps({ req, res }) {
    const posts = await client.query(
      Prismic.Predicates.at("document.type", "image-post")
    );

    let body = "";
    posts.results.forEach(post => {
      body += `https://remori.com.ar/${linkResolver(post)}\r\n`;
    });

    res.setHeader("Content-Type", "text/plain");
    res.write(body);
    res.end();
  }
}
