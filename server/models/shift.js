const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const shiftSchema = new Schema({
  date: { type: String },
  shift: { type: String }
});

module.exports = mongoose.model('Shift', shiftSchema);
