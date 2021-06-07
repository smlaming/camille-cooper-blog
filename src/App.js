import logo from './logo.svg';
import './App.css';
import LoginPage from './components/LoginPage'
import { Route, Switch } from "react-router-dom";
import React, { Fragment } from "react";
import Header from "./components/Header"
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/About" />
        <Route path="/Home" />
        <Route path="/Account" component={LoginPage}/>
        <Route path="/Store" />
        <Route path="/Blog" />
        <Route path="/Forum" />
        <Route path='/login' component={LoginPage} />
        <Route path="/ShoppingCart" />
      </Switch>
    </div>
  );
}

const Home = () => (
  <Fragment>
    <h1 style={{marginTop: 160}}>Welcome!!!</h1>

  </Fragment>
);


export default App;
