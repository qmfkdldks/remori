import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
import GoogleTagManager from "../components/GoogleTagManager";
import GoogleSchema from "../components/GoogleSchema";

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="google-site-verification"
            content="cdgC774hmMVXhOP-m65gdKcnRlS4ooI8S9k-e5d5FsE"
          />
          {this.props.styleTags}
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
