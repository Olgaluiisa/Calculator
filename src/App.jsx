import { useState } from 'react'
import { GlobalStyle } from './styles/styleGlobal'
import { ThemeProvider } from 'styled-components'
import {lightTheme, darkTheme} from "./styles/theme"
import { useTheme } from './Provider/themeProv'
export const App = () => {
  const {theme,themeToggler} = useTheme()

  return (
    <div >
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle/>
    
      </ThemeProvider>
    </div>
  )
}


