import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
import Master from './components/Master';

const App = () => {
  return (
    <>
      <Router>
        <Switch>
        <Route path="/" component={Homepage} exact />
        </Switch>
      </Router>
    </>
  );
}

export default App;
