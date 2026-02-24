import Header from '../componentes/header/header';
import styled from 'styled-components';
import Pesquisa from '../componentes/Pesquisa/pesquisa';
import Lancamento from '../componentes/Lancamento/lancamento';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to right, #3e2723, #795548);
`;


function Home() {
  return (
    <AppContainer>
      <Pesquisa/>
      <Lancamento/>
    </AppContainer>
  );
}

export default Home;