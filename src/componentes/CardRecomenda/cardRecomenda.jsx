import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
  margin-top: 3rem;
`;

const Titulo = styled.h3`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 8px;
`;

const Subtitulo = styled.h4`
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 12px;
`;

const Descricao = styled.p`
  font-size: 1rem;
  color: #444;
  margin-bottom: 16px;
`;

const Imagem = styled.img`
  width: 310px;
  height: auto;
  border-radius: 8px;
  margin-bottom: 16px;
`;

const Botao = styled.button`
  background-color: #47332eff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #6b463aff;
  }
`;

const cardRecomenda = ({ titulo, subtitulo, descricao, imagem }) => {
  return (
    <Container>
      <Titulo>{titulo}</Titulo>
      <Subtitulo>{subtitulo}</Subtitulo>
      <Descricao>{descricao}</Descricao>
      <Imagem src={imagem} alt={titulo} />
      <div>
          <Botao>Saiba mais</Botao>
      </div>
    </Container>
  );
};

export default cardRecomenda;
