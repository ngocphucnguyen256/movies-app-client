import './App.css';
import HomePage from './components/HomePage'
import About from './components/About'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'


function App() {
  return (
    <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/users">
          <HomePage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
