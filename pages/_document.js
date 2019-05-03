import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

import styled from 'styled-components';

const Body = styled.body`
padding: 0;
margin: 0;
font-size: 14px;

*, ::after, ::before {
  box-sizing: border-box;
}
`

export default class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      
        <Html lang="en">
            <Head>
                {/* <meta charSet="utf-8" /> */}
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <link rel="icon" type="image/png" href={require("../images/favicon.png")}></link>
            </Head>
            <Body>
              <Main />
              <NextScript />     
            </Body>
        </Html>
        
    )
  }
}