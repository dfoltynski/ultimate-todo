import React, { useState, useRef } from "react";
import "../App.css";
import Checkbox from "./Checkbox";

export default function AddToDoList() {
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

  const handleSaveTaskList = () => {
    // make API call to create new or put changed task list
    closeAddToDo();
  };

  const handleCancelTaskList = () => {
    closeAddToDo();
  };

  const taskList = useRef<HTMLDivElement>(null);
  const taskControls = useRef<HTMLDivElement>(null);
  const ToDo = useRef<HTMLDivElement>(null);

  return (
    <div className="addtodo" ref={ToDo}>
      <input
        type="text"
        name="listname"
        id="listname"
        className="input addtodo__input"
        placeholder="List name"
      />

      <div className="addtodo__separation"></div>

      <div className="addtodo__tasklist" ref={taskList}>
        {[...Array(taskAmount)].map((value, i) => (
          <div className="tasklist__task" key={i}>
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
            className="task__button task__button--cancel"
            onClick={handleCancelTask}
          >
            CANCEL
          </button>
          <button
            className="task__button task__button--add"
            onClick={handleAddTask}
          >
            ADD
          </button>
        </div>
      </div>
      <div className="addtodo__control">
        <button
          className="task__button addtodo__button--cancel"
          onClick={handleCancelTaskList}
        >
          CANCEL
        </button>
        <button
          className="task__button addtodo__button--save"
          onClick={handleSaveTaskList}
        >
          SAVE
        </button>
      </div>
    </div>
  );
}
