import './App.css';
import LoginPage from './components/LoginPage'
import { Route, Switch } from "react-router-dom";
import SignUpPage from "./components/SignUpPage"
import HomePage from "./components/HomePage"
import Forum from "./components/Forum";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path='/login' component={LoginPage} />
        <Route path='/signup' component={SignUpPage} />
        <Route path='/forum' component={Forum} />
      </Switch>
    </div>
  );
}

export default App;

