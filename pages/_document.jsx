import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

import GoogleTagManager from "../components/GoogleTagManager";

const data = {
  "@context": "https://schema.org",
  "@type": "Corporation",
  name: "Remori",
  alternateName: "Remori Argentina",
  url: "https://remori.com.ar",
  logo: "https://remori.com.ar/static/logo.png",
  sameAs: [
    "https://github.com/qmfkdldks/remori",
    "https://remori.com.ar",
    "https://www.linkedin.com/in/brian-kang-56ab51b1/"
  ]
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
          <meta
            name="google-site-verification"
            content="cdgC774hmMVXhOP-m65gdKcnRlS4ooI8S9k-e5d5FsE"
          />
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
