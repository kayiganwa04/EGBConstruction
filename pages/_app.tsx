import React from 'react'
import Head from 'next/head'
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming'
import { CSSReset } from '@chakra-ui/core'
import customTheme from '../styles/theme'

const MyApp = ({ Component, pageProps }) => {
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
    
      <EmotionThemeProvider theme={customTheme}>
        <CSSReset />
        <Component {...pageProps} />
      </EmotionThemeProvider>
    </>
  )
}

export default MyApp 