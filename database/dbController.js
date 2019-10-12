const notesFactory = require("./factories/notesFactory");

function DBController(modelName) {
  if (modelName !== "Note") {
    return {};
  }
  return notesFactory(modelName);
}

module.exports = DBController;
