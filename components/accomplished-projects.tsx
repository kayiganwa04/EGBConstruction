import React from 'react'
import { Flex, Text, Heading, Box, Image, Link } from '@chakra-ui/core'
import { useRouter } from 'next/router'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"

const CarouselComponent = Carousel as unknown as React.FC<any>

const AccomplishedProjects: React.FC = () => {
  const router = useRouter()

  const projects = [
    { src: '/projects/Picture27.jpg', alt: 'Accomplished Project 1' },
    { src: '/projects/villa5.jpg', alt: 'Accomplished Project 2' },
    { src: '/projects/Picture25.jpg', alt: 'Accomplished Project 3' },
    { src: '/projects/Picture23.jpg', alt: 'Accomplished Project 4' },
    { src: '/projects/Picture12.jpg', alt: 'Accomplished Project 5' },
    { src: '/projects/villa3.jpg', alt: 'Accomplished Project 6' },
  ]

  return (
    <Box
      id="accomplished"
      py={12}
      bg="gray.50"
      minHeight="100vh"
      display="flex"
      alignItems="center"
    >
      <Flex
        direction="column"
        align="center"
        maxW="1400px"
        mx="auto"
        px={6}
        width="100%"
      >
        <Heading
          as="h3"
          textTransform="uppercase"
          mb={6}
          fontSize="3xl"
          textAlign="center"
          color="gray.800"
        >
          Accomplished Projects
        </Heading>
        <Text
          fontSize="lg"
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
            centerSlidePercentage={33.33}
            emulateTouch
            swipeable
            dynamicHeight={false}
            showIndicators
            axis="horizontal"
            renderArrowPrev={(onClickHandler, hasPrev, label) =>
              hasPrev && (
                <button
                  type="button"
                  onClick={onClickHandler}
                  title={label}
                  style={{
                    position: 'absolute',
                    left: 0,
                    zIndex: 2,
                    background: 'rgba(0,0,0,0.5)',
                    border: 'none',
                    padding: '10px',
                    color: 'white',
                    cursor: 'pointer',
                  }}
                >
                  ‹
                </button>
              )
            }
            renderArrowNext={(onClickHandler, hasNext, label) =>
              hasNext && (
                <button
                  type="button"
                  onClick={onClickHandler}
                  title={label}
                  style={{
                    position: 'absolute',
                    right: 0,
                    zIndex: 2,
                    background: 'rgba(0,0,0,0.5)',
                    border: 'none',
                    padding: '10px',
                    color: 'white',
                    cursor: 'pointer',
                  }}
                >
                  ›
                </button>
              )
            }
          >
            {projects.map((project, index) => (
              <Box key={index} px={4}>
                <Box
                  position="relative"
                  overflow="hidden"
                  borderRadius="8px"
                  boxShadow="md"
                  cursor="pointer"
                  onClick={() => router.push('/accomplished')}
                  style={{
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 10px 15px rgba(0,0,0,0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '';
                  }}
                >
                  <Image
                    src={project.src}
                    alt={project.alt}
                    objectFit="cover"
                    width="100%"
                    height="300px"
                    loading="lazy"
                  />
                  <Box
                    position="absolute"
                    bottom="0"
                    left="0"
                    right="0"
                    background="rgba(0,0,0,0.7)"
                    color="white"
                    p={4}
                    style={{
                      transform: 'translateY(100%)',
                      transition: 'transform 0.3s ease',
                    }}
                    className="project-caption"
                  >
                    <Text fontSize="sm" fontWeight="bold">
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
          style={{ transition: 'all 0.2s ease' }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 10px 15px rgba(0,0,0,0.1)';
            e.currentTarget.style.background = '#2B6CB0'; // blue.600
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '';
            e.currentTarget.style.background = '#3182CE'; // blue.500
          }}
        >
          View All Projects
        </Link>
      </Flex>
    </Box>
  )
}

export default AccomplishedProjects
