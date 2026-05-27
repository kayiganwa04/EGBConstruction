import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import customTheme from '../../styles/theme'

type Props = {
  children: React.ReactNode
}

const CustomThemeProvider = ({ children }: Props) => (
  <ChakraProvider value={customTheme}>{children}</ChakraProvider>
)

export default CustomThemeProvider
