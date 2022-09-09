const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const testPath = __dirname + "/public";


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
console.log("TestPath: "+ testPath);































