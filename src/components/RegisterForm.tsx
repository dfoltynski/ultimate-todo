import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

export default function RegisterForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <Link to="/">
        <BsArrowLeft className="arrow" />
      </Link>
      <h1 className="form__header">Create an new account</h1>
      <input
        type="text"
        name="user"
        id="user"
        className="form__input"
        placeholder="Username"
      />
      <input
        type="text"
        name="email"
        id="email"
        className="form__input"
        placeholder="Email"
      />
      <input
        type="password"
        name="password"
        id="password"
        className="form__input form__input--password"
        placeholder="Password"
      />
      <input
        type="password"
        name="password2"
        id="password2"
        className="form__input form__input--password"
        placeholder="Repeat password"
      />
      <input type="submit" value="Create" className="form__button--submit" />
    </form>
  );
}
