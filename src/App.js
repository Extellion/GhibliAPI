import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";
import Movies from "./views/Movies";
import Movie from "./views/Movie";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={Movies} />
        <Route exact path="/movie/:id" render={(routeProps) => <Movie {...routeProps} />} />
      </div>
    </BrowserRouter>
  );
}

export default App;
