import './App.css';
import Search from "./components/Search/Search";
import CurrentWeather from './components/Current-Weather/Current-Weather';

function App() {

  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  };

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      <CurrentWeather />
    </div>
  );
}

export default App;
