const ConnectionUQ=require("../Models/ConnectionUQ")

const addConnectionnote=async (req, res) =>{
    
   var user_email=req.body.email
   var question_id=req.body._id
   var note=req.body.note
   console.log(user_email,question_id,note)
   res.send(req.body)   
  }
  const addConnectionstatus=async (req, res) =>{
   var user_email=req.body.email
   var question_id=req.body._id
   var status=req.body.status
   console.log(user_email,question_id,status)
   res.send(req.body) 
      
}

module.exports={addConnectionnote,addConnectionstatus}