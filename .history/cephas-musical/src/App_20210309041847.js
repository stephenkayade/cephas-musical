import React, { Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Master from './components/Master';
import Home from './components/public/Home'
const Homepage = React.lazy(() => import('./components/public/Home'));

const loading = () => {

  <div className="row" style={{ height: "100vh", width: "100%" }}>

    <div className="col-md-3 text-center mx-auto my-auto">
      {' '}
      <Ellipsis
        color="#2d3d4d"
        size={80}
      />
    </div>

  </div>


}

const App = () => {
  return (
   
      <Router>
        <Suspense fallback={loading}>

          <Switch>
            <Route path="/" component={Home} exact />
          </Switch>
      </Router>
    
  );
}

export default App;
