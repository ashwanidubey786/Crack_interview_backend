require('dotenv').config()
const {MongoClient}=require('mongodb')

const databaseName=process.env.DATABASENAME;
const host=process.env.HOST;
console.log(databaseName);
console.log(host);
