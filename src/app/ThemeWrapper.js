'use client'
import React from 'react'
import { ThemeProvider } from '@mui/material'
import lightTheme from '@/style/theme'

const ThemeWrapper = ({ children }) => {
  return <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>
}

export default ThemeWrapper
