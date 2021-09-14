import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

export default function LoginForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1 className="form__header">Login</h1>
      <input
        type="text"
        name="login"
        id="login"
        className="input form__input--login"
        placeholder="Email or Username"
      />
      <input
        type="password"
        name="password"
        id="password"
        className="input form__input--password"
        placeholder="Password"
      />
      <input type="submit" value="Login" className="form__button--submit" />
      <p className="text--white">or</p>
      <Link to="/register">
        <h2 className="form__button--register">create an account</h2>
      </Link>
    </form>
  );
}
