import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./components/HomePage";
import About from "./components/About";
import MoviesPage from "./components/MoviesPage";
import moviesListType from "./components/MoviesType";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul className="flex justify-center">
            <li className="mr-10 mt-4 text-3xl ">
              <Link to="/">Home</Link>
            </li>
            <li className="mr-10 mt-4 text-3xl ">
              <Link to="/top-movies">Top Movies</Link>
            </li>
            <li className="mr-10 mt-4 text-3xl ">
              <Link to="/top-tv-shows">Top TV Shows</Link>
            </li>
            <li className="mr-10 mt-4 text-3xl ">
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <h1 className="text-6xl text-center mb-10 mt-10">Movies App</h1>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/top-movies">
            <MoviesPage type={moviesListType.topMovies} />
          </Route>
          <Route path="/top-tv-shows">
            <MoviesPage type={moviesListType.topTVShows} />
          </Route>
          <Route path="/">
            <HomePage moviesListType={moviesListType}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
