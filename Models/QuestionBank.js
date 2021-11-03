const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const questionBank = new Schema({
  
  question: String,
  type: String,
  level:String,
  link: String,
});


module.exports = mongoose.model('questionBank', questionBank);