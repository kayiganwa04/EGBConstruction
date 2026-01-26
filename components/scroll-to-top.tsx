import React, { useState, useEffect } from 'react'
import { IconButton, Box } from '@chakra-ui/core'
import { FiChevronUp } from 'react-icons/fi'

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  // Set the scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <>
      {isVisible && (
        <Box
          position="fixed"
          bottom="6"
          right="6"
          zIndex={1000}
          opacity={1}
          transform="translateY(0)"
          transition="all 0.3s ease-in-out"
        >
          <IconButton
            aria-label="Scroll to top"
            icon={FiChevronUp}
            onClick={scrollToTop}
            size="lg"
            variant="ghost"
            borderRadius="full"
            shadow="lg"
            bg="transparent"
            border="2px solid"
            borderColor="orange.500"
            color="orange.500"
            _hover={{
              transform: 'translateY(-3px) scale(1.05)',
              shadow: 'xl',
              bg: 'orange.50',
              borderColor: 'orange.600',
              color: 'orange.600'
            }}
            _active={{
              transform: 'translateY(-1px) scale(0.98)',
              shadow: 'md'
            }}
            transition="all 0.3s ease"
            w="16"
            h="16"
          />
        </Box>
      )}
    </>
  )
}

export default ScrollToTop
