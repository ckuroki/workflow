import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import createHashHistory from 'history/createHashHistory';
import Main from './components/Main';
import './App.css';

const history = createHashHistory();

class App extends Component {
  render() {
    return (
    <Router history={history}>
      <div>
        <Route path="/" component={Main} />
      </div>
    </Router>
    );
  }
}

export default App;
