import React from "react";
import { Button, TodoItem, WillDoneList } from "../style/styles";

// props 를 분해해서 받아오기
const TodoCard = ({ todo, handleComplete, handleDelete }) => {
  return (
    <WillDoneList>
      <TodoItem>{todo.todo}</TodoItem>
      {todo.done ? (
        <Button
          onClick={() => handleComplete(todo.id)}
          bgColor={"rgba(98, 115, 124)"}
        >
          Revert
        </Button>
      ) : (
        <Button
          onClick={() => handleComplete(todo.id)}
          bgColor={"rgba(98, 115, 124)"}
        >
          Done
        </Button>
      )}
      <Button
        onClick={() => handleDelete(todo.id)}
        bgColor={"rgba(255, 69, 58)"}
      >
        Delete
      </Button>
    </WillDoneList>
  );
};

export default TodoCard;
