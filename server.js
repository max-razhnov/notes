const PORT = process.env.PORT || 5000;
const bodyParser = require("body-parser");
const express = require("express");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/", (req, res) => {
  const mes = "Server starts";
  return res.send(mes);
});

app.listen(PORT, () => {
  console.log(`server start on ${PORT} port`);
});
