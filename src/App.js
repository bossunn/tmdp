import { Route, Switch } from 'react-router-dom';
import './App.css';
import DetailPage from './pages/DetailPage';
import Home from './pages/Home';
import Search from './pages/Search';

function App() {
  return (
    <div className="App">      
      {/* <Home></Home> */}
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/:movieID" exact component={DetailPage} />
        <Route path="/search/search" component={Search} />
      </Switch>
    </div>
  );
}

export default App;
