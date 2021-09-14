import React from "react";
import "../App.css";

export default function Checkbox() {
  return (
    <label className="container">
      <input type="checkbox" />
      <span className="checkmark"></span>
    </label>
  );
}
