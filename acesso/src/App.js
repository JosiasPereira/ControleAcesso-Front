import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Routes from "./routes";


const App = () => <Routes />;
/**
 function App() {
  // <Route path="/home" component = {Timeline}/>
  return (
    <BrowserRouter>
        <Switch>
          <Route path="/" exact component = {Login}/> 
          <Route path="/home" component = {Home}/>   
          <Route path="*" component = {Login}/>        
        </Switch>
      </BrowserRouter>
    
  );
}
 */



export default App;
