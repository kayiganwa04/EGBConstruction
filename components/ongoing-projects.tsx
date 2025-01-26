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
        gridTemplateColumns={['1fr', '1fr 1fr', 'repeat(3, 1fr)']}
        gap="26px"
        px={['8', '8', '8', '24', '24']}
        maxW="1200px"
        w="100%"
      >
        <Image
          src="/projects/Picture71.jpg"
          borderRadius="5px"
          w="100%"
          h="250px"
          objectFit="cover"
        />
        <Image
          src="/projects/Picture62.jpg"
          borderRadius="5px"
          w="100%"
          h="250px"
          objectFit="cover"
        />
        <Image
          src="/projects/Picture63.jpg"
          borderRadius="5px"
          w="100%"
          h="250px"
          objectFit="cover"
        />
        <Image
          src="/projects/Picture66.jpg"
          borderRadius="5px"
          w="100%"
          h="250px"
          objectFit="cover"
        />
        <Image
          src="/projects/Picture69.png"
          borderRadius="5px"
          w="100%"
          h="250px"
          objectFit="cover"
        />
        <Image
          src="/projects/Picture70.jpg"
          borderRadius="5px"
          w="100%"
          h="250px"
          objectFit="cover"
        />
        <Image
          src="/projects/Picture76.png"
          borderRadius="5px"
          w="100%"
          h="250px"
          objectFit="cover"
        />
        <Image
          src="/projects/Picture78.jpg"
          borderRadius="5px"
          w="100%"
          h="250px"
          objectFit="cover"
        />
        <Image
          src="/projects/Picture80.jpg"
          borderRadius="5px"
          w="100%"
          h="250px"
          objectFit="cover"
        />
      </Grid>
    </Flex>
  )
}

export default OnGoingProjects
