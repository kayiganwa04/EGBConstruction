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
// Divider caused a type error in this build; use a simple hr instead

const ServicePage: React.FC = () => {
  useEffect(() => {
    const el = document.getElementById('service')
    if (el) {
      const navbar = document.querySelector('nav')
      const navbarHeight = navbar ? navbar.clientHeight : 70
      const targetPosition =
        el.getBoundingClientRect().top + window.pageYOffset - navbarHeight
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
      <hr
        style={{
          marginTop: 24,
          border: 'none',
          borderTop: '1px solid #e2e8f0'
        }}
      />
      <Footer />
    </>
  )
}

export default ServicePage
