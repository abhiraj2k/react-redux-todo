import React, { useState, useEffect } from "react";
import "../styles/bottomBar.scss";
const BottomBar = ({ todos, setTodoType, clear, activeType }) => {
  const [isCompleted, setIsCompleted] = useState(false);

  const handleActiveTypeChange = (type) => {
    setTodoType(type);
  };

  const isAnyCompleted = () => {
    for (const todo of todos) {
      if (todo.type === "completed") {
        setIsCompleted(true);
        return;
      }
    }
    setIsCompleted(false);
  };

  useEffect(() => {
    isAnyCompleted();
  });

  return (
    <div className="bottom-bar">
      <div className="bottom-bar__item-count">
        {todos.length + " "}
        {todos.length === 1 ? "item left" : "items left"}
      </div>
      <div className="bottom-bar__type">
        <span
          className={activeType === "all" ? "active" : ""}
          onClick={() => handleActiveTypeChange("all")}
        >
          All
        </span>
        <span
          className={activeType === "active" ? "active" : ""}
          onClick={() => handleActiveTypeChange("active")}
        >
          Active
        </span>
        <span
          className={activeType === "completed" ? "active" : ""}
          onClick={() => handleActiveTypeChange("completed")}
        >
          Completed
        </span>
      </div>
      <div className="bottom-bar__clear" onClick={clear}>
        {isCompleted ? "Clear Completed" : ""}
      </div>
      <div className="bottom-bar__bottom-strips">
        <div className="bottom-bar__bottom-strips"></div>
      </div>
    </div>
  );
};

export default BottomBar;
