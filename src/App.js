
import './App.css';
import MovieList from './Components/MovieList';
import 'bootstrap/dist/css/bootstrap.min.css';
import Adding from './Components/Adding';
import Search from './Components/Search'



function App() {

  return (
    <div className="App">
     <Search/>
     <Adding/>
     <MovieList/>
    </div>
  );
}

export default App;
