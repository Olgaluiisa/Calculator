import { ButtonProvider } from "./Button"
import { ThemeProvider } from "./Theme/theme"

export const Providers = ({children}) =>{

  return <ThemeProvider>
    <ButtonProvider>{children}</ButtonProvider>
    </ThemeProvider>
}