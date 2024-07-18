import './App.css';
import { Col, Container, Row } from 'react-grid-system';
import { FreelandoLogo } from './components/Icones/FreelandoLogo';
import { Card } from './components/Card/Card';
import { Estilos } from './components/EstilosGlobais/Estilos';
import { Header } from './components/Header/Header';
import { ProvedorTema } from './components/ProvedorTema/ProvedorTema';
import { Link } from './components/Link/Link';
import { Tipografia } from './components/Tipografia/Tipografia';

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
        {/* Assim dizendo que o componente renderizado seja um h1, mas a variante (ou o estilo dele) seja de um h3 */}
        <Tipografia variante="h3" componente="h1">Crie seu cadastro</Tipografia>
        <Tipografia variante="body" componente="body">Crie seu perfil gratuitamente para começar a trabalhar com os melhores freelancers. Em seguida, você poderá dar mais detalhes sobre suas demandas e sobre sua forma de trabalho. </Tipografia>
      </Card>
    </ProvedorTema>
  );
}

export default App;
