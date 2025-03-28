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
<<<<<<< HEAD
        <link rel="icon" href="/favicon.ico" />
=======
        <link rel="icon" href="\logo.png" />
>>>>>>> 3676ab9 (first commit)
      </Head>
      <ThemeContainer>
        <Component {...pageProps} />
      </ThemeContainer>
    </>
  )
}

export default MyApp
