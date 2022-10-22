import { ThemeProvider } from "./themeProv"

export const Providers = ({children}) =>{
  return <ThemeProvider>{children}</ThemeProvider>
}