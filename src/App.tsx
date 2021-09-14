import React from "react";
import "./App.css";
import { LoginForm, RegisterForm, ToDo, Logo, NotFound } from "./components";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Logo />
      <Switch>
        <Route exact path="/" component={LoginForm} />
        <Route exact path="/register" component={RegisterForm} />
        <Route exact path="/todo" component={ToDo} />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
