import React from "react";
import SignUp from "./Components/SignUp";
import SignIn from "./Components/SignIn";
//import Footer from "./Components/Footer";
//import BlogPost from "./Components/BlogPost";
//import Navbar from "./Components/Navbar";
//import Home from "./Components/Home";
//import { Route, Switch } from "react-router-dom";
//import './App.css';

function App () {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/signUp" component={SignUp}></Route>
        <Route path="/singIn" component={SignIn}></Route>
        <Route path="/blogpost" component={BlogPost}></Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
