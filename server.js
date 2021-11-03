const express=require('express');
const route = require(process.cwd() + '/router.js');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app=express();
const router = express.Router();
route.init(router);
app.use(bodyParser.json());
var cors = require('cors')
app.use(cors());
mongoose.connect(`mongodb://localhost:27017/interview_prepare`, {useNewUrlParser: true, useUnifiedTopology: true}, (err, res) => {
    if (err) {
         console.log("Error in establishing a MongoDB Connection");
       } else {
         console.log("Successfully established a MongoDB Connection ");
       }
     });

app.use('/',router);
app.listen(8081,()=>console.log("I am running on port no 8081"))