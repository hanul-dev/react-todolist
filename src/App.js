import React, { useState } from "react";

// Components
import Header from "./components/Header";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";

// Styled
import { Layout } from "./style/styles";

function App() {
  const [todos, setTodos] = useState([]);

  const onAddTodoHandler = todoDatas => {
    const todoLists = {
      ...todoDatas,
      id: Math.floor(Math.random() * (1000000 - 1)) + 1,
    };

    setTodos([...todos, todoLists]);
  };

  const deleteTodoHandler = id => {
    const newTodoList = todos.filter(todo => todo.id !== id);
    setTodos(newTodoList);
  };

  const completeTodoHandler = id => {
    const newTodoList = todos.map(todo =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    );
    setTodos(newTodoList);
  };

  return (
    <Layout>
      <Header />
      <TodoForm onSaveTodos={onAddTodoHandler} />
      <Todo
        todos={todos}
        deleteHandler={deleteTodoHandler}
        completeHandler={completeTodoHandler}
      ></Todo>
    </Layout>
  );
}

export default App;
