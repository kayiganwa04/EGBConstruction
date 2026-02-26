import React from 'react'
import { Flex, Heading, Image, Text } from '@chakra-ui/core'

const DreamHome: React.FC = () => {
  return (
    <Flex width="100%" flexDirection="column" alignItems="center" mt="24">
      <Heading
        as="h3"
        mb="20"
        fontSize={['2xl', '2xl', '3xl', '3xl', '3xl']}
        textAlign="center"
        marginX="auto"
      >
        Building excellence in every project, from homes to industries.
      </Heading>

      <Flex
        width="90%"
        flexDirection={['column', 'column', 'column', 'row', 'row']}
        justifyContent="space-between"
        alignItems="center"
        maxW="1280px"
        mb="12"
      >
        <Flex flexDirection="row" alignItems="center" maxW="380px" mb={['8', '8', '8', '0', '0']}>
          <Image src="/icon/power-icon.png" alt="Power Icon" width="50px" height="50px" mr="18px" />
          <Flex flexDirection="column" fontSize="xl">
            <Text fontWeight="bold">Architecture & Planning</Text>
            <Text fontSize="sm">Innovative designs that combine form with function to create lasting structures.</Text>
          </Flex>
        </Flex>

        <Flex flexDirection="row" alignItems="center" maxW="380px" mb={['8', '8', '8', '0', '0']}>
          <Image src="/icon/power-icon.png" alt="Power Icon" width="50px" height="50px" mr="18px" />
          <Flex flexDirection="column" fontSize="xl">
            <Text fontWeight="bold">Civil Engineering</Text>
            <Text fontSize="sm">Comprehensive civil solutions to support infrastructure growth.</Text>
          </Flex>
        </Flex>

        <Flex flexDirection="row" alignItems="center" maxW="380px" mb={['8', '8', '8', '0', '0']}>
          <Image src="/icon/rocket-icon.png" alt="Rocket Icon" width="50px" height="50px" mr="18px" />
          <Flex flexDirection="column" fontSize="xl">
            <Text fontWeight="bold">Structural Engineering</Text>
            <Text fontSize="sm">Creating resilient structures that stand the test of time.</Text>
          </Flex>
        </Flex>

      </Flex>

      <Flex
        width="90%"
        flexDirection={['column', 'column', 'column', 'row', 'row']}
        justifyContent="space-between"
        alignItems="center"
        maxW="1280px"
        mb="12"
      >
        <Flex flexDirection="row" alignItems="center" maxW="380px" mb={['8', '8', '8', '0', '0']}>
          <Image src="/icon/power-icon.png" alt="Power Icon" width="50px" height="50px" mr="18px" />
          <Flex flexDirection="column" fontSize="xl">
            <Text fontWeight="bold">Mechanical Engineering</Text>
            <Text fontSize="sm">Precision-driven mechanical solutions for industrial applications.</Text>
          </Flex>
        </Flex>

        <Flex flexDirection="row" alignItems="center" maxW="380px" mb={['8', '8', '8', '0', '0']}>
          <Image src="/icon/rocket-icon.png" alt="Rocket Icon" width="50px" height="50px" mr="18px" />
          <Flex flexDirection="column" fontSize="xl">
            <Text fontWeight="bold">Project Management</Text>
            <Text fontSize="sm">Coordinating resources and timelines for seamless project execution.</Text>
          </Flex>
        </Flex>

        <Flex flexDirection="row" alignItems="center" maxW="380px" mb={['8', '8', '8', '0', '0']}>
          <Image src="/icon/power-icon.png" alt="Power Icon" width="50px" height="50px" mr="18px" />
          <Flex flexDirection="column" fontSize="xl">
            <Text fontWeight="bold">Consulting</Text>
            <Text fontSize="sm">Providing expert guidance across various engineering disciplines.</Text>
          </Flex>
        </Flex>
  </Flex>

  {/* <Button>Get In Touch</Button> */}
</Flex>
  )
}

export default DreamHome
