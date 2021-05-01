import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Home from './pages/home/Home';
import Rockets from './pages/rockets/Rockets';
import Launches from './pages/launches/Launches';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Switch>
      <Route exact path="/launches" component={Launches}/>
        <Route exact path="/rockets" component={Rockets}/>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/" component={App}/>
      </Switch>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
