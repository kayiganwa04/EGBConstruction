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
    <Box id="footer" bg="lightgrey" pt="16" pb="8">
      <Grid
        as="footer"
        templateColumns="repeat(6, 1fr)"
        mt="8"
        mb="8"
        px={['8', '8', '8', '24', '24']}
        gap={8}
      >
        {/* Left: Logo and Vision */}
        <Flex
          flexDirection="column"
          alignItems="flex-start"
          gridColumn={['1 / 7', '1 / 7', '1 / 7', '1 / 3', '1 / 3']}
        >
          <Logo />
          <Text fontSize="16px" mt="4" lineHeight="22px" color="black">
            Our vision is to create modern, first-class interior spaces that not only enhance aesthetics but also improve functionality and user experience. We are dedicated to delivering excellence and sustainability in every project we undertake.
          </Text>
        </Flex>

        {/* Center: Projects */}
        <Flex
          flexDirection="column"
          alignItems="flex-start"
          gridColumn={['1 / 7', '1 / 7', '1 / 7', '3 / 4', '3 / 4']}
          mt={['12', '12', '12', '0', '0']}
        >
          <Text color="blue.500" fontWeight="bold" fontSize="20px" mb="8px">
            Projects
          </Text>
          <Text mb="6px" color="black">Industrial building</Text>
          <Text mb="6px" color="black">Housing and villas</Text>
          <Text mb="6px" color="black" whiteSpace="nowrap">Luxury apartment</Text>
          <Text color="black">Our Shop</Text>
        </Flex>

        {/* Right: Contact */}
        <Flex
          flexDirection="column"
          alignItems="flex-start"
          gridColumn={['1 / 7', '1 / 7', '1 / 7', '4 / 5']}
          mt={['12', '12', '12', '0', '0']}
        >
          <Text color="blue.500" fontWeight="bold" fontSize="20px" mb="8px">
            Contact Us
          </Text>
          <Text mb="6px" color="black">Address: Kicukiro, Kigali</Text>
          <Text mb="6px" color="black">Office: +250 799 36 58 89</Text>
          <Text mb="6px" color="black">Other Phone: +250 788 38 78 40</Text>
          <Text color="black" whiteSpace="nowrap">Email: bbouquin.egb@gmail.com</Text>
        </Flex>
      </Grid>

      {/* Bottom line and copyright */}
      <Box width="100%" px={['8', '8', '24']} mt="4">
        <Box height="1px" backgroundColor="gray.300" mb="8" />
        <Text
          textAlign="center"
          fontSize="sm"
          color="gray.600"
        >
          © 2025 EGB Construction. All rights reserved.
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;

