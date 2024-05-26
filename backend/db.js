const mongoose = require("mongoose");
const { boolean } = require("zod");

mongoose.connect("mongodb+srv://hg510443:geMcr6JshjPIkeKf@hrg18.wyad9wl.mongodb.net/todos");

const postSchema = new mongoose.Schema({
  title:String,
  description:String,
  completed:Boolean
})

const todo = mongoose.model("todos", postSchema)

module.exports = {
  todo
}