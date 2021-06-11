import logo from "./logo.svg";
import "./App.css";
import LoginPage from "./components/LoginPage";
import Store from "./components/store/StorePage";
import Cart from "./components/store/CartPage";
import { Route, Switch } from "react-router-dom";
import React, { Fragment } from "react";
import Header from "./components/header/Header";
import SignUpPage from "./components/SignUpPage";
//import HomePage from "./components/HomePage";
import Forum from "./components/Forum";
// import Account from "./components/HomePage"
import Blog from "./components/blog/bloglist";
import BlogPost from "./components/blog/blogpost";
import Account from "./components/AccountPage";
import Footer from "./components/header/Footer";
import Home from "./components/home/HomePage";
import AboutPage from "./components/AboutPage";

function App() {
  return (
    <div className="App" style={{ position: "relative", minHeight: "100vh" }}>
      <Header></Header>
      <div style={{ paddingBottom: 200 }}>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/About" component={AboutPage} exact/>
          <Route path="/Account" component={Account} />
          <Route path="/Store" component={Store} />
          <Route path="/Blog" component={Blog} />
          <Route path="/BlogPost" component={BlogPost} />
          <Route path="/Forum" component={Forum} />
          <Route path="/myCart" component={Cart} />
          <Route path="/ShoppingCart" component={Cart} />
          <Route path="/login" component={LoginPage} />
          <Route path="/sign_up" component={SignUpPage} />
          <Route path="/forum" component={Forum} />
        </Switch>
      </div>
      <Footer></Footer>
    </div>
  );
}



export default App;
