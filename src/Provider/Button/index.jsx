import { createContext, useState, useContext } from "react";

export const ButtonContext = createContext();

export const ButtonProvider = ({ children }) => {
  const [oldValue, setOldValue] = useState(0)
  const [valueButton, setValueButton] = useState(0)
  const [resultValue, setResultValue] = useState(0)
  const [operator,setOperator] = useState("")


  //Captura valor dos numeros e armazena no no state : "valor botão"
  const valueNumber = (value) =>{
    const valueCapturado = +value.target.value

    if(value === 0){
      setValueButton(valueCapturado)
    }else{
      setValueButton([valueButton + valueCapturado])
    }
    
  }
  //Captura valor dos icones (operadores) e armazena no state : "valor botão"
  const valueIcons = (value) =>{
    if(valueButton > 0){
      setValueButton([valueButton + value])
    } 
    setOperator(value)
    setOldValue(valueButton)
    
}

//Deleta numeros
const deleteNumbers = () =>{
  const oldNovo = +valueButton.toString().slice(0,-1)
  setValueButton(oldNovo)
  }

//Limpa todos os states
  const clear = () =>{
    setValueButton(0)
    setResultValue(0)
    setOldValue(0)
}
//Calcula as porcentagens
const porcentage = () =>{
  if(valueButton > 0){
    setResultValue(valueButton / 100)
  }
}
//Transforma o número em negativo ou positivo
const changePositiveOrNegativeValue = () =>{
  if(valueButton > 0){
    setValueButton(-valueButton)
  }else{
    setValueButton(Math.abs(valueButton))
  }
}

//Realiza as operações matemáticas
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


  return (
    <ButtonContext.Provider value={{valueNumber,valueButton,clear,resultValue,porcentage,valueIcons,calculator,changePositiveOrNegativeValue,deleteNumbers}}>
      {children}
    </ButtonContext.Provider>
  );
};

export const useButton = () => useContext(ButtonContext);