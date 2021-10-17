const express=require('express');
const app=express();
app.get('/',(req,res)=>{
    res.json("I am fullstack backend ")
})

app.listen(8081,()=>console.log("I am running on port no 8081"))