import './App.css';
import Home from './Home';
import { weatherApi } from './api/weatherapi';

function App() {
  console.log(weatherApi("Paris"));
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
