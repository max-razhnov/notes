const PORT = process.env.PORT || 5000;
const bodyParser = require("body-parser");
const express = require("express");
const connectDatabase = require("./database/lib/connectDB");
const DBController = require("./database/dbController");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

connectDatabase();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

app.get("/", (req, res) => {
  const dbController = new DBController("Note");
  dbController
    .getAllNotes()
    .then(notesList => res.status(200).json(notesList))
    .catch(e => res.status(404).send(e));
});

app.post("/", (req, res) => {
  const dbController = new DBController("Note");

  if (req.body) {
    dbController
      .postNewNote(req.body)
      .then(newNote => res.status(200).json(newNote))
      .catch(e => res.status(404).send(e));
  }
});

app.delete("/", (req, res) => {
  const dbController = new DBController("Note");
  dbController
    .deleteAllNotes()
    .then(data => res.status(200).json(data))
    .catch(e => res.status(404).send(e));
});

// app.post("/:id", (req, res) => {
//   const dbController = new DBController("Note");
//   if (req.params.id) {
//     dbController
//       .deleteOne(req.params.id)
//       .then(data => res.status(200).json(data))
//       .catch(e => console.error(e));
//   }
// });

app.listen(PORT, () => {
  console.log(`server start on ${PORT} port`);
});
