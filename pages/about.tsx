import React, { useEffect } from 'react'
import Nav from '../components/nav'
import Header from '../components/header'
import DreamHome from '../components/dream-home'
import About from '../components/about'
import Partners from '../components/partners'
import Service from '../components/service'
import Footer from '../components/footer'
import AccomplishedPojects from '../components/accomplished-projects'
import OnGoingProjects from '../components/ongoing-projects'
import { Divider } from '@chakra-ui/core'

const AboutPage: React.FC = () => {
  useEffect(() => {
    const el = document.getElementById('about')
    if (el) {
      const navbar = document.querySelector('nav')
      const navbarHeight = navbar ? navbar.clientHeight : 70
      const targetPosition = el.getBoundingClientRect().top + window.pageYOffset - navbarHeight
      window.scrollTo({ top: targetPosition, behavior: 'smooth' })
    }
  }, [])

  return (
    <>
      <Nav />
      <Header />
      <DreamHome />
      <About />
      <Partners />
      <Service />
      <AccomplishedPojects />
      <OnGoingProjects />
      <Divider mt="24" />
      <Footer />
    </>
  )
}

export default AboutPage
