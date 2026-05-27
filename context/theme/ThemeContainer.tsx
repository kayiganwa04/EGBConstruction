import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../../styles/theme'

interface ThemeContainerProps {
  children: React.ReactNode
}

const ThemeContainer: React.FC<ThemeContainerProps> = ({ children }) => (
  <ChakraProvider value={theme}>{children}</ChakraProvider>
)

export default ThemeContainer
