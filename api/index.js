const express = require("express");
const DBController = require("../database/dbController");
const router = express.Router();

router
  .route("/")
  .get((req, res) => {
    const dbController = new DBController("Note");
    dbController
      .getAllNotes()
      .then(notesList => res.status(200).json(notesList))
      .catch(e => res.status(404).send(e));
  })

  .post((req, res) => {
    const dbController = new DBController("Note");

    if (req.body) {
      dbController
        .postNewNote(req.body)
        .then(newNote => res.status(200).json(newNote))
        .catch(e => res.status(404).send(e));
    }
  })

  .delete((req, res) => {
    const dbController = new DBController("Note");
    dbController
      .deleteAllNotes()
      .then(data => res.status(200).json(data))
      .catch(e => res.status(404).send(e));
  });

module.exports = router;
