import React, { useEffect } from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/wowjs/css/libs/animate.css";
import "../node_modules/wowjs/dist/wow.min.js"
import 'react-toastify/dist/ReactToastify.css';
import "aos/dist/aos.css";
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
import ScrollToTop from './components/ScrollToTop';
import SphereComp from './SphereComp';
import SphereCompWallet from './SphereCompWallet';
import Document from './Document';
import AOS from "aos";
import TermsAndPolicy from './TermsAndPolicy';

const App = () => {

  useEffect(() => {
    AOS.init({ duration: 2000});
}, []);

  return (
    <>
      <ScrollToTop />
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/hyperswap" component={Hyperswap} />
        <Route exact path="/spherecomp" component={SphereComp} />
        <Route exact path="/spheriumwallet" component={SphereCompWallet} />
        <Route exact path="/team" component={Team} />
        <Route exact path="/document" component={Document} />
        <Route exact path="/termandpolicy" component={TermsAndPolicy} />
        <Route exact path="/contactus" component={ContactUS} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </>
  );
}

export default App

