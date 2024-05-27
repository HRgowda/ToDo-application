const mongoose = require("mongoose");
const { boolean } = require("zod");

mongoose.connect("your_mongodb url");

const postSchema = new mongoose.Schema({
  title:String,
  description:String,
  completed:Boolean
})

const todo = mongoose.model("todos", postSchema)

module.exports = {
  todo
}