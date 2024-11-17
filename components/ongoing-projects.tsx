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
        gridTemplateColumns="repeat(3, 1fr)"
        gridGap="26px"
        px={['8', '8', '8', '24', '24']}
      >
        <Image
          src="/projects/Picture71.jpg"
          gridColumn={['1 / 2', '1 / 3', 'auto', 'auto', 'auto']}
        />
        <Image
          src="/projects/Picture62.jpg"
          gridColumn={['1 / 2', '2 / 4', 'auto', 'auto', 'auto']}
        />
        <Image
          src="/projects/Picture63.jpg"
          gridColumn={['1 / 2', '1 / 3', 'auto', 'auto', 'auto']}
        />
        <Image
          src="/projects/Picture66.jpg"
        />
        <Image
          src="/Projects/Picture69.png"
          gridColumn={['1 / 2', '1 / 3', 'auto', 'auto', 'auto']}
        />
        <Image
          src="/Projects/Picture70.jpg"
          gridColumn={['1 / 2', '2 / 4', 'auto', 'auto', 'auto']}
        />
        <Image
          src="/projects/Picture76.png"
          gridColumn={['1 / 2', '2 / 4', 'auto', 'auto', 'auto']}
        />
        <Image
          src="/Projects/Picture78.jpg"
          gridColumn={['1 / 2', '1 / 3', 'auto', 'auto', 'auto']}
        />
        <Image
          src="/Projects/Picture80.jpg"
          gridColumn={['1 / 2', '2 / 4', 'auto', 'auto', 'auto']}
        />
      </Grid>
    </Flex>
  )
}

export default OnGoingProjects
