import React, { useRef } from 'react'
import { Box, Flex, Link } from '@chakra-ui/core'
import Logo from './logo'

const MenuItems = ({ children, link, onClick }) => {
  return (
    <Link
      href={link}
      mt={[4, 4, 0, 0]}
      mr={'36px'}
      display="block"
      fontWeight="medium"
      fontSize="md"
      color="black"
      paddingX={"10px"}
      onClick={onClick}
      position="relative"
      textDecoration="none"
      outline="none"
      _hover={{
        color: "#3182ce", 
        transform: "scale(1.1)",
        transition: "transform 0.2s ease-in-out",
        fontWeight: "bold",
        textDecoration: "none",
      }}
      _focus={{
        textDecoration: "none",
        outline: "none",
        border: "none",
        boxShadow: "none",
      }}
      _active={{
        textDecoration: "none",
        outline: "none",
        border: "none",
        boxShadow: "none",
      }}
      sx={{
        "&::after": {
          content: "''",
          position: "absolute",
          width: "0",
          height: "2px",
          bottom: "0",
          left: "10px",
          backgroundColor: "#3182ce", 
          transition: "width 0.3s ease-in-out",
        },
        "&:hover::after": {
          width: "calc(100% - 20px)",
        },
        "&:focus::after": {
          width: "0",
        },
        "&:active::after": {
          width: "0",
        }
      }}
    >
      {children}
    </Link>
  )
}
const Nav = (props) => {
  const [show, setShow] = React.useState(false)
  const handleToggle = () => setShow(!show)
  
  const scrollAnimationRef = useRef(null)

  const smoothScrollToSection = (id) => {
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
      let startTimestamp = null;

      const easeInOutQuad = (t) => {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
      };

      const scrollAnimation = (currentTime) => {
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

  const handleSectionClick = (sectionId) => {
    setShow(false);
    smoothScrollToSection(sectionId);
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
      paddingY="1em"
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
          fill="darkgrey"
          width="22px"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </Box>

      <Flex
        display={[
          show ? 'flex' : 'none',
          show ? 'flex' : 'none',
          'flex',
          'flex'
        ]}
        width={['full', 'full', 'auto', 'auto']}
        marginTop={['20px', '20px', 'auto', 'auto']}
        flexDirection={['column', 'column', 'row', 'row']}
        textAlign="center"
        alignItems="center"
        justifyContent="flex-end" 
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
    </Flex>
  )
}

export default Nav
