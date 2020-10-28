import React from 'react';
import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Shop from './components/Shop';
import Home from './components/Home';
import EmployeeDetail from './components/EmployeeDetail';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App(){
  return(
    <div className="App">
          <Router>
            <Nav/> 
            <Switch>
              <Route path="/" exact component={Home}></Route>
              <Route path="/About" component={About}></Route>
              <Route path="/Shop" exact component={Shop}></Route>
              <Route path="/Home" component={Home}></Route>
              <Route path="/Shop/:hhh" component={EmployeeDetail}></Route>
            </Switch>
          </Router>    
    </div>
  );
}

export default App;