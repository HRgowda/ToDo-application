import { useState } from "react"

export function CreateTodo(){
  //local state variables
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return <div> 
    <div style={{display:"flex", justifyContent:"center"}}>

    <input style={{padding:10, margin:10, width:175}} type="text" placeholder="Enter the Title of Todo" onChange={function(currentValue){
      const value = currentValue.target.value;
      setTitle(currentValue.target.value)
    }} /> <br /> <br /> 

    </div>
    
    <div style={{display:"flex", justifyContent:"center"}}>

      <input style={{padding:10, margin:10, width:175}} type="text" placeholder="Enter the Description of Todo" onChange={function(currentValue){
        const value = currentValue.target.value;
        setDescription(currentValue.target.value)
      }}/> <br /> <br />

    </div>

    <div style={{display:"flex", justifyContent:"center"}}>

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
      }}>Add ToDo</button>

    </div>  
  </div>
  
}
