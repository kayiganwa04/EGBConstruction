import React from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import ThemeContainer from '../context/theme/ThemeContainer'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Mukta:wght@400;500;700;800&display=swap"
          rel="stylesheet"
        ></link>
        <title>EGB Construction</title>
<meta
  name="description"
  content="Elevating spaces with professional interior design services focused on modern, first-class solutions. Our team brings expertise in transforming homes into stylish, functional, and inspiring environments."
/>
<link rel="icon" href="/egb_logo1.png" />
      </Head>
      <ThemeContainer>
        <Component {...pageProps} />
      </ThemeContainer>
      <style jsx global>{`
        html, body {
          max-width: 100vw;
          overflow-x: hidden;
        }
        #__next {
          width: 100vw;
          overflow-x: hidden;
        }
      `}</style>
    </>
  )
}

export default MyApp
