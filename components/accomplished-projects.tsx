import React from 'react'

import { Flex, Text, Heading, Grid, Image } from '@chakra-ui/core'
const AccomplishedPojects: React.FC = () => {
  return (
    <Flex flexDirection="column" alignItems="center" mt={['24', '24', '24', '24', '64']}>
      <Heading as="h3" textTransform="uppercase" mb="20px">
        Accomplished Projects
      </Heading>
      <Text fontSize="16px" mb="32px" maxW="460px" textAlign="center">
        Our completed projects demonstrate our commitment to quality and client satisfaction. From residential to commercial builds, each project highlights our expertise and dedication to delivering exceptional results.
      </Text>
      <Grid
        gridTemplateColumns={['1fr', '1fr', 'repeat(3, 1fr)']}
        gridTemplateRows="auto"
        gap="26px"
        px={['8', '8', '8', '24', '24']}
        maxW="1400px"
      >
        <Image
          src="/projects/Picture26.png"
          gridColumn={['1', '1', '1']}
          borderRadius="5px"
          objectFit="cover"
          h="300px"
        />
        <Image
          src="/projects/Picture12.jpg"
          gridColumn={['1', '1', '2']}
          borderRadius="5px"
          objectFit="cover"
          h="300px"
        />
        <Image
          src="/projects/Picture17.jpg"
          gridColumn={['1', '1', '3']}
          borderRadius="5px"
          objectFit="cover"
          h="300px"
        />
        <Image
          src="/projects/Picture1.jpg"
          gridColumn={['1', '1', '1']}
          borderRadius="5px"
          objectFit="cover"
          h="300px"
        />
        <Image
          src="/Projects/Picture27.jpg"
          gridColumn={['1', '1', '2']}
          borderRadius="5px"
          objectFit="cover"
          h="300px"
        />
        <Image
          src="/Projects/Picture28.jpg"
          gridColumn={['1', '1', '3']}
          borderRadius="5px"
          objectFit="cover"
          h="300px"
        />
        <Image
          src="/projects/Picture30.jpg"
          gridColumn={['1', '1', '1']}
          borderRadius="5px"
          objectFit="cover"
          h="300px"
        />
        <Image
          src="/Projects/industry.png"
          gridColumn={['1', '1', '2']}
          borderRadius="5px"
          objectFit="cover"
          h="300px"
        />
        <Image
          src="/Projects/Picture34.jpg"
          gridColumn={['1', '1', '3']}
          borderRadius="5px"
          objectFit="cover"
          h="300px"
        />
        <Image
          src="/Projects/restaurant1.jpg"
          gridColumn={['1', '1', '1']}
          borderRadius="5px"
          objectFit="cover"
          h="300px"
        />
        <Image
          src="/Projects/restaurant2.jpg"
          gridColumn={['1', '1', '2']}
          borderRadius="5px"
          objectFit="cover"
          h="300px"
        />
        <Image
          src="/Projects/restaurant3.png"
          gridColumn={['1', '1', '3']}
          borderRadius="5px"
          objectFit="cover"
          h="300px"
        />
        <Image
          src="/Projects/restaurant4.jpg"
          gridColumn={['1', '1', '1']}
          borderRadius="5px"
          objectFit="cover"
          h="300px"
        />
        <Image
          src="/Projects/villa1.jpeg"
          gridColumn={['1', '1', '2']}
          borderRadius="5px"
          objectFit="cover"
          h="300px"
        />
        <Image
          src="/Projects/villa2.jpg"
          gridColumn={['1', '1', '3']}
          borderRadius="5px"
          objectFit="cover"
          h="300px"
        />
        <Image
          src="/Projects/villa3.jpg"
          gridColumn={['1', '1', '1']}
          borderRadius="5px"
          objectFit="cover"
          h="300px"
        />
        <Image
          src="/Projects/villa4.jpg"
          gridColumn={['1', '1', '2']}
          borderRadius="5px"
          objectFit="cover"
          h="300px"
        />
        <Image
          src="/Projects/villa5.jpg"
          gridColumn={['1', '1', '3']}
          borderRadius="5px"
          objectFit="cover"
          h="300px"
        />
        <Image
          src="/Projects/villa6.jpg"
          gridColumn={['1', '1', '1']}
          borderRadius="5px"
          objectFit="cover"
          h="300px"
        />
        <Image
          src="/Projects/villa9.jpg"
          gridColumn={['1', '1', '2']}
          borderRadius="5px"
          objectFit="cover"
          h="300px"
        />
        <Image
          src="/Projects/villa10.jpg"
          gridColumn={['1', '1', '3']}
          borderRadius="5px"
          objectFit="cover"
          h="300px"
        />
        <Image
          src="/Projects/villa11.jpeg"
          gridColumn={['1', '1', '1']}
          borderRadius="5px"
          objectFit="cover"
          h="300px"
        />
        <Image
          src="/Projects/villa12.jpg"
          gridColumn={['1', '1', '2']}
          borderRadius="5px"
          objectFit="cover"
          h="300px"
        />
        <Image
          src="/Projects/villa13.png"
          gridColumn={['1', '1', '3']}
          borderRadius="5px"
          objectFit="cover"
          h="300px"
        />
        <Image
          src="/Projects/villa14.jpeg"
          gridColumn={['1', '1', '1']}
          borderRadius="5px"
          objectFit="cover"
          h="300px"
        />
        <Image
          src="/Projects/villa15.jpg"
          gridColumn={['1', '1', '2']}
          borderRadius="5px"
          objectFit="cover"
          h="300px"
        />
        <Image
          src="/Projects/villa16.jpg"
          gridColumn={['1', '1', '3']}
          borderRadius="5px"
          objectFit="cover"
          h="300px"
        />
      </Grid>
    </Flex>
  )
}

export default AccomplishedPojects
