import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="webmention"
            href="https://webmention.io/gabrielbarcelos.com.br/webmention"
          />
          <link
            rel="pingback"
            href="https://webmention.io/gabrielbarcelos.com.br/xmlrpc"
          />
          <link href="https://github.com/gabrielbarcelos" rel="me" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
