import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Price from "./components/Price/Price";
import Projects from "./components/Projects/Projects";
import { Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header className={Header} />

        <div className="Pages">
          <Route path="/home" component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/price" component={Price} />
          <Route path="/about" component={About} />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
