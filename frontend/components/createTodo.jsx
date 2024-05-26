import { useState } from "react"

export function CreateTodo(){
  //local state variables
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return <div>

    <input style={{padding:10, margin:10}} type="text" placeholder="Title" onChange={function(e){
      const value = e.target.value;
      setTitle(e.target.value)
    }} /> <br /> <br /> 

    <input style={{padding:10, margin:10}} type="text" placeholder="Description" onChange={function(e){
      const value = e.target.value;
      setDescription(e.target.value)
    }}/> <br /> <br />

    <button style={{padding:10, margin:10}} onClick={()=>{
      fetch("http://localhost:3000/yourTodo",{
        method:"POST",
        body:JSON.stringify({
          title:title,
          description:description
        }),
        headers:{
          "Content-type":"application/json"
        }
      }).then(async function (res){
         await res.json();
        alert("ToDo added..")
        })
      }}
    >Add ToDo</button>

  </div>
}
