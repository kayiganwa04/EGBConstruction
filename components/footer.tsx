import React from 'react'
import { Text, Flex, Grid, Box } from '@chakra-ui/core'
import Logo from './logo'
// import {
//   FaFacebookF,
//   FaTwitter,
//   FaGoogle,
//   FaInstagram,
//   FaYoutube
// } from 'react-icons/fa'

const Footer: React.FC = () => {
  return (
    <Box id ="footer">
    <Grid as="footer" templateColumns="repeat(6, 1fr)" mt="16" mb="16">
      <Flex
        flexDirection="column"
        alignItems="flex-start"
        gridColumn={['1 / 7', '1 / 7', '1 / 7', '1 / 3', '1 / 3']}
        pl={['8', '8', '8', '24', '24']}
      >
        <Logo />
        <Text fontSize="sm" mt="4" textAlign="left" lineHeight="22px">
          Our vision is to create modern, first-class interior spaces that not only enhance aesthetics but also improve functionality and user experience. We are dedicated to delivering excellence and sustainability in every project we undertake.
        </Text>
      </Flex>

      <Flex
        flexDirection="column"
        alignItems="flex-start"
        gridColumn={['1 / 7', '1 / 7', '1 / 7', '3 / 4', '3 / 4']}
        paddingX="8"
        mt={['12', '12', '12', '0', '0']}
      >
        <Text color="blue.500" fontWeight="bold" fontSize="20px" mb="8px">
          Projects
        </Text>
        <Text mb="6px">Industrial building</Text>
        <Text mb="6px">Housing and villas</Text>
        <Text mb="6px">Luxury appartment</Text>
        <Text>Our Shop</Text>
      </Flex>

      <Flex
        flexDirection="column"
        alignItems="flex-start"
        gridColumn={['1 / 7', '1 / 7', '1 / 7', '4 / 5']}
        paddingX={['8', '8', '8', '8']}
        mt={['12', '12', '12', '0', '0']}
      >
        <Text color="blue.500" fontWeight="bold" fontSize="20px" mb="8px">
          Contact Us
        </Text>
        <Text mb="6px">Address: Kicukiro, Kigali</Text>
        <Text mb="6px">Phone: +250 788 38 78 40</Text>
        <Text>Email: bbouquin.egb@gmail.com</Text>
      </Flex>
    </Grid>
    </Box>
  )
}

export default Footer
