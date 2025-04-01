import React from 'react'

import { Heading, Text } from '@chakra-ui/core'

const Logo: React.FC = () => {
  return (
    <>
      <Heading as="h1" size="lg" color="blue.500" textTransform="uppercase">
        <Text display="inline" fontWeight="extrabold">
          EGB
        </Text>{' '}
        <Text display="inline" fontWeight="medium">
          Construction
        </Text>
      </Heading>
    </>
  )
}

export default Logo
