import './App.css';
import Nav from './Nav';
import Hero from'./Hero';
import Latest from './Latest'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
  <Router>
    <div>
      <Nav/>
      <Switch>
      <Route path="/" exact component={Hero}/>
        <Route path="/latest">
          <Latest/>
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;

