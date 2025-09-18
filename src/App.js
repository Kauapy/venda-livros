import Header from './componentes/header/header';
import styled from 'styled-components';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002F52 35%, #326589);
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
    </AppContainer>
  );
}

export default App;