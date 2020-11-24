import React from 'react';
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

export default class CustomDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return { ...initialProps };
  }

  render() {
    if (typeof window !== 'undefined') {
      window.onload = () => {
        console.log('check transitionWithoutSSR');

        const transitionWithoutSSR = document.getElementById('transition-without-ssr');

        if (transitionWithoutSSR) {
          transitionWithoutSSR.remove();
        }
      };
    }

    return (
      <Html>
        <Head>
          <meta name="referrer" content="no-referrer" />
        </Head>
        <body>
          <Main />
          <NextScript />

          <style
            id="transition-without-ssr"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: ' *, *::before, *::after { transition: none!important; }',
            }}
          />
        </body>
      </Html>
    );
  }
}
