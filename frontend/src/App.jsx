import { useEffect, useState } from 'react';
import './App.css';
import { CreateTodo } from '../components/createTodo';
import { Todo } from '../components/todos';

function App() {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    try {
      const response = await fetch("http://localhost:3000/displayTodo");
      const json = await response.json();
      setTodos(json.todos);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div>
      <h1 style={{display:'flex', justifyContent:'center'}}>Welcome to ToDo application</h1>
      <CreateTodo />
      <Todo todos={todos} />
    </div>
  );
}

export default App;
