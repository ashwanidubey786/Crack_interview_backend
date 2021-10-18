const QuestionBank=require("./Models/QuestionBank")

exports.init =(router)=> {
    
    router.route('/question/find').get(async (req, res) =>{
        const data=await QuestionBank.find()
        console.log(data)
      res.send(data);
    });
    router.route('/question/find/JS').get(async (req, res) =>{
      const data=await QuestionBank.find({"type":"JS"})
      console.log(data)
    res.send(data);
  });
    router.route('/question/add').post((req, res) =>{
        console.log(req.body)
        const qb=new QuestionBank(req.body)
        qb.save().then((res)=>{console.log("successfullly added data")}).catch((res)=>{console.log("not added data")})
        res.send('Cron Jobs!!!');
      });
  };
  