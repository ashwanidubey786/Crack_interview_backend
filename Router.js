const user=require("./controller/UserDetails")
const question=require("./controller/QuestionBank")
const connection=require("./controller/ConnectionUQ")

exports.init =(router)=> {
    
      router.route('/question/find').get(question.findquestion);
      router.route('/question/find/JS').get(question.findquestionjs);
      router.route('/question/add').post(question.addquestion);
      router.route('/user/add').post(user.adduser);
      router.route('/user/find').post(user.finduser);
      router.route('/connection/note').post(connection.addConnectionnote);
      router.route('/connection/status').post(connection.addConnectionstatus);
    
  };
  