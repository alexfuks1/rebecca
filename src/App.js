import React from "react";
import { BrowserRouter as Router, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import About from "./pages/About";


const App = () => {
  return (
    <Router>
      <Header />
      <Route exact path="/" component={Home} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/shop" component={Shop} />
      <Route exact path="/about" component={About} />
      <Footer />
    </Router>
  );
};

export default App;
