import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./pages/main";
import Navbar from "./pages/navbar";
import RestApi from "./pages/RESTapi";
import LoginComponent from "./pages/components/loginComponent";
import "./css/style.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <LoginComponent />
        <Route path="/" exact component={Main} />
        <Route path="/Api" exact component={RestApi} />
      </Router>
    </div>
  );
}

export default App;
