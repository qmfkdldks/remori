import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

import GoogleTagManager from "../components/GoogleTagManager";
import GoogleSchema from "../components/GoogleSchema";

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
          <GoogleSchema />
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
