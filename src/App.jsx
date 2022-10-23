import { useState } from 'react'
import { GlobalStyle } from './styles/styleGlobal'
import { ThemeProvider } from 'styled-components'
import {lightTheme, darkTheme} from "./styles/theme"
import { useTheme } from './Provider/themeProv'
import { Calculator } from './Components/Calculator/Calculator'
export const App = () => {
  const {theme} = useTheme()

  return (
    <div >
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle/>
      <Calculator/>
      </ThemeProvider>
    </div>
  )
}


