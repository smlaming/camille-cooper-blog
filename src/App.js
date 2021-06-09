import logo from "./logo.svg";
import "./App.css";
import LoginPage from "./components/LoginPage";
import Store from "./components/StorePage";
import Cart from "./components/CartPage";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={LoginPage} exact />
        <Route path="/" component={Store} exact />
        <Route path="/myCart" component={Cart} />
      </Switch>
    </div>
  );
}

export default App;
