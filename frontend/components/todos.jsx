export function Todo({ todos, setTodos, onUpdate }) {
  // Function to handle marking a todo as complete
  const toggleTodo = async (id) => {
    try {
      const response = await fetch('http://localhost:5000/completed', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id })
      });
      const updatedTodo = await response.json();
      setTodos(todos.map(todo => todo._id === id ? { ...todo, completed: true } : todo));
    } catch (error) {
      console.error('Error toggling todo:', error);
    }
  };

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo._id}>
          <h1>{todo.title}</h1>
          <h2>{todo.description}</h2>
          <button onClick={() => toggleTodo(todo._id)}>
            {todo.completed ? "Completed" : "Mark as complete"}
          </button>
        </div>
      ))}
    </div>
  );
}
