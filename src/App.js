import { Route, Switch } from 'react-router-dom';
import './App.css';
import DetailPage from './pages/DetailPage';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">      
      {/* <Home></Home> */}
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/:movieID" component={DetailPage} />
      </Switch>
    </div>
  );
}

export default App;
