import React, { useState } from 'react'
import { Box, SimpleGrid, Image, Heading, Text, Flex, Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton, Button } from '@chakra-ui/core'

const AccomplishedGallery: React.FC = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)

  const projects = [
    { src: '/projects/Picture27.jpg', alt: 'Accomplished Project 1' },
    { src: '/projects/villa5.jpg', alt: 'Accomplished Project 2' },
    { src: '/projects/Picture25.jpg', alt: 'Accomplished Project 3' },
    { src: '/projects/Picture23.jpg', alt: 'Accomplished Project 4' },
    { src: '/projects/Picture12.jpg', alt: 'Accomplished Project 5' },
    { src: '/projects/villa3.jpg', alt: 'Accomplished Project 6' },
    { src: '/projects/Picture34.jpg', alt: 'Accomplished Project 7' },
    { src: '/projects/Picture57.jpg', alt: 'Accomplished Project 8' },
    { src: '/projects/villa2.jpg', alt: 'Accomplished Project 9' },
    { src: '/projects/interior1.jpeg', alt: 'Accomplished Project 10' },
    { src: '/projects/Picture15.jpg', alt: 'Accomplished Project 11' },
    { src: '/projects/Picture55.jpg', alt: 'Accomplished Project 12' },
  ]

  const handlePrevious = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + projects.length) % projects.length)
    }
  }

  const handleNext = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % projects.length)
    }
  }

  return (
    <Box 
      minH="100vh" 
      bg="gray.50"
      backgroundImage="linear-gradient(135deg, #f5f7fa 0%, #e4e8eb 100%)"
      pt={20}
    >
      <Flex 
        flexDirection="column" 
        alignItems="center" 
        maxW="1400px" 
        mx="auto" 
        px={[4, 6, 8, 10]} 
        py={12}
      >
        <Heading
          as="h1"
          textTransform="uppercase"
          mb={6}
          fontSize={['2xl', '3xl', '4xl']}
          textAlign="center"
          color="gray.800"
        >
          Accomplished Projects Gallery
        </Heading>
        <Text
          fontSize={['md', 'lg']}
          mb={12}
          maxW="600px"
          textAlign="center"
          color="gray.600"
          lineHeight="tall"
        >
          Our completed projects demonstrate our commitment to quality and client satisfaction. From residential to commercial builds, each project highlights our expertise and dedication to delivering exceptional results.
        </Text>

        <SimpleGrid columns={[1, 2, 3]} spacing={8} width="100%">
          {projects.map((project, index) => (
            <Box
              key={index}
              position="relative"
              overflow="hidden"
              borderRadius="lg"
              boxShadow="md"
              cursor="pointer"
              transition="all 0.3s ease"
              onClick={() => setSelectedImageIndex(index)}
              css={{
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                },
              }}
            >
              <Image
                src={project.src}
                alt={project.alt}
                objectFit="cover"
                w="100%"
                h={['250px', '300px', '350px']}
                loading="lazy"
                transition="transform 0.3s ease"
                css={{
                  '&:hover': {
                    transform: 'scale(1.05)',
                  },
                }}
              />
              <Box
                position="absolute"
                bottom="0"
                left="0"
                right="0"
                bg="rgba(0,0,0,0.7)"
                color="white"
                p={4}
                transform="translateY(100%)"
                transition="transform 0.3s ease"
                css={{
                  '&:hover': {
                    transform: 'translateY(0)',
                  },
                }}
              >
                <Text fontSize="sm" fontWeight="medium">
                  {project.alt}
                </Text>
              </Box>
            </Box>
          ))}
        </SimpleGrid>

        <Modal isOpen={selectedImageIndex !== null} onClose={() => setSelectedImageIndex(null)} size="6xl">
          <ModalOverlay />
          <ModalContent position="relative">
            <ModalCloseButton />
            <ModalBody p={0}>
              {selectedImageIndex !== null && (
                <>
                  <Image
                    src={projects[selectedImageIndex].src}
                    alt={projects[selectedImageIndex].alt}
                    w="100%"
                    h="auto"
                    objectFit="contain"
                  />
                  <Button
                    aria-label="Previous image"
                    position="absolute"
                    left="10px"
                    top="50%"
                    transform="translateY(-50%)"
                    onClick={handlePrevious}
                    bg="white"
                    _hover={{ bg: 'gray.100' }}
                    size="lg"
                    borderRadius="full"
                    boxShadow="md"
                  >
                    ←
                  </Button>
                  <Button
                    aria-label="Next image"
                    position="absolute"
                    right="10px"
                    top="50%"
                    transform="translateY(-50%)"
                    onClick={handleNext}
                    bg="white"
                    _hover={{ bg: 'gray.100' }}
                    size="lg"
                    borderRadius="full"
                    boxShadow="md"
                  >
                    →
                  </Button>
                </>
              )}
            </ModalBody>
          </ModalContent>
        </Modal>
      </Flex>
    </Box>
  )
}

export default AccomplishedGallery 