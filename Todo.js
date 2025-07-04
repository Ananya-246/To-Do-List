const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  text: { type: String, required: true },
  description: { type: String, default: "" },
  dueDate: { type: Date },
  completed: { type: Boolean, default: false }
});

module.exports = mongoose.model("Todo", todoSchema);
