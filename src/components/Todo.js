import React from "react";
import { Container, Title, TodoList } from "../style/styles";
import TodoCard from "./TodoCard";

const Todo = props => {
  return (
    <Container>
      <Title fontColor={"rgba(46, 122,246)"}>Daily</Title>
      <TodoList>
        {props.todos.map(todo => {
          if (todo.done === false)
            return (
              <TodoCard
                todos={todo}
                key={todo.id}
                handleDelete={props.deleteHandler}
                handleComplete={props.completeHandler}
              ></TodoCard>
            );
        })}
      </TodoList>
      <Title fontColor={"rgba(98, 115, 124)"}>Completed</Title>
      <TodoList>
        {props.todos.map(todo => {
          if (todo.done === true)
            return (
              <TodoCard
                todos={todo}
                key={todo.id}
                handleDelete={props.deleteHandler}
                handleComplete={props.completeHandler}
              ></TodoCard>
            );
        })}
      </TodoList>
    </Container>
  );
};

export default Todo;
