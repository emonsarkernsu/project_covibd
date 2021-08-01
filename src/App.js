import logo from './logo.svg';
import './App.css';
import './index.css'
import NavBar from  './NavBar/index';
import SideBar from './SideBar';
import Home from './Pages/HomePage';
import Services from './Pages/ServicesPage';
import Hospital from './Pages/HospitalPage';
import React, {useState, useEffect} from 'react';
import Signin from './Signin'
import Signout from './Signout'
import Employee from './Employee'

import { BrowserRouter as Router, NavLink, Route, Switch } from "react-router-dom";
import Vaccine from './Pages/VaccinePage';
const App = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>

      <Router>
        <SideBar isOpen={isOpen} toggle={toggle}/>
        <NavBar toggle={toggle}/>
      <Switch>
        <Route exact path="/home"><Home/></Route>
        <Route exact path="/services"><Services/></Route>
        <Route exact path="/hospital"><Hospital/></Route>
        <Route exact path="/vaccine"><Vaccine/></Route>
      </Switch>

      </Router>

      </>
  );
 };



export default App;
