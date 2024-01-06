import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import List from "./pages/List/List";
import Detail from "./pages/Detail/Detail";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/podcast/:id/episode/:episodeId" component={Detail} />
          <Route path="/podcast/:id" component={List} />
          <Route path="/" exact component={Home} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
