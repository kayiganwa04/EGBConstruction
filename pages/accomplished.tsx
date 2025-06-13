import React, { useState, useEffect } from 'react'
import { Box, SimpleGrid, Image, Heading, Text, Flex, Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton, Button } from '@chakra-ui/core'

const AccomplishedGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [currentIndex, setCurrentIndex] = useState<number>(0)

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

  const handleImageClick = (src: string) => {
    const index = projects.findIndex(project => project.src === src)
    setCurrentIndex(index)
    setSelectedImage(src)
  }

  const handlePrevious = () => {
    const newIndex = (currentIndex - 1 + projects.length) % projects.length
    setCurrentIndex(newIndex)
    setSelectedImage(projects[newIndex].src)
  }

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % projects.length
    setCurrentIndex(newIndex)
    setSelectedImage(projects[newIndex].src)
  }

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!selectedImage) return;

      if (event.key === 'ArrowLeft') {
        handlePrevious();
      } else if (event.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedImage, currentIndex]);

  return (
    <Box 
      minH="100vh"
      bg="linear-gradient(135deg, #f5f7fa 0%, #e4e8eb 100%)"
    >
      <Box
        bg="blue.600"
        w="100%"
        py={16}
        mb={12}
        mt={-18}
        pt={20}
        position="relative"
        zIndex={1}
      >
        <Flex 
          flexDirection="column" 
          alignItems="center" 
          maxW="1400px" 
          mx="auto" 
          px={[4, 6, 8, 10]}
        >
          <Heading
            as="h1"
            textTransform="uppercase"
            mb={6}
            fontSize={['2xl', '3xl', '4xl']}
            textAlign="center"
            color="white"
          >
            Accomplished Projects Gallery
          </Heading>
          <Text
            fontSize={['md', 'lg']}
            maxW="600px"
            textAlign="center"
            color="white"
            lineHeight="tall"
          >
            Our accomplished projects reflect our commitment to progress and excellence. Each is a testament to our dedication to delivering quality work that meets our clients' evolving needs.
          </Text>
        </Flex>
      </Box>

      <Flex 
        flexDirection="column" 
        alignItems="center" 
        maxW="1400px" 
        mx="auto" 
        px={[4, 6, 8, 10]} 
        py={12}
        position="relative"
        zIndex={0}
      >
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
              onClick={() => handleImageClick(project.src)}
              height="400px"
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
                h="100%"
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

        <Modal isOpen={!!selectedImage} onClose={() => setSelectedImage(null)} size="5xl">
          <ModalOverlay bg="blackAlpha.900" />
          <ModalContent bg="transparent" boxShadow="none">
            <ModalCloseButton color="white" zIndex={2} />
            <ModalBody p={0} position="relative">
              {selectedImage && (
                <>
                  <Image
                    src={selectedImage}
                    alt="Selected project"
                    w="100%"
                    h="auto"
                    objectFit="contain"
                  />
                  <Button
                    aria-label="Previous image"
                    position="absolute"
                    left="4"
                    top="50%"
                    transform="translateY(-50%)"
                    onClick={handlePrevious}
                    bg="gray.600"
                    color="white"
                    _hover={{ bg: 'blackAlpha.800' }}
                    size="lg"
                    fontSize="2xl"
                    fontWeight="bold"
                    borderRadius="full"
                    w="50px"
                    h="50px"
                    p={1}
                  >
                    ←
                  </Button>
                  <Button
                    aria-label="Next image"
                    position="absolute"
                    right="4"
                    top="50%"
                    transform="translateY(-50%)"
                    onClick={handleNext}
                    bg="blackAlpha.600"
                    color="white"
                    _hover={{ bg: 'blackAlpha.800' }}
                    size="lg"
                    fontSize="2xl"
                    fontWeight="bold"
                    borderRadius="full"
                    w="50px"
                    h="50px"
                    p={0}
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