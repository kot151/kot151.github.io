import React from "react";
import style from "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Contacts from "./components/Contacts/Contacts";
import Price from "./components/Price/Price";
import Projects from "./components/Projects/Projects";
import { Route, BrowserRouter, Redirect } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className={style.pages}>
          <Route path="/home" exact component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/price" component={Price} />
          <Route path="/contacts" component={Contacts} />
          <Redirect from='/' to='/home'/>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
