import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

import GoogleTagManager from "../components/GoogleTagManager";

const data = {
  "@context": "https://schema.org",
  "@type": "Organization",
  url: "http://remori.com.ar",
  logo:
    "https://www.geniuscr8.com/wp-content/uploads/2018/07/Genius-Concept-Sample-Logo-2.jpg",
  name: "Remori"
};

const JsonLd = ({ data }) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
  />
);

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <JsonLd data={data} />
        </Head>

        <body style={{ margin: "unset" }}>
          <Main />
          <NextScript />
          <GoogleTagManager gtmId="GTM-TRCCFV4" />
        </body>
      </Html>
    );
  }
}
