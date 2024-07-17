import './App.css';
import { Col, Container, Row } from 'react-grid-system';
import { FreelandoLogo } from './components/Icones/FreelandoLogo';
import { Card } from './components/Card/Card';
import { Estilos } from './components/EstilosGlobais/Estilos';
import { Header } from './components/Header/Header';
import { ProvedorTema } from './components/ProvedorTema/ProvedorTema';
import { Link } from './components/Link/Link';

function App() {
  return (
    <ProvedorTema>
      <Estilos />
      <Header>
        <Container>
          <Row>
            <Col>
              <FreelandoLogo />
            </Col>
            <Col style={{ textAlign: 'right' }}>
              <Link>Login</Link>
            </Col>
          </Row>
        </Container>
      </Header>
      <Card>
        <h1>Freelando</h1>
      </Card>
    </ProvedorTema>
  );
}

export default App;
