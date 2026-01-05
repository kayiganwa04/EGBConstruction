import React from 'react'
import { Flex, Text, Heading, Box, Image, Link } from '@chakra-ui/core'
import { useRouter } from 'next/router'
import { Carousel } from 'react-responsive-carousel'
import { useEffect } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { relative } from 'path'

const CarouselComponent = Carousel as any;

const OngoingProjects: React.FC = () => {
  const router = useRouter()

  const projects = [
    { src: '/projects/estate1.png', alt: 'Ongoing Project 1' },
    { src: '/projects/residential3.png', alt: 'Ongoing Project 2' },
    { src: '/projects/Picture71.jpg', alt: 'Ongoing Project 3' },
    { src: '/projects/hospital1.jpeg', alt: 'Ongoing Project 4' },
  
  ]
  const [slidesToShow, setSlidesToShow] = React.useState(3)
  useEffect(() => {
   const handleResize = () => {
     if ( window.innerWidth < 768){
      setSlidesToShow(1)
     }else setSlidesToShow(3)
   }
   handleResize() 
   window.addEventListener('resize', handleResize)

   return () => window.removeEventListener('resize', handleResize)

  }, [])

  return (
    <Box 
    id="ongoing" 
    py={[12, 16, 20, 24]} 
    bg="white" 
    maxH="100vmin" 
    display="flex" 
    alignItems="center" 
    style={{ scrollMarginTop: '20px' }}
    >
      <Flex 
      flexDirection="column" 
      alignItems="center" 
      maxW="1400px" 
      mx="auto" 
      px={[4, 6, 8, 10]} 
      width="100%" 
      >
        <Heading
          as="h3"
          textTransform="uppercase"
          mb={3}
          fontSize={['2xl', '3xl', '4xl']}
          textAlign="center"
          color="gray.800"
        >
          Ongoing Projects
        </Heading>
        <Text
          fontSize={['md', 'lg']}
          mb={12}
          maxW="600px"
          textAlign="center"
          color="gray.600"
          lineHeight="tall"
        >
          Take a look at our current construction projects. We're committed to delivering excellence in every phase of development.
        </Text>

        <Box width="100%" mb={12}>
          <CarouselComponent
            showArrows={true}
            showStatus={false}
            showThumbs={false}
            infiniteLoop={true}
            autoPlay={true}
            interval={3000}
            stopOnHover={true}
            centerMode={true}
            centerSlidePercentage={slidesToShow === 1 ? 100 : 33.33}
            emulateTouch={true}
            swipeable={true}
            dynamicHeight={false}
            selectedItem={0}
            showIndicators={true}
            width="100%"
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
                    cursor: 'pointer'
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
                    cursor: 'pointer'
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
                  borderRadius="md"
                  height={300}
                  boxShadow="md"
                  transition="all 0.3s ease"
                  cursor="pointer"
                  onClick={() => router.push('/ongoing')}
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
              </Box>
            ))}
          </CarouselComponent>
        </Box>

        <Link
          onClick={() => router.push('/ongoing')}
          display={["none", "none", "inline-flex"]}
          px={3}
          py={3}
          bg="blue.500"
          color="white"
          borderRadius="md"
          fontWeight="medium"
          textTransform="uppercase"
          letterSpacing="wide"
          transition="all 0.2s"
          css={{
            '&:hover': {
              bg: 'blue.600',
              textDecoration: 'none',
              transform: 'translateY(-2px)',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
            },
          }}
        >
          Open Gallery
        </Link>
      </Flex>
    </Box>
  )
}

export default OngoingProjects