import React from "react";
import TodoItem from "./TodoItem";

const TodoItemsContainer = ({
  todoList,
  activeType,
  editTodo,
  removeTodo,
  modifyType,
}) => {
  return (
    <div className="todo-item__container" style={{ width: "100%" }}>
      {todoList.map((todo) => (
        <TodoItem
          key={todo.id}
          todoDetails={todo}
          editTodo={editTodo}
          removeTodo={removeTodo}
          modifyType={modifyType}
        />
      ))}
    </div>
  );
};

export default TodoItemsContainer;
