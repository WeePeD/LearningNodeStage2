const express = require('express');
const app = express();

const absolutePath  = __dirname + "/views/index.html";
const absolutePath2 = __dirname + "/public";

app.use(express.static(absolutePath2));

app.get('/',(req,res)=>{
    res.sendFile(absolutePath)
  });
  
  app.get('/json',(req,res)=>{
    process.env.MESSAGE_STYLE
    res.json({"message" : "Hello json"})
  });
































