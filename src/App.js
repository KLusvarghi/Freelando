import './App.css';
import { Col, Container, Row } from 'react-grid-system';
import { FreelandoLogo } from './components/Icones/FreelandoLogo';
import { Card } from './components/Card/Card';
import { Estilos } from './components/EstilosGlobais/Estilos';
import { Header } from './components/Header/Header';
import { ProvedorTema } from './components/ProvedorTema/ProvedorTema';
import { Link } from './components/Link/Link';
import { Tipografia } from './components/Tipografia/Tipografia';
import { CampoTexto } from './components/CampoTexto/CampoTexto';
import { Botao } from './components/Botao/Botao';
import { ListaSuspensa } from './components/ListaSuspensa/ListaSuspensa';

function App() {
  const estadosBrasileiros = [
    { text: 'Acre', value: 'AC' },
    { text: 'Alagoas', value: 'AL' },
    { text: 'Amapá', value: 'AP' },
    { text: 'Amazonas', value: 'AM' },
    { text: 'Bahia', value: 'BA' },
    { text: 'Ceará', value: 'CE' },
    { text: 'Distrito Federal', value: 'DF' },
    { text: 'Espírito Santo', value: 'ES' },
    { text: 'Goiás', value: 'GO' },
    { text: 'Maranhão', value: 'MA' },
    { text: 'Mato Grosso', value: 'MT' },
    { text: 'Mato Grosso do Sul', value: 'MS' },
    { text: 'Minas Gerais', value: 'MG' },
    { text: 'Pará', value: 'PA' },
    { text: 'Paraíba', value: 'PB' },
    { text: 'Paraná', value: 'PR' },
    { text: 'Pernambuco', value: 'PE' },
    { text: 'Piauí', value: 'PI' },
    { text: 'Rio de Janeiro', value: 'RJ' },
    { text: 'Rio Grande do Norte', value: 'RN' },
    { text: 'Rio Grande do Sul', value: 'RS' },
    { text: 'Rondônia', value: 'RO' },
    { text: 'Roraima', value: 'RR' },
    { text: 'Santa Catarina', value: 'SC' },
    { text: 'São Paulo', value: 'SP' },
    { text: 'Sergipe', value: 'SE' },
    { text: 'Tocantins', value: 'TO' },
  ];
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
      <Container style={{ margin: '80px 0', width: '100vw' }}>
        <Row justify="center">
          <Col lg={6} ms={8} sm={12}>
            <Card>
              {/* Assim dizendo que o componente renderizado seja um h1, mas a variante (ou o estilo dele) seja de um h3 */}
              <Tipografia variante="h3" componente="h1">
                Crie seu cadastro
              </Tipografia>
              <Tipografia variante="body" componente="body">
                Crie seu perfil gratuitamente para começar a trabalhar com os
                melhores freelancers. Em seguida, você poderá dar mais detalhes
                sobre suas demandas e sobre sua forma de trabalho.{' '}
              </Tipografia>
              <Row>
                <Col lg={12} md={12} sm={12}>
                  <CampoTexto titulo="Nome Completo" />
                </Col>
              </Row>

              <Row>
                <Col lg={4} md={4} sm={4}>
                  <ListaSuspensa titulo="Estado" opcoes={estadosBrasileiros}/>
                </Col>
                <Col lg={8} md={8} sm={8}>
                  <CampoTexto titulo="Cidade" />
                </Col>
              </Row>
              <Row>
                <Col>
                  <CampoTexto titulo="Email" />
                </Col>
              </Row>
              <Row>
                <Col lg={6} md={6} sm={6}>
                  <CampoTexto titulo="Senha" />
                </Col>
                <Col lg={6} md={6} sm={6}>
                  <CampoTexto titulo="Repetir Senha" />
                </Col>
              </Row>
              <Row>
                <Col lg={6} md={6} sm={6}>
                  <Botao>Anterior</Botao>
                </Col>
                <Col lg={6} md={6} sm={6}>
                  <div style={{ textAlign: 'right' }}>
                    <Botao variante="secundario">Próxima</Botao>
                  </div>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    </ProvedorTema>
  );
}

export default App;
