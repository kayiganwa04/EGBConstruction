import React from 'react'

import { Flex, Text, Heading, Grid, Image } from '@chakra-ui/core'

const AccomplishedPojects: React.FC = () => {
  return (
    <Flex flexDirection="column" alignItems="center" mt="24">
      <Heading as="h3" textTransform="uppercase" mb="20px">
        Accomplished Projects
      </Heading>
      <Text fontSize="16px" mb="32px" maxW="460px" textAlign="center">
        Our completed projects demonstrate our commitment to quality and client satisfaction. From residential to commercial builds, each project highlights our expertise and dedication to delivering exceptional results.
      </Text>
      <Grid
        gridTemplateColumns="repeat(3, 1fr)"
        gridGap="26px"
        px={['8', '8', '8', '24', '24']}
      >
        <Image
          src="/projects/Picture26.png"
          gridColumn={['1 / 2', '1 / 3', 'auto', 'auto', 'auto']}
        />
        <Image
          src="/projects/Picture12.jpg"
          gridColumn={['1 / 2', '2 / 4', 'auto', 'auto', 'auto']}
        />
        <Image
          src="/projects/Picture17.jpg"
          gridColumn={['1 / 2', '1 / 3', 'auto', 'auto', 'auto']}
        />
        <Image
          src="/projects/Picture1.jpg"
          gridColumn={['1 / 2', '2 / 4', 'auto', 'auto', 'auto']}
        />
        <Image
          src="/Projects/Picture27.jpg"
          gridColumn={['1 / 2', '1 / 3', 'auto', 'auto', 'auto']}
        />
        <Image
          src="/Projects/Picture28.jpg"
          gridColumn={['1 / 2', '2 / 4', 'auto', 'auto', 'auto']}
        />
        <Image
          src="/projects/Picture30.jpg"
          gridColumn={['1 / 2', '2 / 4', 'auto', 'auto', 'auto']}
        />
        <Image
          src="/Projects/Picture32.jpg"
          gridColumn={['1 / 2', '1 / 3', 'auto', 'auto', 'auto']}
        />
        <Image
          src="/Projects/Picture34.jpg"
          gridColumn={['1 / 2', '2 / 4', 'auto', 'auto', 'auto']}
        />
      </Grid>
    </Flex>
  )
}

export default AccomplishedPojects
