import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Blogs from "./components/Blog/Blogs";
import TwoYearsAtIITB from "./components/Blog/TwoYearsAtIITB"
import Experience from "./components/Experience/Experience";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [load, upadateLoad] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      upadateLoad(false);
    }, 1200);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/project" component={Projects} />
          <Route path="/about" component={About} />
          <Route path="/experience" component={Experience} />
          <Route path="/blogs" component={Blogs} />
          <Route path="/blog/my-2-years-at-IITB" component={TwoYearsAtIITB}/>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
