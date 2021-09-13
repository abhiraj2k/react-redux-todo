import React, { useState } from "react";
import { Clear, Check } from "@material-ui/icons";
import "../styles/todoItem.scss";
export default function TodoItem({
  todoDetails,
  editTodo,
  removeTodo,
  modifyType,
}) {
  const [checked, setChecked] = useState(
    todoDetails.type === "active" ? false : true
  );
  const toggleChecked = () => {
    setChecked(!checked);
    handleModifyType();
  };
  const handleModifyType = () => {
    modifyType(todoDetails.id, checked ? "active" : "completed");
  };
  return (
    <div className="todo-item">
      <div className="todo-item__checkbox" onClick={toggleChecked}>
        {checked && <Check />}
      </div>
      <div className={`todo-item__name ${checked ? "checked" : ""} `}>
        {todoDetails.name}
      </div>
      <div className="todo-item__delete">
        <Clear onClick={() => removeTodo(todoDetails.id)} />
      </div>
    </div>
  );
}
