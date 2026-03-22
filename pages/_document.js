import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#050810" />
        <meta name="description" content="Web 4.0 Bitbon System - Platform for digital transformation and tokenization" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Web 4.0 Bitbon System" />
        <meta property="og:description" content="Platform for digital transformation and tokenization" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Web 4.0 Bitbon System" />
        <meta property="twitter:description" content="Platform for digital transformation and tokenization" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
