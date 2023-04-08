import { HashRouter, Route, Switch } from "react-router-dom";
import { Navigation } from "../common/Navigation/navigation";
import { Footer } from "../common/Footer/footer";
import { Movies } from "../features/Movies/movies";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Switch>
        <Route exact path="/"> <Movies /></Route>
      </Switch>
      <Footer />
    </HashRouter>
  );
}

export default App;
