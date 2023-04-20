import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
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
      <Routes>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/people" element={<People />}></Route>
        <Route path="/movies/:id" element={<Details />}></Route>
        <Route path="/profile/:id" element={<Profile />}></Route>
        <Route path={"*"} element={<Navigate replace to="/movies" />}> </Route>
      </Routes >
      <Footer />
    </HashRouter >
  );
}

export default App;
