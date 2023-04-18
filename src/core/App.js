import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import { Navigation } from "../common/Navigation/navigation";
import { Footer } from "../common/Footer/footer";
import { Movies } from "../features/Movies/movies";
import { People } from "../features/People/people";
import { Details } from "../features/Movies/MovieCard/MovieDetails.js/details";
import { Profile } from "../features/People/PeopleCard/Profile/profile";


function App() {
  return (
    <HashRouter >
      <Navigation />
      <Switch>
        <Route exact path="/movies"><Movies /></Route>
        <Route path="/people"><People /></Route>
        <Route path="/movies/:id"><Details /></Route>
        <Route path="/profile/:id"><Profile /></Route>
        <Route path="/"><Redirect to="movies" /> </Route>

      </Switch>
      <Footer />
    </HashRouter>
  );
}

export default App;
