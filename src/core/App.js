import { HashRouter, Route, Switch } from "react-router-dom";
import { Navigation } from "../common/Navigation/navigation";
import { Footer } from "../common/Footer/footer";
import { Movies } from "../features/Movies/movies";
import { People } from "../features/People/people";

function App() {
  return (
    <HashRouter basename="/movie-browser">
      <Navigation />
      <Switch>
        <Route path="/movies"> <Movies /></Route>
        <Route path="/people"><People /></Route>
      </Switch>
      <Footer />
    </HashRouter>
  );
}

export default App;
