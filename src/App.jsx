import { useState, useEffect } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  // State: saare todos ki list (browser ki memory se load hoti hai)
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });

  // Hook useEffect: jab bhi todos badlein, browser mein save karo
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Naya todo add karna
  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text: text, done: false };
    setTodos([...todos, newTodo]);
  };

  // Todo complete / incomplete karna
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  // Todo delete karna
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const doneCount = todos.filter((t) => t.done).length;

  return (
    <div className="app">
      <div className="card">
        <h1>Todo List</h1>
        <TodoInput onAdd={addTodo} />
        <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
        <p className="count">
          Total: {todos.length} | Complete: {doneCount}
        </p>
      </div>
    </div>
  );
}

export default App;
