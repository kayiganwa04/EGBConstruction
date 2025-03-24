import React from 'react'

import { Flex, Text, Heading, Grid, Image, Box } from '@chakra-ui/core'
const AccomplishedPojects: React.FC = () => {
  return (
    <Box id="accomplished">
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
          src="/projects/Picture27.jpg"
          gridColumn={['1', '1', '2']}
          borderRadius="5px"
          objectFit="cover"
          h="300px"
        />
        <Image
          src="/projects/Picture28.jpg"
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
          src="/projects/industry.png"
          gridColumn={['1', '1', '2']}
          borderRadius="5px"
          objectFit="cover"
          h="300px"
        />
        <Image
          src="/projects/Picture34.jpg"
          gridColumn={['1', '1', '3']}
          borderRadius="5px"
          objectFit="cover"
          h="300px"
        />
        <Image
          src="/projects/restaurant1.jpg"
          gridColumn={['1', '1', '1']}
          borderRadius="5px"
          objectFit="cover"
          h="300px"
        />
        <Image
          src="/projects/restaurant2.jpg"
          gridColumn={['1', '1', '2']}
          borderRadius="5px"
          objectFit="cover"
          h="300px"
        />
        <Image
          src="/projects/restaurant3.png"
          gridColumn={['1', '1', '3']}
          borderRadius="5px"
          objectFit="cover"
          h="300px"
        />
        <Image
          src="/projects/restaurant4.jpg"
          gridColumn={['1', '1', '1']}
          borderRadius="5px"
          objectFit="cover"
          h="300px"
        />
        <Image
          src="/projects/villa1.jpeg"
          gridColumn={['1', '1', '2']}
          borderRadius="5px"
          objectFit="cover"
          h="300px"
        />
        <Image
          src="/projects/villa2.jpg"
          gridColumn={['1', '1', '3']}
          borderRadius="5px"
          objectFit="cover"
          h="300px"
        />
        <Image
          src="/projects/villa3.jpg"
          gridColumn={['1', '1', '1']}
          borderRadius="5px"
          objectFit="cover"
          h="300px"
        />
        <Image
          src="/projects/villa4.jpg"
          gridColumn={['1', '1', '2']}
          borderRadius="5px"
          objectFit="cover"
          h="300px"
        />
        <Image
          src="/projects/villa5.jpg"
          gridColumn={['1', '1', '3']}
          borderRadius="5px"
          objectFit="cover"
          h="300px"
        />
        <Image
          src="/projects/villa6.jpg"
          gridColumn={['1', '1', '1']}
          borderRadius="5px"
          objectFit="cover"
          h="300px"
        />
        <Image
          src="/projects/villa9.jpg"
          gridColumn={['1', '1', '2']}
          borderRadius="5px"
          objectFit="cover"
          h="300px"
        />
        <Image
          src="/projects/villa10.jpg"
          gridColumn={['1', '1', '3']}
          borderRadius="5px"
          objectFit="cover"
          h="300px"
        />
        <Image
          src="/projects/villa11.jpeg"
          gridColumn={['1', '1', '1']}
          borderRadius="5px"
          objectFit="cover"
          h="300px"
        />
        <Image
          src="/projects/villa12.jpg"
          gridColumn={['1', '1', '2']}
          borderRadius="5px"
          objectFit="cover"
          h="300px"
        />
        <Image
          src="/projects/villa13.png"
          gridColumn={['1', '1', '3']}
          borderRadius="5px"
          objectFit="cover"
          h="300px"
        />
        <Image
          src="/projects/villa14.jpeg"
          gridColumn={['1', '1', '1']}
          borderRadius="5px"
          objectFit="cover"
          h="300px"
        />
        <Image
          src="/projects/villa15.jpg"
          gridColumn={['1', '1', '2']}
          borderRadius="5px"
          objectFit="cover"
          h="300px"
          w="100%"
        />
        <Image
          src="/projects/villa16.jpg"
          gridColumn={['1', '1', '3']}
          borderRadius="5px"
          objectFit="cover"
          h="300px"
        />
      </Grid>
    </Flex>
    </Box>
  )
}

export default AccomplishedPojects
