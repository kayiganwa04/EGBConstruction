import React, { useState } from 'react';
import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  IconButton,
  useDisclosure,
  Flex,
  Button,
} from '@chakra-ui/core';
import { useRouter } from 'next/router';

const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 6L6 18M6 6l12 12" />
  </svg>
);

const ChevronLeftIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M15 18l-6-6 6-6" />
  </svg>
);

const ChevronRightIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9 18l6-6-6-6" />
  </svg>
);

interface ProjectImage {
  src: string;
  alt: string;
  category: 'ongoing' | 'accomplished' | 'under-construction';
}

const projectImages: ProjectImage[] = [
  // Accomplished Projects
  { src: '/projects/Picture27.jpg', alt: 'Accomplished Project 1', category: 'accomplished' },
    { src: '/projects/villa5.jpg', alt: 'Accomplished Project 2', category: 'accomplished' },
    { src: '/projects/Picture25.jpg', alt: 'Accomplished Project 3', category: 'accomplished' },
    { src: '/projects/Picture23.jpg', alt: 'Accomplished Project 4', category: 'accomplished'},
    { src: '/projects/Picture12.jpg', alt: 'Accomplished Project 5', category: 'accomplished'},
    { src: '/projects/villa3.jpg', alt: 'Accomplished Project 6', category: 'accomplished'},
    { src: '/projects/Picture34.jpg', alt: 'Accomplished Project 7', category: 'accomplished'},
    { src: '/projects/Picture57.jpg', alt: 'Accomplished Project 8', category: 'accomplished'},
    { src: '/projects/villa2.jpg', alt: 'Accomplished Project 9', category: 'accomplished' },
    { src: '/projects/interior1.jpeg', alt: 'Accomplished Project 10', category: 'accomplished' },
    { src: '/projects/Picture15.jpg', alt: 'Accomplished Project 11', category: 'accomplished'},
    { src: '/projects/Picture55.jpg', alt: 'Accomplished Project 12', category: 'accomplished'},
  
  // Under Construction Projects
  { src: '/projects/Picture71.jpg', alt: 'Under Construction Project 1', category: 'under-construction' },
  { src: '/projects/Residential2.png', alt: 'Under Construction Project 2', category: 'under-construction' },
  { src: '/projects/apartment1.png', alt: 'Under Construction Project 3', category: 'under-construction' },
  { src: '/projects/Kibagabaga.jpg', alt: 'Under Construction Project 4', category: 'under-construction' },
  { src: '/projects/hospital1.png', alt: 'Under Construction Project 5', category: 'under-construction' },
  { src: '/projects/gatunga1.jpeg', alt: 'Under Construction Project 6', category: 'under-construction' },
];

const Gallery: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedImage, setSelectedImage] = useState<ProjectImage | null>(null);
  const [currentCategory, setCurrentCategory] = useState<'all' | 'accomplished' | 'under-construction'>('all');
  const router = useRouter();

  const filteredImages = currentCategory === 'all'
    ? projectImages
    : projectImages.filter(img => img.category === currentCategory);

  const handleImageClick = (image: ProjectImage) => {
    setSelectedImage(image);
    onOpen();
  };

  const handleNext = () => {
    const currentIndex = filteredImages.findIndex(img => img.src === selectedImage?.src);
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex]);
  };

  const handlePrevious = () => {
    const currentIndex = filteredImages.findIndex(img => img.src === selectedImage?.src);
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedImage(filteredImages[prevIndex]);
  };

  return (
    <Box maxW="container.xl" mx="auto" py={10} px={4}>
      <Heading as="h1" textAlign="center" mb={6}>
        Project Gallery
      </Heading>
      <Text textAlign="center" mb={8} color="gray.600">
        Explore our collection of accomplished and ongoing construction projects
      </Text>

      <Flex justify="center" mb={8} gridGap={4}>
        <Button
          onClick={() => router.push('/accomplished-projects')}
          size="lg"
          px={8}
          py={6}
          bg="blue.500"
          color="white"
          _hover={{ bg: 'blue.600' }}
        >
          Accomplished Projects
        </Button>
        <Button
          onClick={() => router.push('/under-construction')}
          size="lg"
          px={8}
          py={6}
          bg="blue.500"
          color="white"
          _hover={{ bg: 'blue.600' }}
        >
          Under Construction
        </Button>
      </Flex>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
        {filteredImages.map((image, index) => (
          <Box
            key={index}
            cursor="pointer"
            onClick={() => handleImageClick(image)}
            transition="transform 0.2s"
          css={{
              '&:hover': {
                transform: 'scale(1.02)',
              },
            }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              borderRadius="lg"
              objectFit="cover"
              w="100%"
              h="300px"
              loading="lazy"
            />
          </Box>
        ))}
      </SimpleGrid>

      <Modal isOpen={isOpen} onClose={onClose} size="6xl">
        <ModalOverlay bg="rgba(0, 0, 0, 0.9)" />
        <ModalContent 
          bg="transparent" 
          boxShadow="none"
          maxW="90vw"
          maxH="90vh"
          mx="auto"
          my="auto"
        >
          <ModalBody position="relative" p={0}>
            <IconButton
              aria-label="Close"
              icon={CloseIcon}
              position="absolute"
              top={4}
              right={4}
              onClick={onClose}
              bg="rgba(255, 255, 255, 0.1)"
              color="white"
              _hover={{ bg: 'rgba(255, 255, 255, 0.2)' }}
              zIndex={2}
            />
            <IconButton
              aria-label="Previous"
              icon={ChevronLeftIcon}
              position="absolute"
              left={4}
              top="50%"
              transform="translateY(-50%)"
              onClick={handlePrevious}
              bg="rgba(255, 255, 255, 0.1)"
              color="white"
              _hover={{ bg: 'rgba(255, 255, 255, 0.2)' }}
              zIndex={2}
            />
            <IconButton
              aria-label="Next"
              icon={ChevronRightIcon}
              position="absolute"
              right={4}
              top="50%"
              transform="translateY(-50%)"
              onClick={handleNext}
              bg="rgba(255, 255, 255, 0.1)"
              color="white"
              _hover={{ bg: 'rgba(255, 255, 255, 0.2)' }}
              zIndex={2}
            />
            {selectedImage && (
              <Box
                position="relative"
                width="100%"
                height="90vh"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  maxH="90vh"
                  maxW="100%"
                  objectFit="contain"
                  mx="auto"
                  borderRadius="md"
                />
                <Text
                  position="absolute"
                  bottom={4}
                  left="50%"
                  transform="translateX(-50%)"
                  color="white"
                  bg="rgba(0, 0, 0, 0.7)"
                  px={4}
                  py={2}
                  borderRadius="md"
                  fontSize="sm"
                >
                  {selectedImage.alt}
                </Text>
              </Box>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Gallery; 