import React, { useState } from "react";
import { Form, TodoInput, Button } from "../style/styles";

const TodoForm = ({ onSaveTodos }) => {
  const [enteredTodo, setEnteredTodo] = useState("");

  const todoChangeHandler = event => {
    setEnteredTodo(event.target.value);
    console.log("input change");
  };

  const submitHandler = event => {
    event.preventDefault();

    const todoDatas = {
      todo: enteredTodo,
      done: false,
    };

    onSaveTodos(todoDatas);
    setEnteredTodo("");
  };

  return (
    <Form onSubmit={submitHandler}>
      <TodoInput
        onChange={todoChangeHandler}
        placeholder="New Task"
        value={enteredTodo}
        required
      ></TodoInput>
      <Button bgColor={"rgba(111, 73, 211)"}>New</Button>
    </Form>
  );
};

export default TodoForm;
