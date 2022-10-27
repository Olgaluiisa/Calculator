import styled from "styled-components";

export const Container = styled.section`
width: 400px;
height: 698px;
margin: 20px auto;
padding: 15px 20px;
border-radius: 30px;
box-shadow: 4px 4px 4px rgba(0,0,0,0.25);
background-color: ${props => props.theme.calculatorBackground};
`
export const ContainerScreen = styled.div`
width: 362px;
height: 200px;
display: flex;
flex-direction: column;
text-align: right;
justify-content: space-around;
margin-bottom: 20px;
border-radius: 26px;
border: ${props => props.dark ? "2px solid #000" : null};
background-color: ${props => props.theme.screenBackground};
color:${props => props.screenColor ? "#121214" : "#EFEFF5"} ;


div{
  padding-right: 30px;
}
p{
  cursor: pointer;
  padding-right: 3px; 
}
span{
  font-size: 25px; 
  padding-right: 8px; 
}
h2{
  font-size: 3.5rem;
}
`
export const ButtonsContainer = styled.div`
display: grid;
grid-template-columns: repeat(4, 75px);
gap: 20px;
border-radius: 50px;

svg{
  font-weight: 100;
}
`