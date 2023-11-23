import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          {/* <Route path="/episodes/:id" component={<></>} /> */}
        </Switch>
      </Router>
    </>
  );
}

export default App;
