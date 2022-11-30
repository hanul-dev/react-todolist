import React from "react";
import { Button, TodoItem, WillDoneList } from "../style/styles";

const TodoCard = props => {
  return (
    <WillDoneList>
      <TodoItem>{props.todos.todo}</TodoItem>
      {props.todos.done ? (
        <Button
          onClick={() => props.handleComplete(props.todos.id)}
          bgColor={"rgba(98, 115, 124)"}
        >
          Revert
        </Button>
      ) : (
        <Button
          onClick={() => props.handleComplete(props.todos.id)}
          bgColor={"rgba(98, 115, 124)"}
        >
          Done
        </Button>
      )}
      <Button
        onClick={() => props.handleDelete(props.todos.id)}
        bgColor={"rgba(255, 69, 58)"}
      >
        Delete
      </Button>
    </WillDoneList>
  );
};

export default TodoCard;
