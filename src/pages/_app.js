import '@/styles/scss/main.scss';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
      <>
       <Head>
          <title>Responsive Website</title>
          <meta name="description" content="Responsive Website" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Component {...pageProps} />
      </>
  )
}
