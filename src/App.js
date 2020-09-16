import React from 'react';
import Home from './Home'
import './App.css';
import SearchPage from './SearchPage'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <div className="App">

      <Router>
        <Switch>

          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>

        </Switch>

      </Router>
    </div>
  );
}

export default App;
