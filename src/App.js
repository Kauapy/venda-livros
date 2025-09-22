import Header from './componentes/header/header';
import styled from 'styled-components';
import Pesquisa from './componentes/Pesquisa/pesquisa';
import Lancamento from './componentes/Lancamento/lancamento';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to right, #3e2723, #795548);
`;

const AppHeader = styled.header`
  background-color: #ffffff;
  padding: 20px;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  return (
    <AppContainer>
      <AppHeader>
        <Header />
      </AppHeader>
      <Lancamento/>
      <Pesquisa/>
    </AppContainer>
  );
}

export default App;