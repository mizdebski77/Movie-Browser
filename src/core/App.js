import { HashRouter, Route, Switch } from "react-router-dom";
import { Navigation } from "../common/Navigation/navigation";
import { Footer } from "../common/Footer/footer";
import { Movies } from "../features/Movies/movies";
import { People } from "../features/People/people";
import { Details } from "../features/Movies/MovieCard/MovieDetails.js/details";

function App() {
  return (
    <HashRouter basename="/movie-browser">
      <Navigation />
      <Switch>
        <Route exact path="/movies"><Movies /></Route>
        <Route path="/people"><People /></Route>
        <Route path="/movies/:id"><Details /></Route>
      </Switch>
      <Footer />
    </HashRouter>
  );
}

export default App;
