const mongoose = require("mongoose");
const { Schema } = mongoose;

const NoteSchema = new Schema({
  id: {
    type: String,
    required: true
  },
  userName: {
    type: String,
    required: true
  },
  userEmail: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  noteData: {
    type: String,
    required: true
  },
  date: {
    type: Number,
    required: true
  }
});

module.exports = modelName => mongoose.model(modelName, NoteSchema);
