const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const absolutePath2 = __dirname + "/public";


app.use(express.static(absolutePath2));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());











module.exports=app;




















