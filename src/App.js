import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ListBarang from "./barang/ListBarang";

function App() {
  return (
    <Router>
      <div>
          <Switch>
            <Route exact path="/">
              <h1>Hello, world!</h1>
            </Route>
            <Route exact path="/barang">
              <ListBarang />
            </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;