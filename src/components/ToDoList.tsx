import React from "react";
import { IoLogOut } from "react-icons/io5";
import { GrAdd } from "react-icons/gr";

export default function ToDoList() {
  const handleToDoAdd = () => {
    console.log("asd");
  };

  return (
    <div className="todo">
      <button className="todo__logout">
        <IoLogOut />
      </button>
      <div className="todo__control">
        <input
          type="text"
          name="search"
          id="search"
          className="control--search"
        />
        <input
          type="text"
          name="sort"
          id="sort"
          placeholder="sort"
          className="control--sort"
        />
      </div>
      <ul className="todo__list">
        {[...Array(15)].map(() => (
          <li className="list__element">
            <p className="element--title">ToDo List Name</p>
            <p className="element--date">Created at: 18-03-2021</p>
            <p className="element--remainings">
              Complated: 15 Uncomplated: 10 All: 25
            </p>
          </li>
        ))}
      </ul>

      <button className="todo__add" onClick={handleToDoAdd}>
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 24 24"
          className="add__icon"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="none"
            stroke="#ff9900"
            stroke-width="2"
            d="M12,22 L12,2 M2,12 L22,12"
          ></path>
        </svg>
      </button>
    </div>
  );
}
