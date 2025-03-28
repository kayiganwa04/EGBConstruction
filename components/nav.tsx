<<<<<<< HEAD
import React from 'react'
import { Box, Flex, Link, Button, Stack } from '@chakra-ui/core'
=======
import React, { useRef, useState } from 'react'
import { Box, Flex, Link } from '@chakra-ui/core'
>>>>>>> 3676ab9 (first commit)
import Logo from './logo'

interface MenuItem {
  link?: string
<<<<<<< HEAD
}

const MenuItems: React.FC<MenuItem> = ({ children, link }) => (
=======
  children?: React.ReactNode
  onClick?: () => void
}

const MenuItems: React.FC<MenuItem> = ({ children, link, onClick }) => (
>>>>>>> 3676ab9 (first commit)
  <Link
    href={link}
    mt={[4, 4, 0, 0]}
    mr={'36px'}
    display="block"
    fontWeight="medium"
    fontSize="md"
    color="black"
<<<<<<< HEAD
    border="4px solid transparent"
    borderRadius="10px"
    _hover={{
      textDecoration: 'none',
      color: 'white',
      bg: '#FBA442',
      borderColor: '#FBA442'
  }}
=======
    border="8px solid transparent"
    borderRadius="9px"
    paddingX={"10px"}
    onClick={onClick}
    _hover={{
      color: 'white',
      bg: '#FBA442',
      borderColor: '#FBA442',
      transform: "scale(1.1)",
      transition: "transform 0.2s ease-in-out",
      fontSize: "md",
      fontWeight: "bold"
    }}
>>>>>>> 3676ab9 (first commit)
  >
    {children}
  </Link>
)

<<<<<<< HEAD
const Nav = props => {
  const [show, setShow] = React.useState(false)
  const handleToggle = () => setShow(!show)

  const scrollToSection = (id) => {
    const element = document.getElementById(id);

    if (element) {
      // Get the position of the element relative to the top of the document
      const topOffset = element.getBoundingClientRect().top + window.pageYOffset;

      // Scroll smoothly to the element position adjusted by the offset
      window.scrollTo({
        top: topOffset - 100,  
        behavior: "smooth"
      });
    }
=======
const Nav = (props) => {
  const [show, setShow] = React.useState(false)
  const handleToggle = () => setShow(!show)
  
  const scrollAnimationRef = useRef<number | null>(null)

  const smoothScrollToSection = (id: string) => {
    if (scrollAnimationRef.current !== null) {
      cancelAnimationFrame(scrollAnimationRef.current)
    }

    const element = document.getElementById(id.replace('#', ''));
    
    if (element) {
      const navbar = document.querySelector('nav');
      const navbarHeight = navbar ? navbar.clientHeight : 70;

      const startPosition = window.pageYOffset;
      const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      const distance = targetPosition - startPosition;
      const duration = 600;
      let startTimestamp: number | null = null;

      const easeInOutQuad = (t: number) => {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
      };

      const scrollAnimation = (currentTime: number) => {
        if (startTimestamp === null) startTimestamp = currentTime;
        
        const timeElapsed = currentTime - startTimestamp;
        const progress = Math.min(timeElapsed / duration, 1);
        const easedProgress = easeInOutQuad(progress);
        
        window.scrollTo(0, startPosition + distance * easedProgress);
        
        if (timeElapsed < duration) {
          scrollAnimationRef.current = requestAnimationFrame(scrollAnimation);
        } else {
          scrollAnimationRef.current = null;
        }
      };

      scrollAnimationRef.current = requestAnimationFrame(scrollAnimation);
    }
  };

  const handleSectionClick = (sectionId: string) => {
    setShow(false);
    smoothScrollToSection(sectionId);
>>>>>>> 3676ab9 (first commit)
  };

  return (
    <Flex
      as="nav"
      position="fixed"
      top="0"
      zIndex="999"
      width="100%"
      align="center"
      justify="space-between"
      wrap="wrap"
      paddingX={['1.5em', '1.5em', '1.5em', '15%']}
<<<<<<< HEAD
      paddingY="1.5em"
=======
      paddingY="1em"
>>>>>>> 3676ab9 (first commit)
      bg="rgba(255,255,255,.8)"
      color="black"
      textTransform="uppercase"
      {...props}
    >
      <Flex align="center" mr={5}>
        <Logo />
      </Flex>

      <Box display={['block', 'block', 'none', 'none']} onClick={handleToggle}>
        <svg
          fill="#FBA442"
          width="22px"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </Box>

<<<<<<< HEAD
      <Box
        display={[
          show ? 'block' : 'none',
          show ? 'block' : 'none',
=======
      <Flex // Changed from Box to Flex
        display={[
          show ? 'flex' : 'none', // Changed to flex
          show ? 'flex' : 'none', // Changed to flex
>>>>>>> 3676ab9 (first commit)
          'flex',
          'flex'
        ]}
        width={['full', 'full', 'auto', 'auto']}
        marginTop={['20px', '20px', 'auto', 'auto']}
<<<<<<< HEAD
        textAlign="center"
        alignItems="center"
      >
        <MenuItems onClick={() => scrollToSection("header")}link="#header">Home</MenuItems>
        <MenuItems onClick={() => scrollToSection("about")}link="#about">About</MenuItems>
        <MenuItems onClick={() => scrollToSection("service")}link="#service">Services</MenuItems>
        <MenuItems onClick={() => scrollToSection("accomplished")}link="#accoplished">Gallery</MenuItems>
        <MenuItems onClick={() => scrollToSection("footer")}link="#footer">Contact</MenuItems>
      </Box>
=======
        flexDirection={['column', 'column', 'row', 'row']} // Added to control layout
        textAlign="center"
        alignItems="center"
        justifyContent="flex-end" // Align to right side
      >
        <MenuItems
          onClick={() => handleSectionClick("#header")}
          link="#header"
        >
          Home
        </MenuItems>
        <MenuItems
          onClick={() => handleSectionClick("#about")}
          link="#about"
        >
          About
        </MenuItems>
        <MenuItems
          onClick={() => handleSectionClick("#service")}
          link="#service"
        >
          Services
        </MenuItems>
        <MenuItems
          onClick={() => handleSectionClick("#Projects")}
          link="#Projects"
        >
          Projects
        </MenuItems>
        <MenuItems
          onClick={() => handleSectionClick("#footer")}
          link="#footer"
        >
          Contact
        </MenuItems>
      </Flex>
>>>>>>> 3676ab9 (first commit)
    </Flex>
  )
}

<<<<<<< HEAD
export default Nav
=======
export default Nav
>>>>>>> 3676ab9 (first commit)
