import React from "react";
import { Container, Title, TodoList } from "../style/styles";
import TodoCard from "./TodoCard";

const Todo = ({ todos, deleteHandler, completeHandler }) => {
  return (
    <Container>
      <Title fontColor={"rgba(46, 122,246)"}>Daily</Title>
      <TodoList>
        {todos.map(todo => {
          if (todo.done === false)
            return (
              <TodoCard
                todo={todo}
                key={todo.id}
                handleDelete={deleteHandler}
                handleComplete={completeHandler}
              ></TodoCard>
            );
        })}
      </TodoList>
      <Title fontColor={"rgba(98, 115, 124)"}>Completed</Title>
      <TodoList>
        {todos.map(todo => {
          if (todo.done === true)
            return (
              <TodoCard
                todo={todo}
                key={todo.id}
                handleDelete={deleteHandler}
                handleComplete={completeHandler}
              ></TodoCard>
            );
        })}
      </TodoList>
    </Container>
  );
};

export default Todo;
