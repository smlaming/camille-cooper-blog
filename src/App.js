import './App.css';
import LoginPage from './components/LoginPage'
import { Route, Switch } from "react-router-dom";
import React, { Fragment} from "react";
import Header from "./components/header/Header"
import SignUpPage from "./components/SignUpPage"
import HomePage from "./components/HomePage"
import Forum from "./components/Forum";
// import Account from "./components/HomePage"
import Blog from "./components/blog/bloglist"
import BlogPost from "./components/blog/blogpost"
import Account from "./components/AccountPage"


function App() {
  return (
    <div className="App" style={{ position: "relative" }}>
      <Header></Header>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" />
        <Route path="/account" component={Account} />
        <Route path="/store" />
        <Route path="/blog" component={Blog}/>
        <Route path="/blog_post" component={BlogPost}/>
        <Route path="/forum" component={Forum}/>
        <Route path="/shopping_cart" />
        <Route path='/login' component={LoginPage} />
        <Route path='/sign_up' component={SignUpPage} />
        <Route path='/forum' component={Forum} />
      </Switch>
    </div>
  );
}

const Home = () => (
  <Fragment>
    <h1 style={{ marginTop: 160 }}>Welcome!</h1>
  </Fragment>
);


export default App;

