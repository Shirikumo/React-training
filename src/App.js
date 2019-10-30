import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Chat from './containers/Chat';
import Login from './containers/Login';

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-light bg-light d-flex justify-content-between">
          <Link to="/">Connexion</Link>
          <Link to="/tchat">Tchat</Link>
        </nav>

        <Switch>
          <Route path="/" exact>
            <Login />
          </Route>
          <Route path="/tchat">
            <Chat />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
