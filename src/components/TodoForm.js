import React, { useState } from "react";
import { Form, TodoInput, Button } from "../style/styles";

const TodoForm = props => {
  const [enteredTodo, setEnteredTodo] = useState("");
  const [formError, setformError] = useState("");

  const todoChangeHandler = event => {
    setEnteredTodo(event.target.value);
  };

  const submitHandler = event => {
    event.preventDefault();

    const todoDatas = {
      todo: enteredTodo,
      done: false,
    };

    props.onSaveTodos(todoDatas);
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
