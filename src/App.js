import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MetricsGrid from './components/metrics';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <MetricsGrid />
      </BrowserRouter>

    </div>
  );
}

export default App;
