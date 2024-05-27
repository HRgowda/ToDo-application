const express = require("express"); 
const app = express();
const {createTodo, updateTodo} = require("../backend/zod");
const {todo} = require("../backend/db")
const { create } = require("domain");
const cors = require("cors");
const bodyparser = require('body-parser')

app.use(cors());

app.use(bodyparser.json())

app.use(express.json());

app.post("/signup", (req, res)=>{

})

app.post("/yourTodo", async (req, res)=>{
  const userinput = req.body;
  const validate = createTodo.safeParse(userinput);
  if(!validate.success){
    return res.status(411).json({
      message:"You sent a wrong inputs.."
    });
  }
  await todo.create({
    title:userinput.title,
    description:userinput.description,
    completed:false
  })
  res.status(200).json({
    message:"Todo created!"
  })
})

app.get("/displayTodo", async (req, res)=>{
  const todos = await todo.find({})
  res.json({
    todos
  });
})

app.put("/completed", async (req, res)=>{
  const id = req.body;
  const validate = updateTodo.safeParse(id);
  if(!validate.success){
    return res.status(411).json({
      message:"You sent a wrong id"
    });
  }
  await todo.updateOne({
    _id:req.body.id
  }, {
    completed:true
  })
  res.json({
    message:"Todo marked as completed!"
  })
});

app.listen(3000);