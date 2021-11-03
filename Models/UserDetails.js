const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserDetails= new Schema({
  name:String,
  email:String,
  phone:Number,
  password:String  
});


module.exports = mongoose.model('UserDetails', UserDetails);