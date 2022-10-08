
//components
import Card from './components/Card/Card';
import Chart from './components/Chart/Chart';
import CountryPicker from './components/CountryPicker/CountryPicker';

//stylesheet
import './App.css';

function App() {
  return (
    <div className="App">
      <Card />
      <Chart />
      <CountryPicker />
    </div>
  );
}

export default App;
