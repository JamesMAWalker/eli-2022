import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel='preconnect'
          href='https://fonts.googleapis.com'
        />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin="true"
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Italiana&display=swap'
          rel='stylesheet'
        />
        <link
          rel='preconnect'
          href='https://fonts.googleapis.com'
        />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin="true"
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Italiana&family=Lato:ital,wght@0,100;0,300;0,400;1,300&display=swap'
          rel='stylesheet'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
