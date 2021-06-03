import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Detailed from "./pages/Detailed";
import "./styles/reset.scss";
import "./styles/styles.scss";


function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/games/:id" component={Detailed} />
    </Router>
  );
}



export default App;