import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom'

import Header from './Components/Header'
import Home from './Pages/Home'
import EditPlant from './Pages/EditPlant'
import AddPlant from './Components/AddPlant'

function App() {
  return (
    <div className="App">
      
      <Router>
        <Header/>
        <Route exact path = "/">
          <Redirect to = "/home"/>
        </Route>
        <Route exact path = "/home" component = {Home}/>
        {/* <Route path = "/edit" component = {EditPlant}/> */}
        <Route path = "/add" component = {Home}/>
      </Router>
    </div>
  );
}

export default App;
