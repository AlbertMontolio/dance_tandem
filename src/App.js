import React from 'react';
import logo from './logo.svg';
import {Route, Switch, Link, BrowserRouter as Router} from 'react-router-dom'

import './App.css';
import LandingPage from './pages/LandingPage'
import SelectFiguresPage from './pages/select_figures_page/SelectFiguresPage'
import Matches from './pages/matches/Matches'

function App() {
  return (
    <Router>
      <Route path='/' exact component={LandingPage} />
      <Route exact path='/select_figures/:dance' component={SelectFiguresPage} />
      <Route path='/matches' component={Matches} />
    </Router>
  );
}

export default App;
