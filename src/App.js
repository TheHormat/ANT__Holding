import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Partners from "./pages/Partners";
import IconCard from "./pages/IconCard";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  const selector = useSelector((state) => state);
  console.log(selector);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/menu" exact component={Menu} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/partners" exact component={Partners} />
          <Route path="/iconcard" exact component={IconCard} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
