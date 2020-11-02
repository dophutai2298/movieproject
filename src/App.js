// import logo from "./logo.svg";
import "./App.scss";

import HomeScreen from "./screens/home";
import DetailMovieScreen from "./screens/detail";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignIn from "./screens/signIn";
import SignUp from "./screens/signUp";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomeScreen} />
        <Route path="/detail/:movieID" exact component={DetailMovieScreen} />
        <Route path="/sign-in" exact component={SignIn} />
        <Route path="/sign-up" exact component={SignUp} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
