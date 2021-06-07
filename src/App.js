import logo from './logo.svg';
import './App.css';
import LoginPage from './components/LoginPage'
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={LoginPage} exact />
      </Switch>
    </div>
  );
}

export default App;
