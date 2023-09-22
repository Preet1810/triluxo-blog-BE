require('dotenv').config();
const express=require("express");
require('express-async-errors');
const bodyParser=require('body-parser');
const app=express();
const multer=require("multer")

app.use(express.json());
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }))
const upload=multer();

app.use(upload.any());

require("./app/startup/index.startup")(app);
