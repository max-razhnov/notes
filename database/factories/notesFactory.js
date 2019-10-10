const NoteSchema = require("../models/note");

const NoteModel = NoteSchema("Note");

function noteMethodFactory(noteObject) {
  const note = new NoteModel(noteObject);
  note.save((err, note) => {
    if (err) return console.error(err);
    console.log(note);
  });
}

module.exports = noteMethodFactory;
