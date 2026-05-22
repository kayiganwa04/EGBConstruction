import React from 'react';
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming';
import { CSSReset } from '@chakra-ui/core';
import customTheme from '../../styles/theme';

type Props = {
  children: React.ReactNode;
};

const CustomThemeProvider = ({ children }: Props) => (
  <EmotionThemeProvider theme={customTheme}>
    <CSSReset />
    {children}
  </EmotionThemeProvider>
);

export default CustomThemeProvider; 