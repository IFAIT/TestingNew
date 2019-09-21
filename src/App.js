import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./pages/main";
import Navbar from "./pages/navbar";
import RestApi from "./pages/RESTapi";
<<<<<<< HEAD
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
=======
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
>>>>>>> 5696d6003555631175b5a138468599ee30b0750e
      </Router>
    </div>
  );
}

export default App;
