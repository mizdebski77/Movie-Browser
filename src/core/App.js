import { HashRouter } from "react-router-dom";
import { Navigation } from "../common/Navigation/navigation";
import { Footer } from "../common/Footer/footer";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Footer />
    </HashRouter>
  );
}

export default App;
