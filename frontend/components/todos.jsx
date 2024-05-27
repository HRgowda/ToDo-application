export function Todo({ todos }) {
 
  return (
    <div style={{display:"flex", justifyContent:"center"}}>
      {todos.map((todo) => (
        <div key={todo._id}>
          <h1>{todo.title}</h1>
          <h2>{todo.description}</h2>
          <button onClick={() => {
            fetch("http://localhost:3000/completed", {
              method: "PUT",
              body: JSON.stringify({ id: todo._id}),
              headers: {
                "Content-Type": "application/json",
              },
            }).then(async (res) => {
              //  await res.json();
              // No need to await the response if you're not using it
            })
            }}>{todo.completed == true ? "Completed" : "Mark as Done"}</button>
        </div>
      ))}
    </div>
  );
}
