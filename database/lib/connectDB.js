const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect("mongodb://localhost/notesDB", {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true
    })
    .then(() => {
      console.log("Connect to Database...");
    })
    .catch(e => {
      console.log(e.toString());
    });
};

module.exports = connectDatabase;
