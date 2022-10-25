import { createContext, useState, useContext } from "react";

export const ButtonContext = createContext();

export const ButtonProvider = ({ children }) => {
  const [oldValue, setOldValue] = useState(0)
  const [valueButton, setValueButton] = useState(0)
  const [resultValue, setResultValue] = useState(0)
  const [operator,setOperator] = useState("")

  console.log(oldValue)
  
  const handleValue = (value) =>{
    const valueCapturado = +value.target.value

    if(value === 0){
      setValueButton(valueCapturado)
    }else{
      setValueButton([valueButton + valueCapturado])
    }
    
  }
  const handleIconsClick = (value) =>{
    if(valueButton > 0){
      setValueButton([valueButton + value])
    } 
    setOperator(value)
    setOldValue(valueButton)
    
}
  const clear = () =>{
    setValueButton(0)
    setResultValue(0)
    setOldValue(0)
}
const porcentage = () =>{
  if(valueButton > 0){
    setResultValue(valueButton / 100)
  }
}

const changePositiveOrNegativeValue = () =>{
  if(valueButton > 0){
    setValueButton(-valueButton)
  }else{
    setValueButton(Math.abs(valueButton))
  }
}

const calculator = () =>{
  const oldValue2 = +oldValue.toString()
  if(operator === "-"){
    let divisao = +valueButton.toString().split("-")[1]
    setResultValue(oldValue2 - divisao)
}
if(operator === "+"){
  let divisao = +valueButton.toString().split("+")[1]
  setResultValue(oldValue2 + divisao)
}
if(operator === "x"){
  let divisao = +valueButton.toString().split("x")[1]
  setResultValue(oldValue2 * divisao)
}
if(operator === "/"){
  let divisao = +valueButton.toString().split("/")[1]
  setResultValue(oldValue2 / divisao)
}
}
const deleteNumber = () =>{
const oldNovo = +valueButton.toString().slice(0,-1)
setValueButton(oldNovo)
}

  return (
    <ButtonContext.Provider value={{handleValue,valueButton,clear,resultValue,porcentage,handleIconsClick,calculator,changePositiveOrNegativeValue,deleteNumber}}>
      {children}
    </ButtonContext.Provider>
  );
};

export const useButton = () => useContext(ButtonContext);