import React, { Component } from "react";

// Pages
import Jumbotron from "./Header/Jumbotron";
import Surah from "./Container/Surah";
import Ayat from "./Container/Ayat";

// Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./Header/Nav";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Nav />
          <Jumbotron />
          <Switch>
            {/* Surah */}
            <Route path="/" exact component={Surah} />
            {/* Detail Ayat Per Surah */}
            <Route path="/surah/:nomorID" component={Ayat} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App
