import React from 'react';
import { Text, Flex, Grid, Box } from '@chakra-ui/core';
import { Divider } from '@chakra-ui/core';
import Logo from './logo';

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

        {/* Right: Contact Info and Map */}
        <Grid
          gridColumn={['1 / 7', '1 / 7', '1 / 7', '4 / 7']}
          templateColumns={['1fr', '1fr', '1fr', '1fr 1fr']}
          gap="6"
          mt={['12', '12', '12', '0', '0']}
        >
          {/* Contact Text */}
          <Flex flexDirection="column" alignItems="flex-start">
            <Text color="blue.500" fontWeight="bold" fontSize="20px" mb="8px">
              Contact Us
            </Text>
            <Text mb="6px" color="black">Address: Kicukiro, Kigali</Text>
            <Text mb="6px" color="black">Office: +250 799 36 58 89</Text>
            <Text mb="6px" color="black">Other Phone: +250 788 38 78 40</Text>
            <Text color="black" whiteSpace="nowrap">Email: bbouquin.egb@gmail.com</Text>
          </Flex>

          {/* Embedded Map */}
          <Box
            as="iframe"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.437477026791!2d30.099927210386262!3d-1.9794661367679396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca7d1987f32a9%3A0xabf5afe74d060258!2sEGB%20construction!5e0!3m2!1sen!2srw!4v1748335400812!5m2!1sen!2srw"  
            width="100%"
            height="300"
            border="0"
            loading="fast"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            borderRadius="md"
            boxShadow="md"
          />
        </Grid>
      </Grid>

      {/* Bottom line and copyright */}
      <Box width="100%" px={['8', '8', '8']} mt="4">
        <Divider height="1px" backgroundColor="gray.500" mb="8" />
        <Text textAlign="center" fontSize="sm" color="gray.600">
          © 2025 EGB Construction. All rights reserved.
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
