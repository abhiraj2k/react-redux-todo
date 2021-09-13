import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  add_todo,
  remove_todo_item,
  modify_todo,
  modify_todolist,
} from "../redux/ducks/todos";
import "../styles/todoList.scss";
import BottomBar from "./BottomBar";
import SearchBar from "./SearchBar";
import TodoItemsContainer from "./TodoItemsContainer";

const TodoList = () => {
  const todoList = useSelector((state) => state.todoList).todoList;
  const dispatch = useDispatch();
  const [type, setType] = useState("all");
  const [upfrontTodos, setUpfrontTodos] = useState(todoList);

  const handleSearchQuery = (query) => {
    addTodoItem(generateTodoObj(query));
  };

  const generateTodoObj = (query) => {
    //   Generate TODO Item
    return {
      name: query,
      type: "active",
    };
  };

  const modifyTodoType = (id, type) => {
    //   To fetch TODO item and modify it's type.
    const todoItem = todoList.filter((todo) => todo.id === id)[0];
    todoItem.type = type;
    modifiedTodoItem(todoItem);
  };

  const setTodoType = (type) => {
    setType(type);
  };

  const clearCompleted = () => {
    const tempArr = todoList.filter((todo) => todo.type !== "completed");
    dispatch(modify_todolist(tempArr));
    getUpfrontTodos();
  };

  const getUpfrontTodos = useCallback(() => {
    const tempArr = todoList.filter(
      (todo) => type === "all" || todo.type === type
    );
    setUpfrontTodos(tempArr);
  }, [type, todoList]);

  useEffect(() => {
    getUpfrontTodos();
  }, [getUpfrontTodos]);

  // Store Editing Methods
  const addTodoItem = (todoItem) => {
    dispatch(add_todo(todoItem));
    getUpfrontTodos(type);
  };

  const removeTodoItem = (id) => {
    dispatch(remove_todo_item(id));
    getUpfrontTodos(type);
  };

  const modifiedTodoItem = (todoItem) => {
    dispatch(modify_todo(todoItem));
    getUpfrontTodos(type);
  };

  return (
    <div className="todo-list">
      <SearchBar searchedQuery={handleSearchQuery} />

      <TodoItemsContainer
        todoList={upfrontTodos}
        activeType={type}
        editTodo={modifiedTodoItem}
        removeTodo={removeTodoItem}
        modifyType={modifyTodoType}
      />

      {todoList.length > 0 && (
        <BottomBar
          todos={todoList}
          setTodoType={setTodoType}
          clear={clearCompleted}
          activeType={type}
        />
      )}
    </div>
  );
};

export default TodoList;
