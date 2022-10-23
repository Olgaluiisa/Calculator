import styled from "styled-components";

export const Container = styled.section`
width: 507px;
height: 892px;
margin: 20px auto;
padding: 15px 20px;
border-radius: 30px;
box-shadow: 4px 4px 4px rgba(0,0,0,0.25);
background-color: ${props => props.theme.calculatorBackground};
`
export const ContainerScreen = styled.div`
width: 462px;
height: 273px;
display: flex;
flex-direction: column;
text-align: right;
justify-content: space-around;
margin-bottom: 20px;
border-radius: 50px;
border: ${props => props.dark ? "2px solid #000" : null};
background-color: ${props => props.theme.screenBackground};
color:${props => props.screenColor ? "#121214" : "#EFEFF5"} ;


div{
  padding-right: 30px;
}
p{
  cursor: pointer;
}
span{
  font-size: 32px;  
}
h2{
  font-size: 64px;
}
`
export const ButtonsContainer = styled.div`
display: grid;
grid-template-columns: repeat(4, 115px);
gap: 20px 10px;
border-radius: 50px;

svg{
  font-weight: 100;
}
`