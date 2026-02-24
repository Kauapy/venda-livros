import Header from '../componentes/header/header';
import styled from 'styled-components';
import Pesquisa from '../componentes/Pesquisa/pesquisa';


const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to right, #3e2723, #795548);
`;


function Favoritos() {
  return (
    <AppContainer>
      <Pesquisa/>
    </AppContainer>
  );
}

export default Favoritos;