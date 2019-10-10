const PORT = process.env.PORT || 5000;
const bodyParser = require("body-parser");
const express = require("express");
const connectDatabase = require("./database/lib/connectDB");
const noteMethodFactory = require("./database/factories/notesFactory");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

connectDatabase();

// replace for api query
noteMethodFactory({
  id: "abc",
  userName: "Max Razhnov",
  userEmail: "qwerty@gmail.com",
  title: "Course",
  noteData: "First Note",
  date: 123456789
});

app.use("/", (req, res) => {
  const mes = "Server starts";
  return res.send(mes);
});

app.listen(PORT, () => {
  console.log(`server start on ${PORT} port`);
});
