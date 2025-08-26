import React from 'react'
import {
  ThemeProvider as ChakraThemeProvider,
  ColorModeProvider,
  CSSReset
} from '@chakra-ui/core'
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming'
import theme from '../../styles/theme'

interface ThemeContainerProps {
  children: React.ReactNode;
}

const ThemeContainer: React.FC<ThemeContainerProps> = ({ children }) => (
  <ChakraThemeProvider theme={theme} {...({} as any)}>
    <ColorModeProvider value="light">
      <CSSReset />
      <EmotionThemeProvider theme={theme}>
        {children}
      </EmotionThemeProvider>
    </ColorModeProvider>
  </ChakraThemeProvider>
)

export default ThemeContainer
