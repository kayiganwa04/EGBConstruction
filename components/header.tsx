import React from 'react'
import { Flex, Grid, Heading, Box } from '@chakra-ui/react'

const Header: React.FC = () => {
  return (
    <>
      <style jsx global>{`
        @keyframes zoom {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.1);
          }
        }
        .header-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: url('/projects/Picture32.jpg');
          background-position: center;
          background-size: 100% auto;
          background-repeat: no-repeat;
          filter: brightness(0.7);
          z-index: 1;
          animation: zoom 20s infinite alternate;
          will-change: transform;
        }
      `}</style>
      <Box
        id="header"
        position="relative"
        minH={['21vh', '36vh', '40vh', '48vh']}
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
            paddingX={['1em', '1.5em', '1.5em', '15%']}
            alignItems="flex-start"
          >
            <Heading
              as="h2"
              fontSize="clamp(1rem, 4vw, 4.8rem)"
              color="white"
              bg="blue.500"
              mb="3"
              width="100%"
              maxW="100%"
              paddingX={['11px', '13px', '17px', '21px', '25px']}
              paddingY={['6px', '8px', '10px', '12px', '14px']}
              borderRadius="10px"
              textAlign="center"
              lineHeight="1.1"
              whiteSpace="nowrap"
              overflow="hidden"
              textOverflow="clip"
              fontWeight="700"
              letterSpacing="-0.02em"
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
              maxW="100%"
              paddingX={['16px', '18px', '22px', '24px', '26px']}
              paddingY={['4px', '6px', '8px', '9px', '10px']}
              borderRadius="8px"
              whiteSpace="nowrap"
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
