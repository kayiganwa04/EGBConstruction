import React from 'react'
import { Flex, Grid, Heading } from '@chakra-ui/core'

const Header: React.FC = () => {
  return (
    <Box id ="header">
    <Grid
      backgroundImage="url(/projects/Picture32.jpg)"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      height={['60vh', '60vh', '60vh', '70vh']}
      templateRows="1fr 1fr 1fr"
    >
      <Flex
        flexDirection="column"
        gridRow="3 / 3"
        paddingX={['1.5em', '1.5em', '1.5em', '15%']}
      >
        <Heading
          as="h2"
          fontSize={['4xl', '5xl', '6xl', '6xl', '6xl']}
          color="white"
          bg="orange.500"
          mb="3"
          width="fit-content"
          paddingX={['4px', '12px', '12px', '16px', '24px']}
          paddingY={['4px', '4px', '12px', '12px', '16px']}
          borderRadius="10px"
          textAlign="center"
        >
          Entreprise Générale du Bâtiment
        </Heading>
        <Heading
          as="h3"
          fontSize={['lg', 'lg', '2xl', '2xl', '2xl']}
          textTransform="uppercase"
          color="orange.500"
          bg="white"
          width="fit-content"
          paddingX={['24px', '24px', '30px', '30px', '30px']}
          paddingY={['8px', '8px', '14px', '14px', '14px']}
        >
          Ideas & Inspirations
        </Heading>
      </Flex>
    </Grid>
    </Box>
  )
}

export default Header
