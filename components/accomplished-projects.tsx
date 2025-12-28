import React, { useState, useEffect } from 'react';
import { Flex, Text, Heading, Box, Image, Link } from '@chakra-ui/core';
import { useRouter } from 'next/router';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselComponent = Carousel as unknown as React.FC<any>;

const AccomplishedProjects: React.FC = () => {
  const router = useRouter();
  const [slidesToShow, setSlidesToShow] = useState(3);

  const projects = [
    { src: '/projects/Picture27.jpg', alt: 'Accomplished Project 1' },
    { src: '/projects/villa5.jpg', alt: 'Accomplished Project 2' },
    { src: '/projects/Picture25.jpg', alt: 'Accomplished Project 3' },
    { src: '/projects/Picture23.jpg', alt: 'Accomplished Project 4' },
    { src: '/projects/Picture12.jpg', alt: 'Accomplished Project 5' },
    { src: '/projects/villa3.jpg', alt: 'Accomplished Project 6' },
  ];

  // Handle responsive slides
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setSlidesToShow(1);
      else setSlidesToShow(3);
    };

    handleResize(); // initial check
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Box
      id="accomplished"
      py={[12, 16, 20, 24]}
      bg="gray.50"
      minH="100vh"
      display="flex"
      alignItems="center"
    >
      <Flex
        direction="column"
        align="center"
        maxW="1400px"
        mx="auto"
        px={[4, 6, 8, 10]}
        width="100%"
      >
        <Heading
          as="h3"
          textTransform="uppercase"
          mb={6}
          fontSize={['2xl', '3xl', '4xl']}
          textAlign="center"
          color="gray.800"
        >
          Accomplished Projects
        </Heading>

        <Text
          fontSize={['md', 'lg']}
          mb={12}
          maxW="600px"
          textAlign="center"
          color="gray.600"
        >
          Our completed projects demonstrate our commitment to quality and client satisfaction. From residential to commercial builds, each project highlights our expertise and dedication to delivering exceptional results.
        </Text>

        <Box width="100%" mb={12}>
          <CarouselComponent
            showArrows
            showStatus={false}
            showThumbs={false}
            infiniteLoop
            autoPlay
            interval={3000}
            stopOnHover
            centerMode
            centerSlidePercentage={slidesToShow === 1 ? 100 : 33.33}
            emulateTouch
            swipeable
            dynamicHeight={false}
            showIndicators
            axis="horizontal"
          >
            {projects.map((project, index) => (
              <Box key={index} px={4}>
                <Box
                  position="relative"
                  overflow="hidden"
                  borderRadius="lg"
                  boxShadow="md"
                  cursor="pointer"
                  onClick={() => router.push('/accomplished')}
                  transition="all 0.3s ease"
                  css={{
                    transform: 'translateY(-4px)',
                    boxShadow:
                      '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                  }}
                >
                  <Image
                    src={project.src}
                    alt={project.alt}
                    objectFit="cover"
                    width="100%"
                    height={['250px', '300px', '350px']}
                    loading="lazy"
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
                    css={{ transform: 'translateY(0)' }}
                  >
                    <Text fontSize="sm" fontWeight="medium">
                      {project.alt}
                    </Text>
                  </Box>
                </Box>
              </Box>
            ))}
          </CarouselComponent>
        </Box>

        <Link
          onClick={() => router.push('/accomplished')}
          px={8}
          py={3}
          bg="blue.500"
          color="white"
          borderRadius="md"
          fontWeight="medium"
          textTransform="uppercase"
          letterSpacing="wide"
          transition="all 0.2s"
          _hover={{
            bg: 'blue.600',
            transform: 'translateY(-2px)',
            boxShadow:
              '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
          }}
        >
          View All Projects
        </Link>
      </Flex>
    </Box>
  );
};

export default AccomplishedProjects;
