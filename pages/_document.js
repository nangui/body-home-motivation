import Document, { Head, Main, NextScript, Html } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="fr">
        <Head>
          <meta
            description="description"
            content="Le site web de Kaya bien être"
          />
          <meta charSet="utf-8" />
          <meta name="robots" content="noindex, nofollow" />
          <meta name="viewport" content="width=device-width" />
          <link
            href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap"
            rel="stylesheet"
          ></link>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
          />
          <link
            rel="stylesheet"
            href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"
          ></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
