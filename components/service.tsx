import React from 'react'
import { Grid, Text, Flex, Heading, Button, Box, Image } from '@chakra-ui/core'

const Service: React.FC = () => {
  return (
    <Box position="relative">
      <Image
        width={['0%', '0%', '0%', '40%', '60%']}
        maxW="660px"
        position="absolute"
        top="40%"
        left="5%"
        src="/projects/villa4.jpg"
        display={['none', 'none', 'none', 'block', 'block']}
        borderColor="white"
        borderWidth="10px"
        borderStyle="solid"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        borderRadius="5px"
      />
      <Grid
        backgroundColor="orange.500"
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
            We Will Create Modern And First Class Intorior.
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
            To innovate and lead in creating sustainable, high-quality spaces that
            enhance the lives of our clients and contribute positively to communities
            and the environment.
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
