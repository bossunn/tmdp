import { Route, Switch } from 'react-router-dom';
import './App.css';
import DetailPage from './pages/DetailPage';
import Home from './pages/Home';
import Movie from './pages/Movie';
import Search from './pages/Search';
import TV from './pages/TvPage';

function App() {
  return (
    <div className="App">      
      {/* <Home></Home> */}
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/tv" exact component={TV} />
        <Route path="/movie" exact component={Movie} />
        <Route path="/:movieID" exact component={DetailPage} />
        <Route path="/search/search" component={Search} />
       
      </Switch>
    </div>
  );
}

export default App;
