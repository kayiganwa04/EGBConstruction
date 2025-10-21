import React, { useState, useEffect, useRef } from 'react'
import { Grid, Text, Flex, Heading, Button, Box, Image } from '@chakra-ui/core'

const Service: React.FC = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsAnimating(true);
          setHasAnimated(true);
        } else if (!entry.isIntersecting && entry.boundingClientRect.top > 0) {
          setIsAnimating(false);
          setHasAnimated(false);
        }
      },
      {
        threshold: 0.1
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <Box id="service" position="relative" ref={sectionRef}>
      <Image
        width={['0%', '0%', '0%', '40%', '60%']}
        maxW="660px"
        position="absolute"
        top="4%"
        left="2%"
        src="/projects/villa4.jpg"
        display={['none', 'none', 'none', 'block', 'block']}
        borderColor="white"
        borderWidth="10px"
        borderStyle="solid"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        borderRadius="5px"
        style={{
          transition: "all 0.9s ease-in-out",
          transform: isAnimating ? "translateY(0)" : "translateY(200%)",
          opacity: isAnimating ? 1 : 0,
          visibility: "visible",
          willChange: "transform, opacity"
        }}
      />
      <Grid
        backgroundColor="blue.500"
        templateColumns="repeat(12, 1fr)"
        templateRows="repeat(3, 1fr)"
      >
        <Flex
          flexDirection="column"
          flexWrap="nowrap"
          alignItems="center"
          maxW="850px"
          color="white"
          paddingY="88px"
          gridColumn={['2 / 12', '2 / 12', '2 /12', '7 / 13', '7 / 13']}
          gridRow="1 / 4"
        >
          <Heading
            as="h3"
            textTransform="uppercase"
            fontSize={['3xl', '3xl', '5xl', '5xl', '5xl']}
            fontWeight="extrabold"
            mb="8px"
            alignSelf="flex-start"
          >
            Our Professional Services
          </Heading>
          <Heading
            as="h4"
            fontSize={['lg', 'lg', 'xl', 'xl', 'xl']}
            fontWeight="normal"
            mb="20px"
            alignSelf="flex-start"
          >
            We Will Create Modern And First Class Interior.
            We Will Create Modern And First Class Interior.
          </Heading>
          <Heading
            as="h3"
            fontSize="2xl"
            alignSelf="flex-start"
            fontWeight="bold"
          >
            Our Vision
          </Heading>
          <Text
            fontSize="sm"
            mb="20px"
            alignSelf="flex-start"
            textAlign="left"
            lineHeight="23px"
          >
            Our vision is to create modern, first-class interior spaces that not only enhance aesthetics but also improve functionality and user experience. We are dedicated to delivering excellence and sustainability in every project we undertake.
          </Text>
          <Heading
            as="h3"
            fontSize="2xl"
            mb="8px"
            alignSelf="flex-start"
            fontWeight="bold"
          >
            Our Values
          </Heading>
          <Text
            fontSize="sm"
            alignSelf="flex-start"
            textAlign="left"
            lineHeight="23px"
          >
            We are driven by integrity, innovation, and a commitment to excellence
            in every project. Our values reflect a dedication to quality, customer
            satisfaction, and environmental responsibility, guiding our mission to
            build a better tomorrow.
          </Text>
        </Flex>
      </Grid>
    </Box>
  )
}

export default Service
