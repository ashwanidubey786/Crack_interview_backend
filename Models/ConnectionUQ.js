const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ConnectionUQ = new Schema({
  question_id:String,
  user_email:String,
  note:String,
  status:Boolean
  
  
});


module.exports = mongoose.model('ConnectionUQ', ConnectionUQ);