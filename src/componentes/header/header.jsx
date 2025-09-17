import React from "react";
import "./header.css";
import logo from "../../imgs/logo.svg";
import perfil from "../../imgs/perfil.svg";
import carrinho from "../../imgs/sacola.svg";

const textoOpcoes = ["Categorias", "Favoritos", "Minha Estante"]
const icones = [perfil, carrinho]

function header() {
  return (
    <div className="app-header">
      <div className="logo">
        <img src={logo} alt="logo" className="logo-img"></img>
        <p>
          <b>Books</b>Seal
        </p>
        <ul className="opcoes">
          {textoOpcoes.map((texto) => {
            return <li className="opcao-ativo"><p>{texto}</p></li>
          })}
        </ul>
        <ul className="icones">
          {icones.map((icone) => {
            return <li className="icone"><img src={icone}></img></li>
          })}
        </ul>
      </div>
    </div>
  );
}

export default header;
