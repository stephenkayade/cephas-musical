import React, { Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Master from './components/Master';
import Home from './components/public/Home'

const App = () => {
  return (
    <>
      <Router>
        <Switch>
        <Route path="/" component={Home} exact />
        </Switch>
      </Router>
    </>
  );
}

export default App;
