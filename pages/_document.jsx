import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

import GoogleTagManager from "../components/GoogleTagManager";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
        </Head>

        <body>
          <Main />
          <NextScript />
          <GoogleTagManager gtmId="GTM-WJ367PD" />
        </body>
      </Html>
    );
  }
}
