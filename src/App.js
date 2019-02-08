import React, { Component } from "react";
// import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header";

import Home from "./pages/home.jsx";
import Welcome from "./pages/welcome.jsx";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <div className="container mt-3">
            <Switch>
              <Route exact path="/" component={Home} />
              {/* <Route exact path="/welcome/:name" component={Welcome} /> */}
              <Route
                exact
                path="/welcome/:name"
                render={() =>
                  1 ? (
                    <Route component={Welcome} />
                  ) : (
                    <Route render={() => <h2>404 - Page not found </h2>} />
                  )
                }
              />
              <Route render={() => <h2>404 - Page not found </h2>} />
            </Switch>
          </div>
          <br />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
