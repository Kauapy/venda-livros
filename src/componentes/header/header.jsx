import "./header.css";
import logo from "../../imgs/logo.svg";
import perfil from "../../imgs/perfil.svg";
import carrinho from "../../imgs/sacola.svg";
import styled from "styled-components";

const textoOpcoes = ["Categorias", "Favoritos", "Minha Estante"];
const icones = [perfil, carrinho];

const Icone = styled.li`
  margin-right: 40px;
  width: 25px;
`;

const Icones = styled.ul`
  display: flex;
  align-items: center;
  font-weight: 600;
`

const OpcaoAtivo = styled.li`
  min-width: 120px;
  font-size: 18px;
  letter-spacing: 0.7px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  padding: 0 5px;
  cursor: pointer;
`

const ImgLogo = styled.img`
  margin-right: 10px;
`

function header() {
  return (
    <div className="app-header">
      <div className="logo">
        <ImgLogo src={logo} alt="logo"></ImgLogo>
        <p>
          <b>Books</b>Seal
        </p>
        <Icones>
          {textoOpcoes.map((texto) => {
            return (
              <OpcaoAtivo>
                <p>{texto}</p>
              </OpcaoAtivo>
            );
          })}
        </Icones>
        <Icones>
          {icones.map((icone) => {
            return (
              <Icone>
                <img src={icone} alt="icone"></img>
              </Icone>
            );
          })}
        </Icones>
      </div>
    </div>
  );
}

export default header;
