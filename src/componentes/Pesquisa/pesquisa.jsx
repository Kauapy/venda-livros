import React from "react";
import Input from "../Input/input";
import styled from "styled-components";
import { useState } from "react";
import { livros } from './dadosPesquisa.jsx'

const PesquisaContainer = styled.div`
  
  color: #fff;
  text-align: center;
  padding: 85px 0;
  height: 270px;
  width: 100%;
`;

const Titulo = styled.h2`
  color: #fff;
  font-size: 36px;
  text-align: center;
  width: 100%;
`;

const Subtitulo = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 40px;
`;

const Pesquisa = () => {

    const [livrosPesquisados, setlivrosPesquisados] = useState([])

  return (
    <PesquisaContainer>
      <Titulo>Já sabe por onde começar?</Titulo>
      <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
      <Input placeholder="Procure seu livro" onBlur={evento => setlivrosPesquisados(evento => {
        const textoDigitado = evento.target.value
        const resultadoPesquisa = livros.filter((livro => livro.nome.includes(textoDigitado)))
        setlivrosPesquisados(resultadoPesquisa)
      })}></Input>
    </PesquisaContainer>
  );
};

export default Pesquisa;
