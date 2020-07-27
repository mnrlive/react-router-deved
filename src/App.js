import React from 'react';
import './App.css';
import Nav from "./Nav";
import About from "./About";
import Shop from "./Shop";
import UserDetails from "./UserDetails";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import User from './UserDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/About" component={About} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/shop/:id" component={UserDetails} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
);

export default App;
