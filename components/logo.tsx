import React from 'react'

import { Heading, Text } from '@chakra-ui/react'

const Logo: React.FC = () => {
  return (
    <>
      <Heading as="h1" size="xl" color={'blue.500'} textTransform="uppercase">
        <Text display="inline" fontWeight="bold">
          EGB
        </Text>{' '}
        <Text display="inline" fontWeight="larger">
          Construction
        </Text>
      </Heading>
    </>
  )
}

export default Logo
