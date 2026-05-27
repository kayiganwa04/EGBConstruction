import React from 'react'
import Nav from '../components/nav'
import Header from '../components/header'
import DreamHome from '../components/dream-home'
import About from '../components/about'
import Partners from '../components/partners'
import Service from '../components/service'
import Footer from '../components/footer'
import AccomplishedPojects from '../components/accomplished-projects'
import OnGoingProjects from '../components/ongoing-projects'
import CreativeDirector from '../components/creative-director'
import { Separator } from '@chakra-ui/react'

const Home: React.FC = () => {
  return (
    <>
      <Nav />
      <Header />
      <DreamHome />
      <About />
      <Partners />
      <Service />
      {/* <CreativeDirector /> */}
      <AccomplishedPojects />
      <OnGoingProjects />
      <Separator mt="24" />
      <Footer />
    </>
  )
}

export default Home
