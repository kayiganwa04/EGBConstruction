import React from 'react'

import { Flex, Text, Heading, Grid, Image } from '@chakra-ui/core'

const OnGoingProjects: React.FC = () => {
  return (
    <Flex flexDirection="column" alignItems="center" mt="24">
      <Heading as="h3" textTransform="uppercase" mb="20px">
        Under Construction
      </Heading>
      <Text fontSize="16px" mb="32px" maxW="460px" textAlign="center">
        Our ongoing projects reflect our commitment to progress and excellence. Each is a testament to our dedication to delivering quality work that meets our clients' evolving needs.
      </Text>
      <Grid
        gridTemplateColumns={['1fr', '1fr', '50% 60%']}
        gap="26px"
        px={['8', '8', '8', '24', '24']}
        maxW="1200px"
        w="100%"
        gridAutoRows="250px"
      >
        {/* First Row */}
        <Image
          src="/projects/Picture71.jpg"
          borderRadius="5px"
          w="100%"
          h="100%"
          objectFit="cover"
        />
        <Image
          src="/projects/residential2.png"
          borderRadius="5px"
          w="100%"
          h="100%"
          objectFit="cover"
        />
        {/* Second Row */}
        <Image
          src="/projects/apartment1.png"
          borderRadius="5px"
          w="100%"
          h="100%"
          objectFit="cover"
        />
        <Image
          src="/projects/apartment2.png"
          borderRadius="5px"
          w="100%"
          h="100%"
          objectFit="cover"
        />
        {/* Third Row */}
        <Image
          src="/projects/hospital1.png"
          borderRadius="5px"
          w="100%"
          h="100%"
          objectFit="cover"
        />
        <Image
          src="/projects/hospital2.png"
          borderRadius="5px"
          w="100%"
          h="100%"
          objectFit="cover"
        />
        {/* Fourth Row */}
        <Image
          src="/projects/Picture78.jpg"
          borderRadius="5px"
          w="100%"
          h="100%"
          objectFit="cover"
        />
        <Image
          src="/projects/Picture80.jpg"
          borderRadius="5px"
          w="100%"
          h="100%"
          objectFit="cover"
        />
        {/* Fifth Row */}
        <Image
          src="/projects/residential3.png"
          borderRadius="5px"
          w="100%"
          h="100%"
          objectFit="cover"
        />
        <Image
          src="/projects/residential4.png"
          borderRadius="5px"
          w="100%"
          h="100%"
          objectFit="cover"
        />
        {/* Sixth Row */}
        <Image
          src="/projects/estate1.png"
          borderRadius="5px"
          w="100%"
          h="100%"
          objectFit="cover"
        />
        <Image
          src="/projects/apartment4.png"
          borderRadius="5px"
          w="100%"
          h="100%"
          objectFit="cover"
        />
      </Grid>
    </Flex>
  )
}

export default OnGoingProjects
