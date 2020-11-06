// import logo from "./logo.svg";
import "./App.scss";
import HomeScreen from "./screens/home";
import DetailMovieScreen from "./screens/detail";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignIn from "./screens/signIn";
import SignUp from "./screens/signUp";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { connect, useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { createAction } from "./redux/actions";
import { SIGN_IN } from "./redux/types/types";

function App() {
  const dispatch = useDispatch();
  function getCredentialssFromLocal() {
    const credentialsStr = localStorage.getItem("creadentials");
    if (credentialsStr) {
      dispatch(createAction(SIGN_IN, JSON.parse(credentialsStr)));
    }
  }
  useEffect(() => {
    getCredentialssFromLocal();
    console.log(getCredentialssFromLocal());
  }, []);
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Switch>
        <Route path="/" exact component={HomeScreen} />
        <Route path="/detail/:movieID" exact component={DetailMovieScreen} />
        <Route path="/sign-in" exact component={SignIn} />
        <Route path="/sign-up" exact component={SignUp} />
      </Switch>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default connect()(App);
