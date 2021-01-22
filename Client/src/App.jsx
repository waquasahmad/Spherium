import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Redirect, Route, Switch } from 'react-router-dom';
import ContactUS from './ContactUS';
import Home from './Home';
import Team from './Team';
import Header from './components/Header';
import "./resources/sass/app.scss";
import "./resources/sass/_base.scss";
// import "./resources/sass/utilities/_variables.scss";
import "./resources/sass/_section1.scss";
import "./resources/sass/_section2.scss";
import "./resources/sass/_nav.scss";
import Footer from './components/Footer';
import Hyperswap from './Hyperswap';

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/team" component={Team} />
        <Route exact path="/contactus" component={ContactUS} />
        <Route exact path="/hyperswap" component={Hyperswap} />
        <Redirect to="/" />
      </Switch>
      <Footer/>
    </>
  )
}

export default App

