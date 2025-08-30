import React from 'react'
import { Flex, Grid, Heading, Box } from '@chakra-ui/core'

const Header: React.FC = () => {
  return (
    <>
      <style jsx global>{`
       @keyframes zoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
        .header-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: url('/projects/Picture32.jpg');
          background-position: center;
          background-size: cover;
          background-repeat: no-repeat;
          filter: brightness(0.7);
          z-index: 1;
        }
      `}</style>
      <Box 
        id="header" 
        position="relative" 
        height={['0vh', '60vh', '60vh', '70vh']} 
        overflow="hidden"
      >
        <div className="header-background" />
        <Grid
          position="relative"
          zIndex={1}
          height="100%"
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
              bg="blue.500"
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
              color="blue.500"
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
    </>
  )
}

export default Header