import React from 'react';
import './Css/App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';

function App() {
  return (
    <div className="app">
      <Router>
        <Header />

        <Switch>
          <Route path="/search">{/* <SearchPage /> */}</Route>
          <Route path="/">{/* <Home /> */}</Route>
        </Switch>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
