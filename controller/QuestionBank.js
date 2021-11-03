const QuestionBank=require("../Models/QuestionBank")

const findquestion=async (req, res) =>{
    const data=await QuestionBank.find()
    console.log(data)
  res.send(data);
}

const findquestionjs=async (req, res) =>{
    const data=await QuestionBank.find({"type":"JS"})
    console.log(data)
  res.send(data);
}

const addquestion=(req, res) =>{
    console.log(req.body)
    const qb=new QuestionBank(req.body)
    qb.save().then((res)=>{console.log("successfullly added data")}).catch((res)=>{console.log("not added data")})
  
  }

module.exports ={findquestion,findquestionjs,addquestion}