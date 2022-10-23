import { Container } from "./style"

export const Button = ({children,...rest}) => {
  return (
    <Container {...rest}>{children}</Container>
  )
}
