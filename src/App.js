import "./Header";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route path="/checkout">
            <Header/>
          <h1>Hi I am checkout</h1>
        </Route>
          <Route path="/">
            <Header/>
          <Home />
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
