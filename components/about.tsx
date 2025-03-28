import React from 'react'
import { Box, Flex, Heading, Text, Image, Grid } from '@chakra-ui/core'
import Button from './button'

const About: React.FC = () => {
  return (
    <Box id="about">
    <Grid templateColumns="repeat(6, 1fr)" marginY="24" alignItems="center">
      <Flex
        flexDirection="column"
        flexWrap="nowrap"
        gridColumn={['1 / 7', '1 / 7', '1 / 7', '1 / 4', '1 / 4']}
        alignItems="center"
        paddingX={['8', '8', '8', '24', '24']}
        marginX="auto"
        maxW="850px"
      >
        <Heading
          as="h3"
          textTransform="uppercase"
          fontSize="5xl"
          fontWeight="normal"
          mb="20px"
          alignSelf="flex-start"
        >
          About us
        </Heading>
        <Text fontSize="md" mb="20px" alignSelf="flex-start" textAlign="left">
          Entreprise Générale du Bâtiment (EGB Ltd) is a distinguished construction company based in Kigali, Rwanda. Established in 2014 by Mr. Bouquin Bonaventure, a civil engineering expert who trained in France, EGB Ltd has consistently delivered exceptional building and utility construction projects throughout Rwanda. Mr. Bonaventure’s commitment to Rwanda's construction sector began in 2012, bringing international expertise to the region and actively creating jobs.

          EGB Ltd initially focused on site supervision and house rehabilitation but quickly expanded its services to include the construction of residential homes, luxury apartments, villas, factories, and warehouses. Our expertise spans industrial and residential buildings, office construction, villa and apartment development, civil engineering, landscaping, and architectural design. Additionally, we offer consulting, supervision, and maintenance services, ensuring the longevity and quality of each project.

          Our technical team includes certified engineers, skilled electricians, plumbers, painters, and interior designers. We uphold values of integrity, professionalism, teamwork, and accountability, aiming to be the preferred choice for engineering and construction services in Rwanda.
        </Text>
<<<<<<< HEAD
        <Button>Learn More</Button>
=======
        {/* <Button>Learn More</Button> */}
>>>>>>> 3676ab9 (first commit)
      </Flex>
      <Box gridColumn="4 / 7" style={{ borderRadius: "10px" }}>
        <Image
          src="/projects/Picture26.png"
          display={['none', 'none', 'none', 'block', 'block']}
          borderRadius="5px"
          width="100%"
        />
      </Box>
    </Grid>
    </Box>
  )
}

export default About
