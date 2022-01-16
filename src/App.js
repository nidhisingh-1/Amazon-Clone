import "./Header";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
        <Switch>
        <Route path="/login">
            <Checkout/>
        </Route>
        <Route path="/checkout">
            <Checkout/>
        </Route>
          <Route path="/">
           
          <Home />
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
