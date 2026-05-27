import React from 'react'
import { Button as ChakraButton } from '@chakra-ui/react'

interface ButtonProps {
  children: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    <ChakraButton
      bg="orange.500"
      color="white"
      textTransform="uppercase"
      width="fit-content"
    >
      {children}
    </ChakraButton>
  )
}

export default Button
