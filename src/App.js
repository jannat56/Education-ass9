import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from './components/Home/Home';
import About from './components/About/About';
import Service from './components/Service/Service';
import Contact from './components/Contact/Contact';
import NotFound from './components/NotFound/NotFound';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Header from './components/Header/Header';
import Nabvar from './components/Navbar/Nabvar';
import { useEffect } from 'react';
import Footer from './components/Footer/Footer';


function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
      <Nabvar></Nabvar>
      <Header></Header>
      <Switch>
      <Route exact path="/">
        <Home></Home>
      </Route>
        <Route path="/home">
        <Home></Home>
      </Route>
        <Route path="/about">
        <About></About>
      </Route>
        <Route path="/service">
        <Service></Service>
      </Route>
      <Route path="/contact">
        <Contact></Contact>
      </Route>
      <Route exact path="*">
        <NotFound></NotFound> 
      </Route>
      </Switch>
      <Footer></Footer>
      </BrowserRouter>
     
     
     
    </div>
  );
}

export default App;
