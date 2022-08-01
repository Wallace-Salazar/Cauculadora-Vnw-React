//Entre no link abaixo e continue a desenvolver a nossa calculadora
//Você deve criar as funções de cada button para disparar a operação no click
//Sua calculadora deve ter um button para limpar o resultado da tela e limpar os inputs
//Você deve buscar a solução para a operação de soma ("+" deve somar e não concatenar)
//Aproveite para praticar o styled-component no desafio!!

import "./styles.css";
import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  text-align: center;
  background-image: url("https://ourimagehosting.com/images/2022/08/01/76mlwm7NAu_small.jpg");
  color: #B22222;
  font-size: 24px;
}
button{
  width: 50px;
  height: 50px;
  background-color: black;
  color: white;
  margin-top: 15px;
  margin-bottom:-15px;
  text-align: center;
  border-radius: 50%;
  font-size:15px;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom:5px;
}
`;
const Envolvente = styled.div`
  width: 80vw;
  height: 100vh;
  margin-top: 15vh;
  padding-top: 5vh;
  margin-bottom:15vh;
  background-color: white;
  border: double 8px #8B0000;
  border-radius:50px;
`;
const Valores = styled.input`
  margin-top: 7px;
  margin-left: 7px;
  text-align:center;
  height:50px;
  border: inset 3px orangered;
  ::placeholder {
    font-style: bold;
    font-size: 1.1rem;
    color:black;
  }
  :focus-within {
    color: white;
    background-color: black;
    border: outset 3px orangered;
    height:50px;
  }
`;
const Operacoes = styled.section`
  filter: drop-shadow(2px 1px 5px  orangered);
`;
const Result = styled.section`
  margin-top: 10vh;
`;

export default class calc extends React.Component {
  state = {
    n1: "",
    n2: "",
    res: "resultado"
  };
  handleChange1 = (event) => {
    this.setState({
      n1: Number(event.target.value)
    });
  };
  handleChange2 = (event) => {
    this.setState({ n2: Number(event.target.value) });
  };
  add = () => {
    const { n1, n2 } = this.state;
    this.setState({ res: n1 + n2 });
  };
  sub = () => {
    const { n1, n2 } = this.state;
    this.setState({ res: n1 - n2 });
  };
  mult = () => {
    const { n1, n2 } = this.state;
    this.setState({ res: n1 * n2 });
  };
  div = () => {
    const { n1, n2 } = this.state;
    this.setState({ res: n1 / n2 });
  };
  clean = () => {
    this.setState({
      n1: "",
      n2: "",
      res: "0"
    });
  };


  render() {
    return (
      <Envolvente>
        <GlobalStyle />
        <h1>Calculadora</h1>

        <Valores
          placeholder="Digite os Valores"
          onChange={this.handleChange1}
          value={this.state.n1}
        />
        <Valores
          placeholder="Digite os Valores"
          onChange={this.handleChange2}
          value={this.state.n2}
        />

        <Operacoes>
          <button onClick={this.add}>+</button>
          <button onClick={this.sub}>-</button>
          <Operacoes>
            <button onClick={this.mult}>*</button>
            <button onClick={this.div}>/</button>
            <Operacoes>
              <button onClick={this.clean}>Limpar</button>
            </Operacoes>
          </Operacoes>
        </Operacoes>

        <Result>
          <h2>{this.state.res}</h2>
        </Result>
      </Envolvente>
    );
  }
}
