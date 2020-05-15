const express = require('express');
const cookieParser=require('cookie-parser')

const app= express();

const router=require('./routes')

app.use(express.json());
app.use(cookieParser())
app.use(express.urlencoded({ extended: false }));
app.use('/api/v1',router)

module.exports=app;
