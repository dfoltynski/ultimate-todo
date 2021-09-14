import React, { useState, useRef } from "react";
import "../App.css";
import Checkbox from "./Checkbox";

export default function ToDoList() {
  const [taskAmount, setTaskAmount] = useState<number>(1);

  const handleAddTask = () => {
    //  User can add new task without entering name to previous, because I find it more comfortable
    setTaskAmount(taskAmount + 1);
  };
  const handleCancelTask = () => {
    if (taskAmount > 1) {
      setTaskAmount(taskAmount - 1);
    }
  };

  const closeAddToDo = () => {
    document.querySelector(".blend")?.classList.add("closed");
    ToDo.current?.classList.add("closed");
  };

  const handleSaveTaskList = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // make API call to create new or put changed task list
    closeAddToDo();
  };

  const handleCancelTaskList = () => {
    closeAddToDo();
  };

  const taskList = useRef<HTMLDivElement>(null);
  const taskControls = useRef<HTMLDivElement>(null);
  const ToDo = useRef<HTMLFormElement>(null);

  return (
    <form className="todo-list" ref={ToDo} onSubmit={handleSaveTaskList}>
      <input
        type="text"
        name="listname"
        id="listname"
        className="input todo-list__input"
        placeholder="List name"
      />

      <div className="todo-list__separation"></div>

      <div className="todo-list__task-list" ref={taskList}>
        {[...Array(taskAmount)].map((value, i) => (
          <div className="task-list__task" key={i}>
            <Checkbox />
            <input
              type="text"
              name="taskname"
              id="taskname"
              className="task__input--text"
              placeholder="Task name"
            />
          </div>
        ))}
        <div className="task__control" ref={taskControls}>
          <button
            className="form__button task__button--cancel"
            onClick={handleCancelTask}
            type="button"
          >
            CANCEL
          </button>
          <button
            className="form__button task__button--add"
            onClick={handleAddTask}
            type="button"
          >
            ADD
          </button>
        </div>
      </div>
      <div className="todo-list__control">
        <button
          className="form__button todo-list__button--cancel"
          onClick={handleCancelTaskList}
        >
          CANCEL
        </button>
        <input
          className="form__button todo-list__button--save"
          type="submit"
          value="SAVE"
        />
      </div>
    </form>
  );
}
