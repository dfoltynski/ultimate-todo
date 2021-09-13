import React from "react";
import "./App.css";
import { LoginForm, RegisterForm, ToDoList, Logo } from "./components";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Logo />
      <Switch>
        <Route exact path="/" component={LoginForm} />
        <Route exact path="/register" component={RegisterForm} />
        <Route exact path="/todo" component={ToDoList} />
      </Switch>
    </div>
  );
}

export default App;
