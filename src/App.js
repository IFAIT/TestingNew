import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./pages/main";
import Navbar from "./pages/navbar";
import RestApi from "./pages/RESTapi";
import "./css/style.css";
function App() {
  return (
    <div className="App">
      {/* <h1>{process.env.NODE_ENV}</h1> */}
      <Router>
        <Navbar />
        <Route path="/" exact component={Main} />
        <Route path="/Api" exact component={RestApi} />
        {/* <Router path='login' exact component={} */}
      </Router>
    </div>
  );
}

export default App;
