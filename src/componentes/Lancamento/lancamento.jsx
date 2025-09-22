import React from "react";
import { livros } from "./dadosLancamentos.jsx";

const lancamento = () => {
  return (
    <section>
      {livros.map((livro) => (
        <img key={livro.id} src={livro.img} alt={livro.nome} />
      ))}
    </section>
  );
};

export default lancamento;
