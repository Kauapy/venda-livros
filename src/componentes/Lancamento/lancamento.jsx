import styled from "styled-components";
import { livros } from "./dadosLancamentos.jsx";
import { Titulo } from "../Titulo/titulo";
import CardRecomenda from "../CardRecomenda/cardRecomenda.jsx";


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
      <CardRecomenda
        titulo="Talvez você se interesse por..."
        subtitulo="O Poder do Hábito"
        descricao="Um livro que explora a ciência por trás da formação de hábitos e como podemos transformá-los para melhorar nossas vidas."
        imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHBcp1EMmJpfUbS0ib9-7P4mglKi4kzisCCQ&s"
      />
    </Section>
  );
};

export default Lancamento;
