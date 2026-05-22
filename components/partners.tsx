import React from 'react'
import { Box, Flex, Heading, Text, Image, Grid } from '@chakra-ui/core'
import Button from './button'

const Partners: React.FC = () => {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      marginY="24"
      maxW="1200px"
      mx="auto"
      width="100%"
    >
      <Heading
        as="h3"
        textTransform="uppercase"
        fontSize="5xl"
        fontWeight="normal"
        mb="12"
        textAlign="center"
      >
        Partners
      </Heading>

      <Flex
        justifyContent="center"
        flexWrap={['wrap', 'wrap', 'wrap', 'nowrap']}
        width="100%"
        px="8"
      >
        <Box marginRight={["0", "0", "0", "18px"]}>
          <Image
            src="/projects/partner1.png"
            display={["block", "block", "block", "block"]}
            borderRadius="5px"
            maxW={["100%", "400px", "400px", "400px"]}
            width="100%"
          />
        </Box>
{/* <Box>
  <Image
    src="/projects/partner2.png"
    display={['none', 'none', 'none', 'block']}
    borderRadius="5px"
    maxW="400px"
    width="100%"
  />
</Box> */}
      </Flex>
    </Flex>
  )
}

export default Partners