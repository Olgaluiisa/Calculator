import styled from "styled-components";

export const Container = styled.button`
width: 70px;
height: 70px;
display: flex;
justify-content: center;
align-items: center;
border: none;
border-radius: 42px;
box-shadow: 0 4px 4px rgba(0,0,0,0.25) ;
cursor: pointer;
font-size: 1.6rem;
background-color: ${props => props.roxo ? "#8B8BFF" : props.branco ? "#EFEFF5" : "#EFEFF5"};
color:${props => props.roxo ? "#EFEFF5" : props.branco ? "#8B8BFF" : props.roxoNumber ? "#8B8BFF": "#121214"} ;
`