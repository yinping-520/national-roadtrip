import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_PARKS } from "./utils/queries";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import './css/scroll.css';
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Destinations from "./pages/Destinations";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Mainpage from "./pages/Mainpage";
import Journey from "./components/Journey";
import Shop from "./pages/Shop";
import Trips from "./pages/Trips";
import Park from "./pages/Park";
import ScrollToTop from "./components/ScrollToTop";
import up from "./components/assets/up-arrow.jpg";
import "./components/css/mainpage.css";

function Main() {
  const { loading, data } = useQuery(QUERY_PARKS);
  const parks = data?.parks || [];

  const [scrollActive, setScrollActive] = useState(false);
  const [progessHeight, setProgressHeight] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", function () {
      const pos = window.scrollY;
      const dh = document.body.scrollHeight;
      const wh = window.innerHeight;
      const scrollPercent = (pos / (dh - wh)) * 100;
      setProgressHeight(scrollPercent);
      setScrollActive(this.window.scrollY > 350);
    });
  }, []);

  if (loading) {
    return <div>Loading ... </div>;
  }
  return (
    <div>
      <Router>
        <ScrollToTop />
        <div>
          <div id="progressbar" style={{ height: `${progessHeight}%` }}></div>
          <a href="#top">
            <img id="up-arrow" className={scrollActive && "active"} src={up} />
          </a>
          <Header parks={parks} />
          <div>
            <Route exact path="/">
              <Mainpage parks={parks} />
            </Route>
            <Route exact path="/destinations">
              <Destinations parks={parks} />
            </Route>
            <Route exact path="/journey">
              <Journey />
            </Route>
            <Route exact path="/shop">
              <Shop />
            </Route>
            <Route exact path="/trips">
              <Trips />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
            {/* <Route exact path='/users/:id'>
              <Profile />
            </Route> */}
            <Route exact path="/park/:parkId">
              <Park parks={parks} />
            </Route>
          </div>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default Main;
