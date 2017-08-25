const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const taskSchema = new Schema({
  title: {
    type: String
  },
  detail: {
    type: String
  },
  completed: {
    type: Boolean
  }
});

module.exports = mongoose.model('Task', taskSchema); //Task fait le lien avec la collection dans la base de donnée.
//Task ici -> tasks en base de donnée.
