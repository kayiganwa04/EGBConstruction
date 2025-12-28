import React from 'react'
import { Button as ChakraButton } from '@chakra-ui/core'

interface ButtonProps {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    <ChakraButton
      variantColor="orange"
      color="white"
      textTransform="uppercase"
      width="fit-content"
    >
      {children}
    </ChakraButton>
  )
}

export default Button
