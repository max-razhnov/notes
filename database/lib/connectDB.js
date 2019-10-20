const mongoose = require("mongoose");
const MONGO_URI =
  process.env.MONGOLAB_URI ||
  process.env.MONGOHQ_URL ||
  "mongodb://localhost/notesDB";

const connectDatabase = () => {
  mongoose
    .connect(MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true
    })
    .then(() => {
      console.log("Connect to Database successfully...");
    })
    .catch(e => {
      console.log(e.toString());
    });
};

module.exports = connectDatabase;
