import './App.css';
import WeekContainer from './components/WeekContainer'
import CitySelector from './components/CitySelector'
import 'bootstrap/dist/css/bootstrap.min.css';
import {api} from './components/Keys'
import UseFetch from './components/Hooks/UseFetch'
import {Container} from 'react-bootstrap';
import WeatherList from './components/WeatherList'

function App() {

  const {data, error, isLoading, setUrl} = UseFetch();

  const getContent = () => {
    console.log(data + " DATA")
    if(error) return <h2>Error when fetching: {error}</h2>
    if(!data && isLoading) return <h2>LOADING...</h2>
    if(!data) return null;
    return <WeatherList weathers={data.list} />
  };

  return (
    <div >
     <Container className="App">
        <CitySelector onSearch={(city) => setUrl(`${api.base}forecast?q=${city}&units=metric&APPID=${api.key}`)} />
        {/* conditionally render  */}
      {getContent()}
    </Container>
    </div>
  );
}

export default App;
