const UserDetails=require("../Models/UserDetails")
const Joi = require('joi');


const schema = Joi.object({
    name: Joi.string()
        .min(4)
        .max(30)
        .required(),

    password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),

    //repeat_password: Joi.ref('password'),
    phone:  Joi.number().integer().min(1111111111).max(9999999999).required(),
    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required()
})
const adduser=async (req, res) =>{
    //console.log(req.body)
    var result=validateuser(req.body)
    console.log(result);
    if(result.error)
    {
       console.log(result.error.details[0].message)
       res.send({"success":false,"message":result.error.details[0].message}); 
    }
    var data=await  UserDetails.find({"email":req.body.email})
    if(data.length>=1)
        { 
          console.log("failed email")
          res.send({"success":false,"message":"email already exist"}); 
          return ;
      }
      data=await  UserDetails.find({"phone":req.body.phone})
      if(data.length>=1)
          { 
            console.log("failed phone")
            res.status(400).send({"success":false,"message":"phone number already exist"}); 
            return ;
        }

    const ud=new UserDetails(req.body)
    ud.save().then((res)=>{console.log("successfullly added data")}).catch((res)=>{console.log("not added data")})
    res.status(200).send({"success":true,"message":"account created succesfully"});
  }

  const finduser=async (req, res) =>{
    console.log(req.body.email,req.body.password)
  
    var query={"email":req.body.email , "password":req.body.password}
    const data=await  UserDetails.find(query)
    console.log(data,"good")
    if(data.length==1)
        {
          console.log({"success":true, name:data[0].name})
        res.status(200).send({"success":true, name:data[0].name}); 
        return ;
          }
    
    res.status(400).send({"success":false});      
}

const validateuser=(data)=>{
    return schema.validate(data);

}




module.exports ={adduser,finduser}