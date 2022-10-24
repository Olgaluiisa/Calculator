import { useTheme } from "../../Provider/Theme/theme"
import { Button } from "../Button/Button"
import { ButtonsContainer, Container, ContainerScreen } from "./style"
import {RiDivideLine, RiPercentLine,RiAddLine, RiCloseLine,RiDeleteBack2Line,RiSubtractLine} from "react-icons/ri"
import {TbEqual,TbWifi0} from "react-icons/tb" 
import {BsBrightnessLow, BsMoonStars} from "react-icons/bs"
import { useButton } from "../../Provider/Button"

export const Calculator = () => {
  const {theme,themeToggler} = useTheme()
  const {handleValue,valueButton,clear,resultValue,porcentage,handleIconsClick,calculator,changeSing} = useButton()
  return (
    <Container>
      {theme === "dark" ?<ContainerScreen dark>
        <div onClick={themeToggler}>
          <p><BsBrightnessLow size={"32px"}/></p> 
        </div>
        <div>
          <span>{valueButton}</span>
          <h2>{resultValue}</h2>
        </div>
      </ContainerScreen> : <ContainerScreen screenColor>
      <div onClick={themeToggler}>
        <p><BsMoonStars size={"22px"}/></p> 
        </div>
        <div>
          <span>{valueButton}</span>
          <h2>{resultValue}</h2>
        </div>
        </ContainerScreen>}
      <ButtonsContainer>
      {theme === "dark" ? <Button roxo  onClick={clear}>AC</Button> : <Button branco onClick={clear}>AC</Button>}

      {theme === "dark" ? <Button roxo onClick={changeSing}>+/-</Button> : <Button branco onClick={changeSing}>+/-</Button>}

      {theme === "dark" ? <Button roxo onClick={porcentage}><RiPercentLine size={"40px"}/></Button> : <Button branco onClick={porcentage}><RiPercentLine size={"40px"}/></Button>}

      {theme === "dark" ? <Button roxo onClick={()=> handleIconsClick("/")}><RiDivideLine size={"50px"} /></Button> :  <Button branco onClick={()=> handleIconsClick("/")}><RiDivideLine size={"50px"}/></Button>}

      {theme === "dark" ?  <Button roxoNumber onClick={handleValue} value={7}>7</Button> :  <Button onClick={handleValue} value={7}>7</Button>}

      {theme === "dark" ?  <Button roxoNumber onClick={handleValue} value={8}>8</Button> :  <Button onClick={handleValue} value={8}>8</Button>}

      {theme === "dark" ?  <Button roxoNumber onClick={handleValue} value={9}>9</Button> :  <Button onClick={handleValue} value={9}>9</Button>}

      {theme === "dark" ?  <Button roxo onClick={()=> handleIconsClick("x")}><RiCloseLine size={"50px"}/></Button> :  <Button branco onClick={()=> handleIconsClick("x")}><RiCloseLine size={"50px"}/></Button>}

      {theme === "dark" ?  <Button roxoNumber onClick={handleValue} value={4}>4</Button> :  <Button onClick={handleValue} value={4}>4</Button>}

      {theme === "dark" ?  <Button roxoNumber onClick={handleValue} value={5}>5</Button> :  <Button onClick={handleValue} value={5}>5</Button>}

      {theme === "dark" ?  <Button roxoNumber onClick={handleValue} value={6}>6</Button> :  <Button onClick={handleValue} value={6}>6</Button>}

      {theme === "dark" ?  <Button roxo onClick={()=> handleIconsClick("-")}><RiSubtractLine size={"50px"}/></Button> :  <Button branco onClick={()=> handleIconsClick("-")}><RiSubtractLine size={"50px"}/></Button>}

      {theme === "dark" ?  <Button roxoNumber onClick={handleValue} value={1}>1</Button> :  <Button onClick={handleValue} value={1}>1</Button>}

      {theme === "dark" ?  <Button roxoNumber onClick={handleValue} value={2}>2</Button> :  <Button onClick={handleValue} value={2}>2</Button>}

      {theme === "dark" ?  <Button roxoNumber onClick={handleValue} value={3}>3</Button> :  <Button onClick={handleValue} value={3}>3</Button>}

      {theme === "dark" ?  <Button roxo onClick={()=> handleIconsClick("+")}><RiAddLine size={"50px"}/></Button> :  <Button branco onClick={()=> handleIconsClick("+")}><RiAddLine size={"50px"}/></Button>}

      {theme === "dark" ?  <Button roxo value={"del"}><RiDeleteBack2Line size={"40px"}/></Button> : <Button branco value={"del"}><RiDeleteBack2Line size={"40px"}/></Button>}

      {theme === "dark" ?  <Button roxoNumber onClick={handleValue} value={0}>0</Button> : <Button onClick={handleValue} value={0}>0</Button>}

      {theme === "dark" ?  <Button roxo onClick={()=> handleIconsClick(".")}><TbWifi0 size={"50px"} /></Button> : <Button branco onClick={()=> handleIconsClick(".")}><TbWifi0 size={"50px"}/></Button>}

      {theme === "dark" ? <Button roxoNumber onClick={calculator}><TbEqual size={"40px"}/></Button> : <Button roxo onClick={calculator}><TbEqual size={"40px"}/></Button>}
      </ButtonsContainer>
    </Container>
  )
}
