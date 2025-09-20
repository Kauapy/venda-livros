import React from "react";
import Input from "../Input/input";
import styled from "styled-components";
import { useState } from "react";
import { livros } from "./dadosPesquisa.jsx";

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

const LivroCard = styled.div`
  background-color: #fdfdfd;
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 16px;
  margin: 12px;
  width: 250px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.03);
  }
`;

const LivroImagem = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 12px;
`;

const LivroTitulo = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 8px;
  color: #333;
`;

const LivroInfo = styled.p`
  font-size: 0.95rem;
  margin: 4px 0;
  color: #555;

  strong {
    color: #222;
  }
`;

const LivrosContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
`;

const Pesquisa = () => {
  const [livrosPesquisados, setlivrosPesquisados] = useState([]);

  return (
    <PesquisaContainer>
      <Titulo>Já sabe por onde começar?</Titulo>
      <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
      <Input
        placeholder="Procure seu livro"
        onChange={(evento) => {
          const textoDigitado = evento.target.value;

          if (textoDigitado === "") {
            setlivrosPesquisados([]);
            return;
          }
          const resultadoPesquisa = livros
            .filter((livro) =>
              livro.nome
                .toLowerCase()
                .includes(evento.target.value.toLowerCase())
            )
            .filter(
              (livro, index, self) =>
                index === self.findIndex((l) => l.id === livro.id)
            );
          setlivrosPesquisados(resultadoPesquisa);
        }}
      />

      <LivrosContainer>
        {livrosPesquisados.map((livro) => (
          <LivroCard key={livro.id}>
            <LivroImagem src={livro.img} alt={livro.nome} />
            <LivroTitulo>{livro.nome}</LivroTitulo>
            <LivroInfo>
              <strong>Autor:</strong> {livro.autor}
            </LivroInfo>
            <LivroInfo>
              <strong>Categoria:</strong> {livro.categoria}
            </LivroInfo>
            <LivroInfo>
              <strong>Preço:</strong> R$ {livro.preco}
            </LivroInfo>
          </LivroCard>
        ))}
      </LivrosContainer>
    </PesquisaContainer>
  );
};

export default Pesquisa;
