import { useState } from 'react'
import { GlobalStyle } from './styles/styleGlobal'
import { ThemeProvider } from 'styled-components'
import {lightTheme, darkTheme} from "./styles/theme"
export const App = () => {
  const [theme, setTheme] = useState("light")
  
  const themeToggler = () =>{
    theme === "light" ? setTheme("dark") : setTheme("light")
  }
  return (
    <div >
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle/>
      </ThemeProvider>
    </div>
  )
}


