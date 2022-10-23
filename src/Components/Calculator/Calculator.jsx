import { useTheme } from "../../Provider/themeProv"
import { Button } from "../Button/Button"
import { ButtonsContainer, Container, ContainerScreen } from "./style"
import {RiDivideLine, RiPercentLine,RiAddLine, RiCloseLine,RiDeleteBack2Line,RiSubtractLine} from "react-icons/ri"
import {TbEqual,TbWifi0} from "react-icons/tb" 
import {BsBrightnessLow, BsMoonStars} from "react-icons/bs"

export const Calculator = () => {
  const {theme,themeToggler} = useTheme()
  return (
    <Container>
      {theme === "dark" ?<ContainerScreen dark>
        <div onClick={themeToggler}>
          <p><BsBrightnessLow size={"32px"}/></p> 
        </div>
        <div>
          <span>45 X 5</span>
          <h2>225</h2>
        </div>
      </ContainerScreen> : <ContainerScreen screenColor>
      <div onClick={themeToggler}>
        <p><BsMoonStars size={"22px"}/></p> 
        </div>
        <div>
          <span>45 X 5</span>
          <h2>225</h2>
        </div>
        </ContainerScreen>}
      <ButtonsContainer>
      {theme === "dark" ? <Button roxo>AC</Button> : <Button branco>AC</Button>}
      {theme === "dark" ? <Button roxo>+/-</Button> : <Button branco>+/-</Button>}
      {theme === "dark" ? <Button roxo><RiPercentLine size={"40px"}/></Button> : <Button branco><RiPercentLine size={"40px"}/></Button>}
      {theme === "dark" ?  <Button roxo><RiDivideLine size={"50px"} /></Button> :  <Button branco><RiDivideLine size={"50px"}/></Button>}
      {theme === "dark" ?  <Button roxoNumber>7</Button> :  <Button>7</Button>}
      {theme === "dark" ?  <Button roxoNumber>8</Button> :  <Button>8</Button>}
      {theme === "dark" ?  <Button roxoNumber>9</Button> :  <Button>9</Button>}
      {theme === "dark" ?  <Button roxo><RiCloseLine size={"50px"}/></Button> :  <Button branco><RiCloseLine size={"50px"}/></Button>}
      {theme === "dark" ?  <Button roxoNumber>4</Button> :  <Button>4</Button>}
      {theme === "dark" ?  <Button roxoNumber>5</Button> :  <Button>5</Button>}
      {theme === "dark" ?  <Button roxoNumber>6</Button> :  <Button>6</Button>}
      {theme === "dark" ?  <Button roxo><RiSubtractLine size={"50px"}/></Button> :  <Button branco><RiSubtractLine size={"50px"}/></Button>}
      {theme === "dark" ?  <Button roxoNumber>1</Button> :  <Button>1</Button>}
      {theme === "dark" ?  <Button roxoNumber>2</Button> :  <Button>2</Button>}
      {theme === "dark" ?  <Button roxoNumber>3</Button> :  <Button>3</Button>}
      {theme === "dark" ?  <Button roxo><RiAddLine size={"50px"}/></Button> :  <Button branco><RiAddLine size={"50px"}/></Button>}
      {theme === "dark" ?  <Button roxo><RiDeleteBack2Line size={"40px"}/></Button> : <Button branco><RiDeleteBack2Line size={"40px"}/></Button>}
      {theme === "dark" ?  <Button roxoNumber>0</Button> : <Button>0</Button>}
      {theme === "dark" ?  <Button roxo><TbWifi0 size={"50px"}/></Button> : <Button branco><TbWifi0 size={"50px"}/></Button>}
      {theme === "dark" ?  <Button roxoNumber ><TbEqual size={"40px"}/></Button> : <Button roxo><TbEqual size={"40px"}/></Button>}
      </ButtonsContainer>
    </Container>
  )
}
