import React, { useRef } from 'react'
import { jsx, css } from '@emotion/core'
import { Box, Flex, Link, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/core'
import Logo from './logo'
import { useRouter } from 'next/router'

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
      paddingX={"12px"}
      paddingY={"8px"}
      onClick={onClick}
      position="relative"
      textDecoration="none"
      outline="none"
      borderRadius="8px"
      transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
      css={{
        '&::after': {
          content: "''",
          position: 'absolute',
          width: '0',
          height: '3px',
          bottom: '0',
          left: '50%',
          background: 'linear-gradient(90deg, #4FC3F7, #29B6F6)',
          borderRadius: '2px',
          transition: 'width 0.28s cubic-bezier(0.4, 0, 0.2, 1)',
          transform: 'translateX(-50%)',
        },
        '&:hover::after': {
          width: '80%',
        },
        '&:hover': {
          color: '#4FC3F7',
          fontWeight: 600,
          textDecoration: 'none',
        },
        '&:active': {
          transition: 'all 0.1s ease',
        },
        '&:focus': {
          textDecoration: 'none',
          outline: 'none',
          border: 'none',
          boxShadow: 'none',
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
  const router = useRouter()
  
  const scrollAnimationRef = useRef(null)

  const smoothScrollToSection = (id) => {
    if (id.startsWith('/')) {
      router.push(id)
      setShow(false)
      return
    }

    if (scrollAnimationRef.current !== null) {
      cancelAnimationFrame(scrollAnimationRef.current)
    }

    const element = document.getElementById(id.replace('#', ''));
    
    if (element) {
      const navbar = document.querySelector('nav');
      const navbarHeight = navbar ? navbar.clientHeight : 70;
      const computedStyle = window.getComputedStyle(element);
      const scrollMarginTop = parseFloat(computedStyle.scrollMarginTop) || 0;
      const startPosition = window.pageYOffset;
      const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - navbarHeight + scrollMarginTop;
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
      paddingY="1.2em"
      bg="rgba(255, 255, 255, 0.95)"
      backdropFilter="blur(20px)"
      borderBottom="1px solid rgba(251, 164, 66, 0.1)"
      color="black"
      textTransform="uppercase"
      boxShadow="0 4px 20px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(255, 255, 255, 0.05)"
      transition="all 0.3s ease"
      css={{
        WebkitBackdropFilter: 'blur(20px)'
      }}
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
          link="#/header"
        >
          Home
        </MenuItems>
        <MenuItems
          onClick={() => handleSectionClick("#about")}
          link="#/about"
        >
          About
        </MenuItems>
        <MenuItems
          onClick={() => handleSectionClick("#service")}
          link="#/service"
        >
          Services
        </MenuItems>
        <Menu>
          <MenuButton
            as={Link}
            mt={[4, 4, 0, 0]}
            mr={'36px'}
            display="block"
            fontWeight="medium"
            fontSize="md"
            color="black"
            paddingX={"12px"}
            paddingY={"8px"}
            position="relative"
            textDecoration="none"
            outline="none"
            borderRadius="8px"
            transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
            css={{
              '&::after': {
                content: "''",
                position: 'absolute',
                width: '0',
                height: '3px',
                bottom: '0',
                left: '50%',
                background: 'linear-gradient(90deg, #4FC3F7, #29B6F6)',
                borderRadius: '2px',
                transition: 'width 0.28s cubic-bezier(0.4, 0, 0.2, 1)',
                transform: 'translateX(-50%)',
              },
              '&:hover::after': {
                width: '80%',
              },
              '&:hover': {
                color: '#4FC3F7',
                fontWeight: 600,
                textDecoration: 'none',
              },
              '&:active': {
                transition: 'all 0.1s ease',
              },
              '&:focus': {
                textDecoration: 'none',
                outline: 'none',
                border: 'none',
                boxShadow: 'none',
              }
            }}
          >
            Projects
          </MenuButton>
          <MenuList>
            <MenuItem onClick={() => handleSectionClick('#accomplished')}>
            <div className="menu-item">Accomplished</div></MenuItem>
            <MenuItem onClick={() => handleSectionClick('#ongoing')}>Ongoing</MenuItem>
          </MenuList>
        </Menu>
        <MenuItems
          onClick={() => handleSectionClick("#footer")}
          link="#/footer"
        >
          Contact
        </MenuItems>
      </Flex>
    </Flex>
  )
}

export default Nav
