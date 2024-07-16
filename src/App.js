import './App.css';
import { Card } from './components/Card/Card';
import { Estilos } from './components/EstilosGlobais/Estilos';

function App() {
  return (
    <div>
      <Estilos />
      <Card>
        <h1>Freelando</h1>
      </Card>
    </div>
  );
}

export default App;
