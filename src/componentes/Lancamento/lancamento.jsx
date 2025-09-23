import React from "react";
import styled from "styled-components";
import { livros } from "./dadosLancamentos.jsx";
import { Titulo } from "../Titulo/titulo";

const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
  padding: 40px;
  margin-top: 22rem;
`;

const LivroImg = styled.img`
  width: 180px;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const Lancamento = () => {
  return (
    <Section>
      <Titulo>🕮 ÚLTIMOS LANÇAMENTOS</Titulo>
      {livros.map((livro) => (
        <LivroImg key={livro.id} src={livro.img} alt={livro.nome} />
      ))}
    </Section>
  );
};

export default Lancamento;